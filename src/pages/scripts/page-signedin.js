(function() {
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

  // Self-invoking "main"-function.
  (function main() {
    console.log("main (page-signedin.js)");
    // Load API implementation scripts.
    loadAPIScript("./pages/scripts/page-signedin-subpage-api-random-fox.js");
    loadAPIScript("./pages/scripts/page-signedin-subpage-solar-system.js");
    loadAPIScript("./pages/scripts/page-signedin-subpage-api-vasttrafik-live-vehicle-map.js");
  }());
}());
