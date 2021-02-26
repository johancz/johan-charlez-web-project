(function () {
  /* Here be foxes ("API stuff") */
  const getRandomFox = {
    $randomFoxImage: undefined,
    $getRandomFoxButton: undefined,

    getAndDisplayFox: function () {
      fetch("https://randomfox.ca/floof/").then(response => {
        response.json().then(data => {
          let newImage = document.createElement("img");

          // Wait for the new image to load before enabling the button again.
          newImage.onload = e => {
            this.$randomFoxImage.src = e.target.src;
            this.$getRandomFoxButton.textContent = this.$getRandomFoxButton.dataset.label;
            this.$getRandomFoxButton.disabled = false;
          };

          newImage.src = data.image;
        });
      });
    },

    handleEvent: function (e) {
      console.log(this, e.target);
      if (e.target === this.$getRandomFoxButton && e.type === "click") {
        e.target.disabled = true;
        e.target.textContent = "Loading ...";
        this.getAndDisplayFox();
      }
    },

    init: function () {
      this.$randomFoxImage = document.getElementById("random-fox");
      this.$getRandomFoxButton = document.getElementById("get-random-fox");

      // First request and display a fox picture, and then enabled the button so that the user can request a new picture.
      this.getAndDisplayFox();
      this.$getRandomFoxButton.addEventListener("click", this, false);
      // this.$getRandomFoxButton.disabled = false;
    }
  };

  // Self-invoking "main"-function.
  (function main() {
    getRandomFox.init();
  }());
}());
