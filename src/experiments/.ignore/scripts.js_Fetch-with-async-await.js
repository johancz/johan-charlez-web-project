
  async function handleClick_mainMenu(e) {

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
      }
      