(function () {
  /* Here be planets */
  const solSystem = {
    $canvas: undefined,
    $ctx: undefined,
    $solarSystemContainer: undefined,
    $sunContainer: undefined,
    $tooltip: undefined,
    // the radii of the planets is given in thousands of km, this scales all bodies down so that at least the planets are 100% visible.
    bodiesScale: .005,
    // largePlanets: ["Juptier", "Saturn", "Uranus", "Neptue"],

    async getData(parameters) {
      let response = await fetch(`https://api.le-systeme-solaire.net/rest/bodies${parameters}`);
      return await response.json();
    },

    drawSun(dataTheSun, scale = this.bodiesScale) {
      console.log(dataTheSun.meanRadius, scale);
      $theSun = document.getElementById("the-sun");

      let meanDiameterScaled = dataTheSun.meanRadius *= 2 * scale;
      let offsetX = 0;
      $theSun.style = `height: ${meanDiameterScaled}px;
                       width: ${meanDiameterScaled}px;
                       left: ${meanDiameterScaled / -2}px;
                       top: -${meanDiameterScaled - 200}px;`;

      this.$sunContainer.appendChild($theSun);
    },

    drawPlanet(planet, scale = this.bodiesScale) {
      console.log(planet.meanRadius, scale);
      let meanDiameterScaled = planet.meanRadius *= 2 * scale;

      let $newPlanet = document.createElement("div");
      $newPlanet.id = "planet-" + planet.englishName.toLowerCase();
      $newPlanet.setAttribute("class", "sol-system-body sol-system-planet");
      $newPlanet.style = `height: ${meanDiameterScaled}px; width: ${meanDiameterScaled}px;`;
      $newPlanet.dataset.planetName = planet.englishName;
      $newPlanet.setAttribute("title", `Click for information about ${planet.englishName}`);

      // todo(joch): handle the moons better, if the screen is small the "tooltip" with data overflows.
      let moonMarkup = "";
      if (planet.moons !== null) {
        let moonsArray = planet.moons.map(moon => moon.moon);
        let moonInfo = moonsArray.join(", ");
        moonMarkup = `
        <h5>Moons <span>(${planet.moons.length})</span>:</h5>
        <p>${moonInfo}</p>
        `;
      }
      
      // todo(joch): optimize so we're only doing what's required when the element the bodies are drawn.
      // planeInfo and moonMarkup above for instance be moved to things can be moved to the this.handleData()
      let planetInfo =
        `
        <h4>${planet.englishName}</h4>
        <h5>Information:</h5>
        <table>
          <tr>
            <td>Semi Major Axis</td><td>${planet.semimajorAxis.toLocaleString()} km</td>
          </tr>
          <tr>
            <td>Aphelion</td><td>${planet.aphelion.toLocaleString()} km</td>
          </tr>
          <tr>
            <td>Perihelion</td><td>${planet.perihelion.toLocaleString()} km</td>
          </tr>
          <tr>
            <td>Volume</td>
            <td title="${(planet.vol.volValue * (10 ** planet.vol.volExponent)).toLocaleString()} km&sup3;">
              ${planet.vol.volValue} x 10<sup>${planet.vol.volExponent}</sup> km&sup3;
            </td>
          </tr>
          <tr>
            <td>Density</td>
            <td>${planet.density.toLocaleString()} g/cm<sup>3</sup></td>
          </tr>
          <tr>
            <td>Gravity</td><td>${planet.gravity.toLocaleString()} m/s<sup>2</sup></td>
          </tr>
          <tr>
            <td>Radius (mean)</td><td>${planet.meanRadius.toLocaleString()} km</td>
          </tr>
          <tr>
            <td>Radius (at equator)</td><td>${planet.equaRadius.toLocaleString()} km</td>
          </tr>
          <tr>
            <td>Radius (polar)</td><td>${planet.polarRadius.toLocaleString()} km</td>
          </tr>
          <tr>
            <td>Axial Tilt</td><td>${planet.axialTilt} &deg;</td>
          </tr>
        </table>
        ${moonMarkup}
      `;
      
      $newPlanet.dataset.planetData = planetInfo;
      this.$solarSystemContainer.appendChild($newPlanet);
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
      
      // Draw the celestial bodies.
      this.drawSun(theSun);

      for (let planet of planetaryBodies.bodies) {
        this.drawPlanet(planet);
      }

      // Open a popup-window when a planet is clicked containting information about it. 
      this.$solarSystemContainer.addEventListener("click", e => {
        if (e.target.classList.contains("sol-system-planet")) {
          let $planet = e.target;
          let $tooltipContents = this.$tooltip.querySelector("#tooltip-contents");

          document.querySelector("#tooltip-close-button").addEventListener("click", e => {
              this.$tooltip.classList.add("hidden");
              $tooltipContents.innerHTML = "";
          },
          {
            once: true // The event should only fire.
          });
          $tooltipContents.innerHTML = $planet.dataset.planetData;
          this.$tooltip.classList.remove("hidden");
        }
      });
    },

    init() {
      this.$solarSystemContainer = document.querySelector("#solar-system-container");
      this.$sunContainer = document.querySelector("#the-sun-container");
      this.$tooltip = document.querySelector("#tooltip");
      this.handleData();
    }
  };

  // Self-invoking "main"-function.
  (function main() {
    solSystem.init();
  }());
}());
