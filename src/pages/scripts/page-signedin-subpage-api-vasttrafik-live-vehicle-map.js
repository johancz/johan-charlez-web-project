(function () {
  const vasttrafikBuses = {
    $canvas: undefined,
    $ctx: undefined,
    currentData: undefined,
    temp_data: undefined,
    bounding_box: {
      coordinates: {
        minx: 11.9184494,
        maxy: 57.7220735,
        maxx: 12.0229912,
        miny: 57.6876803,
      },
      combinedAsUrlVars: ""
    },
    generatingToken: false,
    token: undefined,
    key: undefined, // note(joch): only for local development
    secret: undefined, // note(joch): only for local development

    async generateToken() {
      // Don't generate a new token if the process has already been started.
      if (this.generatingToken) {
        return false;
      }
      console.log(":::::::::::::::: generateToken ::::::::::");
      this.generatingToken = true;
      let base64encodedKeyAndSecret = btoa(`${key}:${secret}`);

      let response = await fetch(`https://api.vasttrafik.se/token`, {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/x-www-form-urlencoded",
          "Authorization": `Basic ${base64encodedKeyAndSecret}`
        }),
        body: encodeURI("grant_type=client_credentials&scope=device_dev")
      });

      // console.log(response);
      if (!response.ok) {
        if (response.status === 401) {
          console.error("[401] token has expired, generate a new token.");
          await this.generateToken();
        }
        else {
          console.error("Some other error, abort.");
          console.error(repsonse);
          return false; // Some other error, abort.
        }
      }

      console.log("CHECK");
      console.log(response);
      // let data = await response.body();
      let data = await response.json();
      console.log(data);
      console.log("CHECK");

      this.token = data;
      this.generatingToken = false; // note(joch): this reset might have to be moved to code verifying that the new token works.
    },

    use_static_data: false, // todo(joch): Remove
    async getData() {
      if (this.use_static_data) { // todo(joch): Remove
        return false;
      } // todo(joch): Remove

      let urlVars = encodeURI(`${this.bounding_box.combinedAsUrlVars}&onlyRealtime=yes`);
      let response = await fetch(`https://api.vasttrafik.se/bin/rest.exe/v2/livemap${urlVars}`, {
        headers: new Headers({
          "Authorization": "Bearer " + this.token.access_token
        }),
      });

      // console.log(response);
      if (!response.ok) {
        if (response.status === 401) {
          console.error("[401] token has expired, generate a new token.");
          await this.generateToken();
        }
        else {
          console.error("Some other error, abort.");
          console.error(repsonse);
          return false; // Some other error, abort.
        }
      }

      console.log("CHECK");
      console.log(response);
      // https://api.vasttrafik.se/bin/rest.exe/v2/livemap?minX=11918449.4&maxY=57722073.5&maxX=12022991.2&minY=57687680.3&onlyRealtime=yes
      // https://api.vasttrafik.se/bin/rest.exe/v2/livemap?minX=11918449&maxY=57722074&maxX=12022991&minY=57687680&onlyRealtime=yes
      // https://api.vasttrafik.se/bin/rest.exe/v2/livemap?minx=11918449&maxx=12022991&miny=57687680&maxy=57722074&onlyRealtime=yes
      let data = await response.json();
      console.log(data);
      console.log("CHECK");

      // Get the min and max value of the buses' x- and y-coordinates.
      data.vehicleMinMaxCoordinates = {
        maxY: Math.max.apply(Math, data.livemap.vehicles.map(vehicle => vehicle.y)),
        maxX: Math.max.apply(Math, data.livemap.vehicles.map(vehicle => vehicle.x)),
        minY: Math.min.apply(Math, data.livemap.vehicles.map(vehicle => vehicle.y)),
        minX: Math.min.apply(Math, data.livemap.vehicles.map(vehicle => vehicle.x))
      };

      this.currentData = data;
      // this.currentData = this.temp_data;
    },

    async init() {
      // note(joch): only for development?
      if (typeof this.key === "undefined" || typeof this.key === "undefined") {
        console.error("API 'key' and/or 'secret' is missing");
        alert("API 'key' and/or 'secret' is missing");
        return false;
      }

      this.$canvas = document.querySelector("#canvas-sol-system");
      this.$canvas.width = 1218;
      this.$canvas.height = 750;
      this.$canvas.style.backgroundImage = "url(../../resources/background-images/map_gbg_for_busses.png";
      this.$canvas.style.backgroundSize = "1218px 750px"
      this.$ctx = this.$canvas.getContext("2d");
      console.log("before generating new token in init()");
      await this.generateToken();
      console.log("after generating new token in init()");

      // The API requires the coordinates in the format "WGS84 * 1000000".
      for (let key in this.bounding_box.coordinates) {
        // if (Object.hasOwnProperty.call(this.coordinates_bounding_box, key)) {
        if (this.bounding_box.coordinates.hasOwnProperty(key)) {
          this.bounding_box.coordinates[key] = Math.round(this.bounding_box.coordinates[key] * 1000000);
          this.bounding_box.combinedAsUrlVars += this.bounding_box.combinedAsUrlVars.length === 0 ? "?" : "&";
          console.log(this.bounding_box.combinedAsUrlVars);
          this.bounding_box.combinedAsUrlVars += `${key}=${this.bounding_box.coordinates[key]}`;
          console.log(this.bounding_box.combinedAsUrlVars);
        }
      }

      setInterval(async function () { // note(joch): What if the previous fetch took longer than the timeout?
        await this.getData();

        if (!this.currentData) {
          return false;
        }

        // Calculate the scale (canvasSize / size of the bounding area in coordinates).
        let scaleX = this.$canvas.width / (this.currentData.livemap.maxx - this.currentData.livemap.minx);
        let scaleY = this.$canvas.height / (this.currentData.livemap.maxy - this.currentData.livemap.miny);

        this.$ctx.clearRect(0, 0, this.$canvas.width, this.$canvas.height);
        this.$ctx.fillStyle = "black";

        for (let i = 0; i < this.currentData.livemap.vehicles.length; i++) {
          let vehicle = this.currentData.livemap.vehicles[i];
          let canvas_vehicleX = (vehicle.x - this.currentData.livemap.minx) * scaleX;
          // Flip the Y since the coordinates above the ecuator increments the farther north you go. The Y-axis in HTML 5 Canvas "starts" at the top.
          let canvas_vehicleY = this.$canvas.height - ((vehicle.y - this.currentData.livemap.miny) * scaleY);
          this.$ctx.beginPath();
          this.$ctx.arc(canvas_vehicleX, canvas_vehicleY, 5, 0, 2 * Math.PI);
          this.$ctx.fill();
          this.$ctx.closePath();
        }
      }.bind(this), 1000);
    }
  };

  // Self-invoking "main"-function.
  (function main() {
    console.log("main (page-signedin-subpage-api-vasttrafik-live-vehicle-map.js)");
    // this.use_static_data = true;
    vasttrafikBuses.init();
  }());
}());
