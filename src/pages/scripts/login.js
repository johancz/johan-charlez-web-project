(function (OktaSignIn) {
  const $pageContainer = document.getElementById("page-main-contents");
  let loadedContent = false;

  const oktaSignIn = new OktaSignIn({
    baseUrl: "https://dev-75535493.okta.com",
    clientId: "0oa68st2mxL1D0wvu5d6",
    authParams: {
      issuer: "https://dev-75535493.okta.com/oauth2/default"
    },
    redirectUri: "http://127.0.0.1:5001",
    registration: {
      parseSchema: (schema, onSuccess, onFailure) => {
        // handle parseSchema callback
        onSuccess(schema);
      },
      preSubmit: (postData, onSuccess, onFailure) => {
        // handle preSubmit callback
        onSuccess(postData);
      },
      postSubmit: (response, onSuccess, onFailure) => {
        // handle postsubmit callback
        onSuccess(response);
      }
    },
    features: {
      registration: true
    },
  });

  oktaSignIn.authClient.token.getUserInfo().then(user => {
    document.getElementById("user-first-name").innerHTML = "&nbsp;" + user.userData.profile.given_name;
    afterSuccessfulSignIn();
    loadPageContent();
  },
    () => { // The user is not signed in.
      oktaSignIn.showSignInToGetTokens({ // Show the sign-in form.
        // Specify the id of the container for the sign-in widget.
        el: '#okta-login-container'
      }).then(tokens => { // Sucessfully signed-in.
        oktaSignIn.authClient.tokenManager.setTokens(tokens);
        oktaSignIn.remove();
        afterSuccessfulSignIn();

        // Call getUserInfo() to get the user's first name.
        oktaSignIn.authClient.token.getUserInfo().then(user => {
          document.getElementById("user-first-name").innerHTML = "&nbsp;" + user.userData.profile.given_name;
        });

        // Don't wait for the user's first name, load the contents immediately.
        loadPageContent();

      }).catch(error => { // Something went wrong the user attempted to sign-in.
        console.error(error);
      });
    }
  );

  function loadPageContent() {
    if (loadedContent) {
      return false;
    }
    loadedContent = true;

    fetch("./pages/page-signedin.html").then(response => {
      console.log(response);

      response.text().then(data => {
        $pageContainer.insertAdjacentHTML("beforeend", data);

        // Once the new page has been added to the DOM, add its' scripts (if any).
        let $script = document.createElement("script");
        $script.type = "text/javascript";
        $script.src = "./pages/scripts/page-signedin.js";
        $pageContainer.appendChild($script);
      });
    });
  }

  function afterSuccessfulSignIn() {
    console.log("afterSuccessfulSignIn");
    loadPageContent();

    // Add event listener for the sign-out button.
    let $logoutButton = document.querySelector("#logout");
    $logoutButton.addEventListener("click", logout, false);
    $logoutButton.classList.remove("hidden");
  }

  function logout() {
    oktaSignIn.authClient.signOut();
    location.reload();
    // todo(joch): fix this temporary solution? note(joch): Is it still temporary?
    // const $loggedInContainer = document.getElementById("logged-in");
    // $loggedInContainer.remove();
  }

  // Code for bypassing the login step, mainly 
  // note(joch): This is code which allows "hacking" into the website by entering "hacker" in the username field in the sign-in widget.
  // todo(joch): Decide whether to keep this or replace with a button (e.g <button type="button">I'm a hacker, let me in!</button>), and in that case implement it.
  oktaSignIn.on("ready", () => {
    console.log(document.getElementById("okta-signin-username"));
    document.getElementById("okta-signin-username").addEventListener("input", e => {
      console.log(e);
      if (e.target.value === "hacker") {
        afterSuccessfulSignIn();
      }
    }, false);
  });

  // note(joch): Code for bypassing the login step, for debugging and developerment. 
  // afterSuccessfulSignIn(); // todo(joch): remove
}(OktaSignIn));
