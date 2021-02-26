(function () {
  "use strict";
  // the '$'-prefix on variables and properties will be used throughout the project to denotes that the variable is an html element, or collection/array/object of/with such.
  const $mainMenu = document.getElementById("nav-main");

  /* Pages */
  const [$mainContainer, $mainOtherPages] = document.getElementsByClassName("page-container");
  const $pageScriptsContainer = document.getElementById("page-scripts");
  const $hackerLoginButton = document.querySelector("#hackerLogin");

  if ($mainContainer === null || $mainOtherPages === null) {
    console.error("Missing vital markup, aborting.")
    return;
  }

  async function handleClick_mainMenu(e) {
    // Stop the browser from loading 'e.target.href'.
    e.preventDefault();

    // todo(joch): This button is used for development and serves as a back-up in case Okta's servers go down during the presentation (Murphy's Law).
    $hackerLoginButton.classList.add("hidden");
    console.log(document.querySelectorAll("[data-menuitem]"));
    console.log(e.target);
    // Remove the menuitem-selected from all element with the "[data-menuitem]"-attribute and add it to the clicked menuitem.
    document.querySelectorAll("[data-menuitem]").forEach(menuitem => menuitem.removeAttribute("id"));
    e.target.id = "menuitem-selected";

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
