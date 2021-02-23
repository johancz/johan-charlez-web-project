(function () {
  /* Here be planets */
  const solSystem = {
    $canvas: undefined,
    $ctx: undefined,

    async getData() {
      // getData: function () {
      console.log(this);

      let response = await fetch("https://api.le-systeme-solaire.net/rest/bodies?data=&filter[]=isPlanet,neq,true");
      let data = await response.json();

      console.log(data);
    },

    // handleEvent: function(e) {
    //   console.log(this, e.target);
    //   if (e.target === this.$getRandomFoxButton && e.type === "click") {
    //     e.target.disabled = true;
    //     e.target.textContent = "Loading ...";
    //     this.getAndDisplayFox();
    //   }
    // },

    async init() {
      // this.$randomFoxImage = document.getElementById("random-fox");
      // this.$getRandomFoxButton = document.getElementById("get-random-fox");

      // First request and display a fox picture, and then enabled the button so that the user can request a new picture.
      this.getData();
      // this.$getRandomFoxButton.addEventListener("click", this, false);
      // this.$getRandomFoxButton.disabled = false;
    }
  };

  // Self-invoking "main"-function.
  (function main() {
    solSystem.init();
  }());
}());
