(function () {
  /* Here be planets */
  const solSystem = {
    $canvas: undefined,
    $ctx: undefined,
    $solarSystemContainer: undefined,
    $sunContainer: undefined,
    $infoPopup: undefined,
    $infoPopupContents: undefined,
    // the radii of the planets is given in thousands of km,
    // this scales all bodies down so that at least the planets are 100% visible
    // (except for the largest planets on small screens).
    bodiesScale: .005,

    async getData(parameters) {
      let response = await fetch(`https://api.le-systeme-solaire.net/rest/bodies${parameters}`);
      return await response.json();
    },

    drawSun(dataTheSun, scale = this.bodiesScale) {
      $theSun = document.getElementById("the-sun");
      $theSun.dataset.bodyData = JSON.stringify(dataTheSun);

      let meanDiameterScaled = dataTheSun.meanRadius *= 2 * scale;
      let offsetX = 0;
      $theSun.style = `height: ${meanDiameterScaled}px;
                       width: ${meanDiameterScaled}px;
                       left: ${meanDiameterScaled / -2}px;
                       top: -${meanDiameterScaled - 200}px;`;
    },

    drawPlanet(planet, scale = this.bodiesScale) {
      let meanDiameterScaled = planet.meanRadius *= 2 * scale;

      let $newPlanet = document.createElement("div");
      $newPlanet.id = "planet-" + planet.englishName.toLowerCase();
      $newPlanet.setAttribute("class", "sol-system-body sol-system-planet");
      $newPlanet.style = `height: ${meanDiameterScaled}px; width: ${meanDiameterScaled}px;`;
      $newPlanet.dataset.planetName = planet.englishName; // Used by $newPlanet's "::after" pseudo-element.
      $newPlanet.dataset.bodyData = JSON.stringify(planet);
      $newPlanet.setAttribute("title", `Click for information about ${planet.englishName}`);
      this.$solarSystemContainer.appendChild($newPlanet);
    },

    showCelestialBodyInfoPopup(celestialBody) {
      console.log(celestialBody);
      document.querySelector("#info-popup-planet-name").innerHTML = celestialBody.englishName;
      document.querySelector("#planet-data-semi-major-axis").innerHTML = celestialBody.semimajorAxis.toLocaleString() + " km";
      document.querySelector("#planet-data-aphelion").innerHTML = celestialBody.aphelion.toLocaleString() + " km";
      document.querySelector("#planet-data-perihelion").innerHTML = celestialBody.perihelion.toLocaleString() + " km";

      if (celestialBody.vol !== null && celestialBody.vol.volValue !== null && celestialBody.vol.volExponent !== null) {
      document.querySelector("#planet-data-volume").innerHTML = `${celestialBody.vol.volValue} x 10<sup>${celestialBody.vol.volExponent}</sup> km&sup3`;
      document.querySelector("#planet-data-volume").title = `${(celestialBody.vol.volValue * (10 ** celestialBody.vol.volExponent)).toLocaleString()} km³`;
      }

      document.querySelector("#planet-data-density").innerHTML = celestialBody.density.toLocaleString() + " g/cm<sup>3</sup>";
      document.querySelector("#planet-data-gravity").innerHTML = celestialBody.gravity.toLocaleString() + " m/s<sup>2</sup>";
      document.querySelector("#planet-data-radius-mean").innerHTML = celestialBody.meanRadius.toLocaleString() + " km";
      document.querySelector("#planet-data-radius-equator").innerHTML = celestialBody.equaRadius.toLocaleString() + " km";
      document.querySelector("#planet-data-radius-polar").innerHTML = celestialBody.polarRadius.toLocaleString() + " km";
      document.querySelector("#planet-data-axial-tilt").innerHTML = celestialBody.axialTilt + "&deg;";

      if (celestialBody.moons !== null) {
        document.querySelector("#info-popup-moon-count").innerHTML = "(" + celestialBody.moons.length + ")";
        document.querySelector("#info-popup-moon-data").innerHTML = celestialBody.moons.map(moon => moon.moon).join(", ");
      }
    
      this.$infoPopup.classList.remove("hidden");
    },

    hideCelestialBodyInfoPopup() {
      this.$infoPopup.classList.add("hidden");
      document.querySelector("#info-popup-planet-name").innerHTML = "";
      document.querySelector("#planet-data-semi-major-axis").innerHTML = "";
      document.querySelector("#planet-data-aphelion").innerHTML = "";
      document.querySelector("#planet-data-perihelion").innerHTML = "";
      document.querySelector("#planet-data-volume").innerHTML = "";
      document.querySelector("#planet-data-volume").title = "";
      document.querySelector("#planet-data-density").innerHTML = "";
      document.querySelector("#planet-data-gravity").innerHTML = "";
      document.querySelector("#planet-data-radius-mean").innerHTML = "";
      document.querySelector("#planet-data-radius-equator").innerHTML = "";
      document.querySelector("#planet-data-radius-polar").innerHTML = "";
      document.querySelector("#planet-data-axial-tilt").innerHTML = "";
      document.querySelector("#info-popup-moon-count").innerHTML = "";
      document.querySelector("#info-popup-moon-data").innerHTML = "";
    },

    async handleData() {
      console.log("\"this\"", this);

      // Get the planets with a meanRadius above 2000 (m).
      // This requests planeterary bodies width a mean-radius larger than 2.000 km, ordered by periphelion (ascending).
      // There's a bug in the API where the parameter 'filter[]=isPlanet,eq,true' (where eq is the equals operator) returns bodies which are not planets.
      // Here is the bug report on Github: https://github.com/systeme-solaire/api-rest/issues/3.
      // One workaround mentioned in the bug report is to use 'neq' (not equals) instead of 'eq'. ¯\_(ツ)_/¯
      planetaryBodies = await this.getData("?data=&filter[]=isPlanet,neq,true&filter[]=meanRadius,gt,2000&order=perihelion,asc");

      // Get the sun.
      theSun = await this.getData("?data=&filter[]=englishName,eq,Sun");
      theSun = theSun.bodies[0];
      console.log("theSun:", theSun);
      
      // Create and draw the sun's element.
      this.drawSun(theSun);

      // Create and draw planet-elements.
      for (let planet of planetaryBodies.bodies) {
        this.drawPlanet(planet);
      }

      // Open a popup-window when a planet is clicked containting information about it. 
      this.$solarSystemContainer.addEventListener("click", e => {
        // if (e.target.classList.contains("sol-system-planet")) {
        if (e.target.classList.contains("sol-system-body")) {
          let $planet = e.target;

          document.querySelector("#info-popup-close-button").addEventListener("click", e => {
              this.hideCelestialBodyInfoPopup();
          },
          {
            once: true // The event is only needed once.
          });

          this.showCelestialBodyInfoPopup(JSON.parse($planet.dataset.bodyData));
        }
      });
    },

    init() {
      this.$solarSystemContainer = document.querySelector("#solar-system-container");
      this.$sunContainer = document.querySelector("#the-sun-container");
      this.$infoPopup = document.querySelector("#info-popup");
      this.$infoPopupContents = this.$infoPopup.querySelector("#info-popup-contents");
      this.handleData();
    }
  };

  // Self-invoking "main"-function.
  (function main() {
    solSystem.init();
  }());
}());
