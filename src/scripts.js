(function () {
  "use strict";

  // the '$'-prefix denotes an html element, or collection/array/object of such.
  const $mainMenu = document.getElementById("nav-main");
  const $pages = {
    "home": document.getElementById("page-home"),
    "about-developer": document.getElementById("page-about-developer"),
    "main-contents": document.getElementById("page-main-contents")
  };

  /*
  e: the Event
  */
  function handleClick_mainMenu(e) {
    console.log("clicked menu", e.target.dataset.menuitem);

    // Show the correct page and hide the rest.
    switch (e.target.dataset.menuitem) {
      case "Home":
        $pages["about-developer"].classList.add("hidden");
        $pages["main-contents"].classList.add("hidden");
        $pages.home.classList.remove("hidden");
        break;
      case "AboutTheDeveloper":
        $pages.home.classList.add("hidden");
        $pages["main-contents"].classList.add("hidden");
        $pages["about-developer"].classList.remove("hidden");
        break;
      case "Login":
        $pages.home.classList.add("hidden");
        $pages["about-developer"].classList.add("hidden");
        $pages["main-contents"].classList.remove("hidden");
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


  function main() {
    console.log("initiated");
    $mainMenu.addEventListener("click", handleEvent, false);
  }

  main();
}());
