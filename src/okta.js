(function (OktaSignIn) {
  const $loggedInContainer = document.getElementById("logged-in");
  const $logOutButton = document.getElementById("logout");

  const oktaSignIn = new OktaSignIn({
    baseUrl: "https://dev-75535493.okta.com",
    clientId: "0oa68st2mxL1D0wvu5d6",
    authParams: {
      issuer: "https://dev-75535493.okta.com/oauth2/default"
    },
    redirectUri: "http://localhost:8080",
    registration: {
      parseSchema: function(schema, onSuccess, onFailure) {
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
      registration:true
    },
  });

  oktaSignIn.authClient.token.getUserInfo().then(function (user) {
    $logOutButton.style.display = 'block';
    // temporary solution:
    // show logged-in <div>
    $loggedInContainer.classList.remove("hidden");
    document.getElementById("messageBox").innerHTML = "Hello, " + user.email + "! You are *still* logged in! :)";
  }, function (error) {
    oktaSignIn.showSignInToGetTokens({
      el: '#okta-login-container'
    }).then(function (tokens) {
      oktaSignIn.authClient.tokenManager.setTokens(tokens);
      oktaSignIn.remove();

      const idToken = tokens.idToken;
      $logOutButton.style.display = 'block';
      // temporary solution:
      // show logged-in <div>
      document.getElementById("messageBox").innerHTML = "Hello, " + idToken.claims.email + "! You just logged in! :)";
      $loggedInContainer.classList.remove("hidden");

    }).catch(function (err) {
      console.error(err);
    });
  });

  function logout() {
    oktaSignIn.authClient.signOut();
    location.reload();
    // temporary solution:
    // hide logged-in <div>
    $loggedInContainer.classList.add("hidden");
  }

  $logOutButton.addEventListener("click", logout, false);
}(OktaSignIn));
