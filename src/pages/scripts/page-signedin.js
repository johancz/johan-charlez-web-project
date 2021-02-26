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
      console.error("Unknown error.");
    }
  }

  // Self-invoking "main"-function.
  (function main() {
    console.log("main (page-signedin.js)");
    // Load API implementation scripts.
    loadAPIScript("./pages/scripts/subpage-api-random-fox.js");
    loadAPIScript("./pages/scripts/subpage-solar-system.js");
    loadAPIScript("./pages/scripts/subpage-api-vasttrafik-livemap.js");
  }());
}());
