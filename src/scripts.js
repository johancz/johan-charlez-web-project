(function () {
  "use strict";
  var oktaSignIn;

  // the '$'-prefix denotes that the variable is an html element, or collection/array/object of/with such.
  const $mainMenu = document.getElementById("nav-main");

  /* Pages */
  const $pages = {
    "home": document.getElementById("page-home"),
    "about-developer": document.getElementById("page-about-developer"),
    "main-contents": document.getElementById("page-main-contents")
  };
  const [$mainContainer, $mainOtherPages] = document.getElementsByClassName("page-container");
  const $pageScriptsContainer = document.getElementById("page-scripts");

  if ($mainContainer === null || $mainOtherPages === null) {
    console.error("Missing vital markup, aborting.")
    return;
  }

  async function handleClick_mainMenu(e) {
    // Stop the browser from loading 'e.target.href'.
    e.preventDefault();

    // Show the correct page and hide the rest.
    switch (e.target.dataset.menuitem) {
      case "Home":
        while ($mainOtherPages.firstChild !== null) {
          $mainOtherPages.removeChild($mainOtherPages.firstChild);
        }
        $mainOtherPages.classList.add("hidden");
        $mainContainer.classList.remove("hidden");
        break;
      case "AboutTheDeveloper":
      case "Login": {
        // Remove old page scripts:
        while ($pageScriptsContainer.firstChild !== null) {
          $pageScriptsContainer.removeChild($pageScriptsContainer.firstChild);
        }

        // Fetch the page.
        let requestPage = await fetch(e.target.href);
        // Success, await the data and insert the page's markup.
        let requestData = await requestPage.text();
        $mainOtherPages.innerHTML = requestData;

        // Once the new page has been added to the DOM, load its' scripts (if any).
        if ("pageScripts" in e.target.dataset) {
          for (let scriptPath of JSON.parse(e.target.dataset.pageScripts)) {

            // Fetch all of the page's script-files using provided scriptPaths.
            let requestPage = await fetch(scriptPath);

            // Success, await the data and add the scripts to <body>/$pageScriptsContainer.
            let requestData = await requestPage.text();
            let $script = document.createElement("script");
            $script.type = "text/javascript";
            $script.textContent = requestData;
            $pageScriptsContainer.appendChild($script);
          }
        }

        // Hide the "Home"-page and show the fetched page.
        $mainContainer.classList.add("hidden");
        $mainOtherPages.classList.remove("hidden");
        break;
      } // end of 'case: "Login"'
      default:
        console.error(`The "${e.target.dataset.menuitem}"-menuitem was unexpected. It does not have a corresponding "page".`);
        break;
    }
  }

  // note(joch): If there is only one event to handle, remove this function and reference the 'handleClick_mainMenu'-callback directly?
  function handleEvent(e) {
    switch (e.type) {
      case "click":
        if (e.currentTarget.id === "nav-main") {
          handleClick_mainMenu(e);
        }
        break;
      default:
        console.error(`The "${e.type}"-event does not have a handler.`);
        break;
    }
  }

  // Self-invoking "main"-function.
  (function main() {
    $mainMenu.addEventListener("click", handleEvent, false);
    // initContent();
  }());
}());
