(function () {
  "use strict";
  var oktaSignIn;

  // the '$'-prefix denotes an html element, or collection/array/object of such.
  const $mainMenu = document.getElementById("nav-main");
  const $pages = {
    "home": document.getElementById("page-home"),
    "about-developer": document.getElementById("page-about-developer"),
    "main-contents": document.getElementById("page-main-contents")
  };
  const $getRandomFoxButton = document.getElementById("get-random-fox");
  const $randomFoxImage = document.getElementById("random-fox");
  const $mainContainer = document.getElementsByTagName("main")[0];

  /*
  e: the Event
  */
  function handleClick_mainMenu(e) {
    console.log("clicked menu", e.target.dataset.menuitem);

    // Show the correct page and hide the rest.
    switch (e.target.dataset.menuitem) {
      case "Home":
        // $pages["about-developer"].classList.add("hidden");
        // $pages["main-contents"].classList.add("hidden");
        // $pages.home.classList.remove("hidden");
        break;
      case "AboutTheDeveloper":
        fetch("./aboutDeveloper.html").then(response => {
          console.log(response);
          response.text().then(data => {
            console.log(data);
            $mainContainer.innerHTML = data;
          });
        });
        // $pages.home.classList.add("hidden");
        // $pages["main-contents"].classList.add("hidden");
        // $pages["about-developer"].classList.remove("hidden");
        break;
      case "Login":
        // $pages.home.classList.add("hidden");
        // $pages["about-developer"].classList.add("hidden");
        // $pages["main-contents"].classList.remove("hidden");
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

  /* Api Stuff */

  // function getRandomFox() {
    // Call the API.
    // Create and send the request.
    // let request = new XMLHttpRequest();
    // request.open("GET", "https://randomfox.ca/floof/", true);
  
    // // Listen for a response to our request.
    // request.onload = function() {
    //   // Check for success.
    //   if (this.status === 200) {
    //     let data = JSON.parse(this.response);
    //     console.log(data);
    //     $randomFoxImage.src = data.image;
    //   }
    // }
    // request.send();
  
  //   fetch("https://randomfox.ca/floof/").then(response => {
  //     response.json().then(data => {
  //       console.log(data);
  //       $randomFoxImage.src = data.image;
  //     });
  //   });
  // }

  // function initContent() {
  //   getRandomFox();
  //   $getRandomFoxButton.addEventListener("click", getRandomFox, false);
  //   $getRandomFoxButton.disabled = false;
  // }

  /* Main */

  function main() {
    console.log("initiated");
    $mainMenu.addEventListener("click", handleEvent, false);
    // initContent();
  }

  main();
}());
