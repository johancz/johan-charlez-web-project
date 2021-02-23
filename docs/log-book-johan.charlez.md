# Log Book - johan.charlez
## 2021-02-22 kl.23:49
  - Converted the website from a "faux" SPA to something closer to a real SPA.
  - I decided to research APIs today (and implement at least one partiallly), and I found a couple of interesting candidates.
    - The first one is an API for the Sol System, which returns some data on the planets and other bodies in our solar system.
      - todo: I want to draw the planets in some way on a Canvas, and present the data for each planet and our sun when the user clicks a planet.
    - The second API is one of Västtrafik's called "livemap", which returns the current possition of "all vehicles" a user-provded bounding-box. The idea is to draw a representation for each vehice (for now a circle) on a static map image, and update their positions on the map as frequently as possible.
      - As of 2021-02-22 23:49 I have completed most of this. What remains is to implement the code which fetches the authentication token.
  - I converted some of the "Fetches" from the `.then` to `await` and `sync`.
## 2021-02-19 kl.22:48
  - Complete most the convertion from "faux" SPA to something closer to a real SPA. Can you make a real single-page application without a backend component?
    - There are things left to do, such as:
      - I need to clean up the code.
      - The login markup and logic should probaby be moved to "./src/index.html" and "./src/script.js" respectively. And present the sign-in and sign-up forms in a modal window/popup.
  - Found some API candidates and a guide to get Github Pages up an running.
## 2021-02-18 kl.22:56
  - New information from Adam Brodin that self registration in the Okta widget is infact possible, contrary to what the documentation tells you. This got me started on a side-track as I decided to implement this feature. It wasn't difficult, essentially only requiring two buttons clicks in Okta's admin-interface, and the addition of a few lines of configuration in "src/okta.js".
  - I played with the Fetch API briefly, by changing the random-fox implementation to use Fetch instead of XMLHttpRequest.
  - I wanted to make the website closer to a real SPA (Single-page application):
    - Before this task was completed, the website was "faux SPA" in that it didn't fetch anything from the server when the links in the main navigation were clicked. Rather, all content was already included in "index.html" in the initial page load. The pages were "organized" into `<section>`s but hidden by default. The navigation links then controlled which `<section>` should be visible.
    - [x] I put together enough code to successfully load a separate ".html"-file" with the Fetch API and replace the startpage's content with it. However the rest of the website is broken since I did not have time to complete the convertion. The working-in-progress changes were commited to a separate branch so as to not break the main branch.
## 2021-02-17 kl.20:55
  - I started by updating the styling of the header a little.
  - I got sidetracked early on with trying to figure out how to get Okta up and running. Quite a few of my peers were trying to figure out how to implement Okta on Discord, so I decided to join in on this group effort.
    - Svetlana in my class managed to get it working early on using a [guide](https://developer.okta.com/blog/2018/06/08/add-authentication-to-any-web-page-in-10-minutes) and she helped others (including me) by answering questions and posting screenshots of her configuration.
    Alas I could not reproduce her success.
    - In the end I managed to get some code to work "on localhost" by following a different [guide](https://developer.okta.com/code/javascript/okta_sign-in_widget/).
      - The two guides were either incomplete or out of date, but by using both I managed to figure something out in the end.
      - I posted a small guide of sorts on discord with the steps I took to solve it.
  - I spoke briefly to a couple of peers about Okta, CSS and APIs, discussing our progress and some problems that got in our way.
  - And finally I managed to implement a small API (which serves a random picture of a fox) using AJAX.
## 2021-02-17 kl.09:06
- Yesterday I managed to complete the tasks I set for myself in this log-book, including the extra goals.
- The plan for today is to experiment with APIs, and iterate upon the existing (faux SPA) markup and styles, and maybe look at Okta briefly.
## 2021-02-16 kl.10.28
- [x] Create an initial project plan.
  - [x] Create project-cards and issues on Github.
    - For example, should the website be a single-page or a multi-page application? (this can be decided upon at a later date)
- [x] Create simple mockups (with HTML, CSS and JavaScript) which can serve as the base for further development.
  - [x] Mockup the landing-page.
  - [x] Mockup the "about the developer"-page.
  - [x] If time permits, mockup the page users gain access to after signing in.
## 2021-02-13 kl.16.01
- [x] Read the project specification.
## 2021-02-11
- [x] Create repository.
- [x] Create file structure and add boilerplate html, css, js files.
