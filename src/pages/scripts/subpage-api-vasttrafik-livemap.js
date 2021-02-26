(function () {
  const vasttrafikBuses = {
    $canvas: undefined,
    $ctx: undefined,
    currentData: undefined,
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
    key: undefined, // note: Warning! Do not make the key public!
    secret: undefined, // note: Warning! Do not make the secret public!

    async generateToken() {
      // Don't generate a new token if the process has already been started.
      if (this.generatingToken) {
        return false;
      }
      
      this.generatingToken = true;
      let base64encodedKeyAndSecret = btoa(`${this.key}:${this.secret}`);

      let response = await fetch(`https://api.vasttrafik.se/token`, {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/x-www-form-urlencoded",
          "Authorization": `Basic ${base64encodedKeyAndSecret}`
        }),
        body: encodeURI("grant_type=client_credentials&scope=device_dev")
      });

      if (!response.ok) {
        if (response.status === 401) {
          console.error("[401]: API access token has expired.");
          await this.generateToken();
        }
        else {
          console.error("Unknown error, aborting.");
          return false;
        }
      }

      this.token = await response.json();
      this.generatingToken = false;
    },

    async getData() {
      let urlVars = encodeURI(`${this.bounding_box.combinedAsUrlVars}&onlyRealtime=yes`);
      let response = await fetch(`https://api.vasttrafik.se/bin/rest.exe/v2/livemap${urlVars}`, {
        headers: new Headers({
          "Authorization": "Bearer " + this.token.access_token
        }),
      });
      
      if (!response.ok) {
        if (response.status === 401) {
          console.error("[401] token has expired, generate a new token.");
          await this.generateToken();
        }
        else {
          console.error("Unknown error, aborting.");
          return false;
        }
      }

      let data = await response.json();

      // Get the min and max value of the buses' x- and y-coordinates.
      data.vehicleMinMaxCoordinates = {
        maxY: Math.max.apply(Math, data.livemap.vehicles.map(vehicle => vehicle.y)),
        maxX: Math.max.apply(Math, data.livemap.vehicles.map(vehicle => vehicle.x)),
        minY: Math.min.apply(Math, data.livemap.vehicles.map(vehicle => vehicle.y)),
        minX: Math.min.apply(Math, data.livemap.vehicles.map(vehicle => vehicle.x))
      };

      this.currentData = data;
    },

    async init() {
      if (typeof this.key === "undefined" || typeof this.key === "undefined") {
        console.error("API 'key' and/or 'secret' is missing");
        return false;
      }

      this.$canvas = document.querySelector("#canvas-vasttrafik-livemap");
      this.$canvas.width = 1218;
      this.$canvas.height = 750;
      this.$canvas.style.backgroundImage = "url(../../resources/background-images/map_gbg_for_busses.png";
      this.$canvas.style.backgroundSize = "100% 100%"
      this.$ctx = this.$canvas.getContext("2d");

      // Generate a new access token, which is required to use the API.
      await this.generateToken();

      // The API requires the coordinates in the format "WGS84 * 1.000.000".
      for (let key in this.bounding_box.coordinates) {
        if (this.bounding_box.coordinates.hasOwnProperty(key)) {
          this.bounding_box.coordinates[key] = Math.round(this.bounding_box.coordinates[key] * 1000000);
          this.bounding_box.combinedAsUrlVars += this.bounding_box.combinedAsUrlVars.length === 0 ? "?" : "&";
          this.bounding_box.combinedAsUrlVars += `${key}=${this.bounding_box.coordinates[key]}`;
        }
      }

      // note(joch): What if the previous fetch took longer than the timeout?
      setInterval(async function () {
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
      }.bind(this), 2000);
    }
  };

  // Self-invoking "main"-function.
  (function main() {
    vasttrafikBuses.init();
  }());
}());
