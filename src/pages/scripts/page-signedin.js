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
    // Load subpages
    loadAPIScript("./pages/scripts/page-signedin-subpage-api-random-fox.js");
    console.log("test: after the 3rd loadAPIScript call.");
  }());
}());
