(function () {
  const $pageScriptsContainer = document.getElementById("page-scripts");

  async function loadAPIScript(url) {
    let response = await fetch(url);

    console.log(response);
    if (response.ok) {
      let data = await response.text();
      let $script = document.createElement("script");
      $script.type = "text/javascript";
      $script.textContent = data;
      $script.classList.add("sub-script");
      $pageScriptsContainer.appendChild($script);

    }
    else {
      // todo(joch): error handling.
      console.log(response);
    }
  }

  // Load subpages
  (function main() {
    loadAPIScript("./pages/scripts/page-signedin-subpage-solar-system.js");
    console.log("test: after the 1st loadAPIScript call.");
    loadAPIScript("./pages/scripts/page-signedin-subpage-api-vasttrafik-live-vehicle-map.js");
    console.log("test: after the 2nd loadAPIScript call.");
    loadAPIScript("./pages/scripts/page-signedin-subpage-api-random-fox.js");
    console.log("test: after the 3rd loadAPIScript call.");
  }());
}());
