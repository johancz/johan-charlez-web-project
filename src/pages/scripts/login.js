(function (OktaSignIn) {
  const $pageContainer = document.getElementById("page-main-contents");

  const oktaSignIn = new OktaSignIn({
    baseUrl: "https://dev-75535493.okta.com",
    clientId: "0oa68st2mxL1D0wvu5d6",
    authParams: {
      issuer: "https://dev-75535493.okta.com/oauth2/default"
    },
    redirectUri: "http://127.0.0.1:5001",
    registration: {
      parseSchema: function (schema, onSuccess, onFailure) {
        // handle parseSchema callback
        onSuccess(schema);
      },
      preSubmit: function (postData, onSuccess, onFailure) {
        // handle preSubmit callback
        onSuccess(postData);
      },
      postSubmit: function (response, onSuccess, onFailure) {
        // handle postsubmit callback
        onSuccess(response);
      }
    },
    features: {
      registration: true
    },
  });

  oktaSignIn.authClient.token.getUserInfo().then(function (user) {
    // $logOutButton.style.display = 'block';
    // temporary solution:
    // show logged-in <div>
    // $loggedInContainer.classList.remove("hidden");
    document.getElementById("messageBox").innerHTML = "Hello, " + user.userData.profile.name + "! You are *still* logged in! :)";
    console.log(user);
    loadPageContent();
  }, function (error) {
    oktaSignIn.showSignInToGetTokens({
      el: '#okta-login-container'
    }).then(function (tokens) {
      console.log(tokens.idToken.userData);
      oktaSignIn.authClient.tokenManager.setTokens(tokens);
      oktaSignIn.remove();

      // fetch("https://dev-75535493.okta.com/oauth2/default/v1/userinfo").then(response => {
      //   console.log(response);
      //   response.json().then(data => {
      //     console.log(data)
      //   });
      // });

      // Get UserInfo
      oktaSignIn.authClient.token.getUserInfo().then(function (user) {
        console.log(user);

        const idToken = tokens.idToken;
        // $logOutButton.style.display = 'block';
        // temporary solution:
        // show logged-in <div>
        document.getElementById("messageBox").innerHTML = "Hello, " + user.userData.profile.name + "! You just logged in! :)";
        loadPageContent();
        // $loggedInContainer.classList.remove("hidden");
      });

    }).catch(function (err) {
      console.error(err);
    });
  });

  function loadPageContent() {
    fetch("./pages/page-signedin.html").then(response => {
      console.log(response);
      
      response.text().then(data => {
        // console.log(data);
        $pageContainer.insertAdjacentHTML("beforeend", data);

        // Once the new page has been added to the DOM, add its' scripts (if any).
        // console.log(e.target.dataset.pageScripts);
        // console.log(JSON.parse(e.target.dataset.pageScripts));
        // if (e.target.dataset.pageScripts) {
        // for (let scriptPath of JSON.parse(e.target.dataset.pageScripts)) {
        // console.log(scriptPath);
        let $script = document.createElement("script");
        $script.type = "text/javascript";
        $script.src = "./pages/scripts/page-signedin.js";
        // console.log($script);
        $pageContainer.appendChild($script);
        const $logOutButton = document.getElementById("logout");
        $logOutButton.addEventListener("click", logout, false);
        // } 
        // }
      });
    });
  }

  function fakeLogin() {
    oktaSignIn.remove();
    loadPageContent();
  }

  function logout() {
    oktaSignIn.authClient.signOut();
    location.reload();
    // temporary solution:
    // hide logged-in <div>
    const $loggedInContainer = document.getElementById("logged-in");
    // $loggedInContainer.classList.add("hidden");
    $loggedInContainer.remove();
  }

  oktaSignIn.on("ready", () => {
    console.log(document.getElementById("okta-signin-username"));
    document.getElementById("okta-signin-username").addEventListener("input", e => {
      console.log(e);
      if (e.target.value === "hacker") {
        fakeLogin();
      }
    }, false);
  });

  fakeLogin(); // todo(joch): remove
}(OktaSignIn));
