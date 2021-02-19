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
  const [ $mainContainer, $mainOtherPages ] = document.getElementsByTagName("main");
  const $pageScriptsContainer = document.getElementById("page-scripts");

  /* Random Fox API */

  if ($mainContainer === null || $mainOtherPages === null) {
    console.error("Missing vital markup, aborting.")
    return;
  }

  /*
  e: the Event
  */
  function handleClick_mainMenu(e) {
    e.preventDefault();
    console.log("clicked menu", e.target.dataset);

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
      case "Login":
        // Remove old page scripts:
        while ($pageScriptsContainer.firstChild !== null) {
          $pageScriptsContainer.removeChild($pageScriptsContainer.firstChild);
        }

        fetch(e.target.href).then(response => {
          response.text().then(data => {
            $mainOtherPages.innerHTML = data;

            // Once the new page has been added to the DOM, load its' scripts (if any).
            if (e.target.dataset.pageScripts) {
              for (let scriptPath of JSON.parse(e.target.dataset.pageScripts)) {
                let $script = document.createElement("script");
                $script.type = "text/javascript";
                $script.src = scriptPath;
                $pageScriptsContainer.appendChild($script);
              } 
            }
            
            $mainContainer.classList.add("hidden");
            $mainOtherPages.classList.remove("hidden");
          });
        });
        break;
      default:
        console.error(`The "${e.target.dataset.menuitem}"-menuitem was unexpected. It does not have a corresponding "page".`);
        break;
    }
  }

  /*
  e: the Event
  */
  function handleEvent(e) {
    console.log(e);
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
