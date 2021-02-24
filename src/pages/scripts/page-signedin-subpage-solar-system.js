(function () {
  /* Here be planets */
  const solSystem = {
    $canvas: undefined,
    $ctx: undefined,

    async getData() {
      console.log(this);

      let response = await fetch("https://api.le-systeme-solaire.net/rest/bodies?data=&filter[]=isPlanet,neq,true");
      let data = await response.json();

      console.log(data);
    },

    init() {
      this.getData();
    }
  };

  // Self-invoking "main"-function.
  (function main() {
    solSystem.init();
  }());
}());
