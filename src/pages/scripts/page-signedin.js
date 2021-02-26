(function() {
  const $pageScriptsContainer = document.getElementById("page-scripts");
  const $apiTabContainer = document.querySelector("#tabs");
  
  async function loadAPIScript(url) {
    let response = await fetch(url);

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

  function onTabClick(e) {
    if (e.target.classList.contains("tab")) {
      if (e.target.dataset.selectedTab === "false") {

        // "Unselected" the currently selected tab.
        document.querySelector('.tab[data-selected-tab="true"').dataset.selectedTab = "false";
        // Hide all ".tab-content" elements.
        document.querySelectorAll(".tab-content").forEach( element => element.classList.add("hidden") );

        // Mark the clicked tab as the selected tab,
        e.target.dataset.selectedTab = "true";
        // Show the ".tab-content" element referenced by ID in the clicked tab's "data-tab-content-id" attribute.
        document.querySelector(`#${e.target.dataset.tabContentId}`).classList.remove("hidden");
      }
    }
  }

  // Self-invoking "main"-function.
  (function main() {
    $apiTabContainer.addEventListener("click", onTabClick, false);

    // Load API implementation scripts.
    loadAPIScript("./pages/scripts/subpage-api-random-fox.js");
    loadAPIScript("./pages/scripts/subpage-solar-system.js");
    loadAPIScript("./pages/scripts/subpage-api-vasttrafik-livemap.js");
  }());
}());
