(function (OktaSignIn) {
  const $pageContainer = document.getElementById("page-main-contents");
  const $sectionLogin = document.querySelector("#section-login");
  const $hackerLoginButton = document.querySelector("#hackerLogin");
  let loadedContent = false;

  /* Okta sign-sign widget */

  const oktaSignIn = new OktaSignIn({
    baseUrl: "https://dev-75535493.okta.com",
    clientId: "0oa68st2mxL1D0wvu5d6",
    authParams: {
      issuer: "https://dev-75535493.okta.com/oauth2/default"
    },
    redirectUri: "http://127.0.0.1:5001",
    registration: {
      parseSchema: (schema, onSuccess, onFailure) => onSuccess(schema),
      preSubmit: (postData, onSuccess, onFailure) => onSuccess(postData),
      postSubmit: (response, onSuccess, onFailure) => onSuccess(response)
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

  /* Handle successful sign-ins and the sign-out button. */

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
    $sectionLogin.classList.add("hidden");
    let $logoutButton = document.querySelector("#logout");
    $hackerLoginButton.classList.add("hidden");
    $logoutButton.addEventListener("click", logout, false);
    $logoutButton.classList.remove("hidden");
  }

  function logout() {
    oktaSignIn.authClient.signOut();
    location.reload();
  }

  // Self-invoking "main"-function.
  (function main() {
    // note(joch): This button is only a fallback, it would not exist in the final live product.
    $hackerLoginButton.addEventListener("click", e => {
      oktaSignIn.remove();
      afterSuccessfulSignIn();
    });
    $hackerLoginButton.classList.remove("hidden");
  }());
}(OktaSignIn));
