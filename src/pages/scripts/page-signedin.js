(function () {
  /* Here be foxes ("API stuff") */
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

  const vasttrafikBuses = {
    $canvas: undefined,
    $ctx: undefined,
    currentData: undefined,
    temp_data: {
      "livemap": {
        "vehicles": [
          {
            "x": "12033617",
            "y": "57625556",
            "name": "Bus 760",
            "gid": "9015014576000069",
            "lcolor": "#FFFF50",
            "bcolor": "#0061EB",
            "direction": "26",
            "prodclass": "BUS",
            "delay": "0"
          },
          {
            "x": "12020079",
            "y": "57657234",
            "name": "Bus 761",
            "gid": "9015014576000068",
            "lcolor": "#FFFF50",
            "bcolor": "#0061EB",
            "direction": "25",
            "prodclass": "BUS",
            "delay": "0"
          },
          {
            "x": "11767563",
            "y": "57722451",
            "name": "Svart express",
            "gid": "9015014521100190",
            "lcolor": "#000000",
            "bcolor": "#FFFFFF",
            "direction": "27",
            "prodclass": "BUS",
            "delay": "3"
          },
          {
            "x": "11905835",
            "y": "57710226",
            "name": "Bus 32",
            "gid": "9015014503200064",
            "lcolor": "#006C93",
            "bcolor": "#FFFFFF",
            "direction": "22",
            "prodclass": "BUS",
            "delay": "1"
          },
          {
            "x": "11811026",
            "y": "57697686",
            "name": "Bus 32",
            "gid": "9015014503200061",
            "lcolor": "#006C93",
            "bcolor": "#FFFFFF",
            "direction": "28",
            "prodclass": "BUS",
            "delay": "2"
          },
          {
            "x": "11558600",
            "y": "57996442",
            "name": "Tjörn express",
            "gid": "9015014620800053",
            "lcolor": "#006C93",
            "bcolor": "#FFFFFF",
            "direction": "0",
            "prodclass": "BUS",
            "delay": "3"
          },
          {
            "x": "11828132",
            "y": "57656542",
            "name": "Fär 281",
            "gid": "9015014528100052",
            "lcolor": "#006C93",
            "bcolor": "#FFFFFF",
            "direction": "2",
            "prodclass": "BOAT",
            "delay": "0"
          },
          {
            "x": "11912469",
            "y": "57735297",
            "name": "Bus 22",
            "gid": "9015014502200060",
            "lcolor": "#006C93",
            "bcolor": "#FFFFFF",
            "direction": "12",
            "prodclass": "BUS",
            "delay": "0"
          },
          {
            "x": "12037851",
            "y": "57784252",
            "name": "Bus 71",
            "gid": "9015014507100091",
            "lcolor": "#006C93",
            "bcolor": "#FFFFFF",
            "direction": "6",
            "prodclass": "BUS",
            "delay": "2"
          },
          {
            "x": "12035073",
            "y": "57772413",
            "name": "Bus 71",
            "gid": "9015014507100092",
            "lcolor": "#006C93",
            "bcolor": "#FFFFFF",
            "direction": "0",
            "prodclass": "BUS",
            "delay": "2"
          },
          {
            "x": "11985758",
            "y": "57711565",
            "name": "Västtågen",
            "gid": "9015014131103581",
            "lcolor": "#006C93",
            "bcolor": "#FFFFFF",
            "direction": "18",
            "prodclass": "VAS",
            "delay": "0"
          },
          {
            "x": "12003485",
            "y": "57724860",
            "name": "Västtågen",
            "gid": "9015014172117384",
            "lcolor": "#006C93",
            "bcolor": "#FFFFFF",
            "direction": "4",
            "prodclass": "VAS",
            "delay": "0"
          },
          {
            "x": "11589235",
            "y": "57924430",
            "name": "Fär 361",
            "gid": "9015014636100039",
            "lcolor": "#006C93",
            "bcolor": "#FFFFFF",
            "direction": "3",
            "prodclass": "BOAT",
            "delay": "0"
          },
          {
            "x": "11976203",
            "y": "57703430",
            "name": "Grön express",
            "gid": "9015014620500302",
            "lcolor": "#027446",
            "bcolor": "#FFFFFF",
            "direction": "6",
            "prodclass": "BUS",
            "delay": "6"
          },
          {
            "x": "12004438",
            "y": "57820811",
            "name": "Grön express",
            "gid": "9015014620500300",
            "lcolor": "#027446",
            "bcolor": "#FFFFFF",
            "direction": "7",
            "prodclass": "BUS",
            "delay": "-1"
          },
          {
            "x": "12028493",
            "y": "57663868",
            "name": "Bus 753",
            "gid": "9015014575300069",
            "lcolor": "#FFFF50",
            "bcolor": "#0061EB",
            "direction": "18",
            "prodclass": "BUS",
            "delay": "1"
          },
          {
            "x": "11963645",
            "y": "57684346",
            "name": "Bus 753",
            "gid": "9015014575300067",
            "lcolor": "#FFFF50",
            "bcolor": "#0061EB",
            "direction": "8",
            "prodclass": "BUS",
            "delay": "0"
          },
          {
            "x": "11904406",
            "y": "57816218",
            "name": "Västtågen",
            "gid": "9015014130103786",
            "lcolor": "#006C93",
            "bcolor": "#FFFFFF",
            "direction": "8",
            "prodclass": "VAS",
            "delay": "0"
          },
          {
            "x": "11870013",
            "y": "57930839",
            "name": "Västtågen",
            "gid": "9015014130103783",
            "lcolor": "#006C93",
            "bcolor": "#FFFFFF",
            "direction": "26",
            "prodclass": "VAS",
            "delay": "0"
          },
          {
            "x": "11997354",
            "y": "57652308",
            "name": "Bus 751",
            "gid": "9015014575100154",
            "lcolor": "#FFFF50",
            "bcolor": "#0061EB",
            "direction": "1",
            "prodclass": "BUS",
            "delay": "-1"
          },
          {
            "x": "11962197",
            "y": "57683735",
            "name": "Bus 757",
            "gid": "9015014575700067",
            "lcolor": "#FFFF50",
            "bcolor": "#0061EB",
            "direction": "28",
            "prodclass": "BUS",
            "delay": "2"
          },
          {
            "x": "11585747",
            "y": "57885938",
            "name": "Marstrandsfärjan",
            "gid": "9015032032200140",
            "lcolor": "#006C93",
            "bcolor": "#FFFFFF",
            "direction": "18",
            "prodclass": "BOAT",
            "delay": "0"
          },
          {
            "x": "11964283",
            "y": "57717219",
            "name": "Svart Express",
            "gid": "9015014721100194",
            "lcolor": "#006C93",
            "bcolor": "#FFFFFF",
            "direction": "11",
            "prodclass": "BUS",
            "delay": "0"
          },
          {
            "x": "11914932",
            "y": "57699708",
            "name": "285 Älvsnabben",
            "gid": "9015014528500070",
            "lcolor": "#006C93",
            "bcolor": "#FFFFFF",
            "direction": "22",
            "prodclass": "BOAT",
            "delay": "1"
          },
          {
            "x": "11793829",
            "y": "57650969",
            "name": "Fär 283",
            "gid": "9015014528300032",
            "lcolor": "#006C93",
            "bcolor": "#FFFFFF",
            "direction": "17",
            "prodclass": "BOAT",
            "delay": "0"
          },
          {
            "x": "11977695",
            "y": "57708014",
            "name": "Bus 101",
            "gid": "9015014210100038",
            "lcolor": "#FFFF50",
            "bcolor": "#0061EB",
            "direction": "10",
            "prodclass": "BUS",
            "delay": "-4"
          },
          {
            "x": "12028475",
            "y": "57720042",
            "name": "Spå 5",
            "gid": "9015014500506712",
            "lcolor": "#C63539",
            "bcolor": "#FFFFFF",
            "direction": "20",
            "prodclass": "TRAM",
            "delay": "-1"
          },
          {
            "x": "11980302",
            "y": "57699322",
            "name": "Spå 5",
            "gid": "9015014500506676",
            "lcolor": "#C63539",
            "bcolor": "#FFFFFF",
            "direction": "13",
            "prodclass": "TRAM",
            "delay": "0"
          },
          {
            "x": "11939464",
            "y": "57720788",
            "name": "Spå 5",
            "gid": "9015014500506644",
            "lcolor": "#C63539",
            "bcolor": "#FFFFFF",
            "direction": "15",
            "prodclass": "TRAM",
            "delay": "3"
          },
          {
            "x": "11973209",
            "y": "57707709",
            "name": "Spå 3",
            "gid": "9015014500306678",
            "lcolor": "#0071C1",
            "bcolor": "#FFFFFF",
            "direction": "17",
            "prodclass": "TRAM",
            "delay": "0"
          },
          {
            "x": "11933567",
            "y": "57698944",
            "name": "Spå 3",
            "gid": "9015014500306648",
            "lcolor": "#0071C1",
            "bcolor": "#FFFFFF",
            "direction": "18",
            "prodclass": "TRAM",
            "delay": "1"
          },
          {
            "x": "12017742",
            "y": "57659293",
            "name": "Västtågen",
            "gid": "9015014132103087",
            "lcolor": "#006C93",
            "bcolor": "#FFFFFF",
            "direction": "25",
            "prodclass": "VAS",
            "delay": "0"
          },
          {
            "x": "11950251",
            "y": "57893165",
            "name": "Bus 1",
            "gid": "9015014630100067",
            "lcolor": "#006C93",
            "bcolor": "#FFFFFF",
            "direction": "10",
            "prodclass": "BUS",
            "delay": "-1"
          },
          {
            "x": "11976364",
            "y": "57703502",
            "name": "Bus 300",
            "gid": "9015014230000068",
            "lcolor": "#FFFF50",
            "bcolor": "#0061EB",
            "direction": "10",
            "prodclass": "BUS",
            "delay": "31"
          },
          {
            "x": "11918501",
            "y": "57704410",
            "name": "Bus 58",
            "gid": "9015014505800187",
            "lcolor": "#FFFF50",
            "bcolor": "#0061EB",
            "direction": "6",
            "prodclass": "BUS",
            "delay": "1"
          },
          {
            "x": "12007036",
            "y": "57722766",
            "name": "Bus 58",
            "gid": "9015014505800185",
            "lcolor": "#FFFF50",
            "bcolor": "#0061EB",
            "direction": "5",
            "prodclass": "BUS",
            "delay": "-1"
          },
          {
            "x": "12008069",
            "y": "57725561",
            "name": "Bus 510",
            "gid": "9015014551000104",
            "lcolor": "#FFFF50",
            "bcolor": "#0061EB",
            "direction": "5",
            "prodclass": "BUS",
            "delay": "0"
          },
          {
            "x": "12030093",
            "y": "57724923",
            "name": "Bus 515",
            "gid": "9015014551500096",
            "lcolor": "#FFFF50",
            "bcolor": "#0061EB",
            "direction": "31",
            "prodclass": "BUS",
            "delay": "1"
          },
          {
            "x": "11973847",
            "y": "57702486",
            "name": "Bus 513",
            "gid": "9015014551300105",
            "lcolor": "#FFFF50",
            "bcolor": "#0061EB",
            "direction": "22",
            "prodclass": "BUS",
            "delay": "-2"
          },
          {
            "x": "11935077",
            "y": "57665963",
            "name": "Bus 84",
            "gid": "9015014508400080",
            "lcolor": "#FFFF50",
            "bcolor": "#0061EB",
            "direction": "7",
            "prodclass": "BUS",
            "delay": "2"
          },
          {
            "x": "11619843",
            "y": "57758758",
            "name": "Nordöfärjan",
            "gid": "9015091029900141",
            "lcolor": "#006C93",
            "bcolor": "#FFFFFF",
            "direction": "7",
            "prodclass": "BOAT",
            "delay": "0"
          },
          {
            "x": "11915651",
            "y": "57649315",
            "name": "Bus 751",
            "gid": "9015014575100149",
            "lcolor": "#FFFF50",
            "bcolor": "#0061EB",
            "direction": "13",
            "prodclass": "BUS",
            "delay": "2"
          },
          {
            "x": "11902203",
            "y": "57739513",
            "name": "Bus 25",
            "gid": "9015014502500280",
            "lcolor": "#006C93",
            "bcolor": "#D8E8B0",
            "direction": "3",
            "prodclass": "BUS",
            "delay": "0"
          },
          {
            "x": "11962332",
            "y": "57719637",
            "name": "Bus 25",
            "gid": "9015014502500278",
            "lcolor": "#006C93",
            "bcolor": "#D8E8B0",
            "direction": "26",
            "prodclass": "BUS",
            "delay": "0"
          },
          {
            "x": "12017868",
            "y": "57654861",
            "name": "Bus 25",
            "gid": "9015014502500235",
            "lcolor": "#006C93",
            "bcolor": "#D8E8B0",
            "direction": "8",
            "prodclass": "BUS",
            "delay": "0"
          },
          {
            "x": "11956795",
            "y": "57684202",
            "name": "Bus 25",
            "gid": "9015014502500233",
            "lcolor": "#006C93",
            "bcolor": "#D8E8B0",
            "direction": "13",
            "prodclass": "BUS",
            "delay": "1"
          },
          {
            "x": "11952201",
            "y": "57686791",
            "name": "Bus 25",
            "gid": "9015014502500276",
            "lcolor": "#006C93",
            "bcolor": "#D8E8B0",
            "direction": "25",
            "prodclass": "BUS",
            "delay": "0"
          },
          {
            "x": "12016852",
            "y": "57656866",
            "name": "Bus 25",
            "gid": "9015014502500274",
            "lcolor": "#006C93",
            "bcolor": "#D8E8B0",
            "direction": "0",
            "prodclass": "BUS",
            "delay": "0"
          },
          {
            "x": "11968885",
            "y": "57710549",
            "name": "Bus 25",
            "gid": "9015014502500231",
            "lcolor": "#006C93",
            "bcolor": "#D8E8B0",
            "direction": "10",
            "prodclass": "BUS",
            "delay": "0"
          },
          {
            "x": "11907013",
            "y": "57738389",
            "name": "Bus 25",
            "gid": "9015014502500229",
            "lcolor": "#006C93",
            "bcolor": "#D8E8B0",
            "direction": "12",
            "prodclass": "BUS",
            "delay": "0"
          },
          {
            "x": "11949379",
            "y": "57591685",
            "name": "Bus X2",
            "gid": "9015014521300260",
            "lcolor": "#FFFF50",
            "bcolor": "#D400A2",
            "direction": "7",
            "prodclass": "BUS",
            "delay": "0"
          },
          {
            "x": "11932137",
            "y": "57645090",
            "name": "Bus X2",
            "gid": "9015014521300258",
            "lcolor": "#FFFF50",
            "bcolor": "#D400A2",
            "direction": "7",
            "prodclass": "BUS",
            "delay": "4"
          },
          {
            "x": "11962431",
            "y": "57709758",
            "name": "Bus X2",
            "gid": "9015014521300256",
            "lcolor": "#FFFF50",
            "bcolor": "#D400A2",
            "direction": "4",
            "prodclass": "BUS",
            "delay": "1"
          },
          {
            "x": "11952031",
            "y": "57699744",
            "name": "Bus X2",
            "gid": "9015014521300255",
            "lcolor": "#FFFF50",
            "bcolor": "#D400A2",
            "direction": "24",
            "prodclass": "BUS",
            "delay": "0"
          },
          {
            "x": "11933315",
            "y": "57648497",
            "name": "Bus X2",
            "gid": "9015014521300253",
            "lcolor": "#FFFF50",
            "bcolor": "#D400A2",
            "direction": "23",
            "prodclass": "BUS",
            "delay": "1"
          },
          {
            "x": "11948947",
            "y": "57590040",
            "name": "Bus X2",
            "gid": "9015014521300251",
            "lcolor": "#FFFF50",
            "bcolor": "#D400A2",
            "direction": "17",
            "prodclass": "BUS",
            "delay": "2"
          },
          {
            "x": "11991188",
            "y": "57790517",
            "name": "Bus X2",
            "gid": "9015014521300254",
            "lcolor": "#FFFF50",
            "bcolor": "#D400A2",
            "direction": "7",
            "prodclass": "BUS",
            "delay": "-2"
          },
          {
            "x": "11941882",
            "y": "57613025",
            "name": "Bus X3",
            "gid": "9015014520300167",
            "lcolor": "#FFFF50",
            "bcolor": "#D400A2",
            "direction": "24",
            "prodclass": "BUS",
            "delay": "2"
          },
          {
            "x": "11991529",
            "y": "57757024",
            "name": "Bus X2",
            "gid": "9015014521300257",
            "lcolor": "#FFFF50",
            "bcolor": "#D400A2",
            "direction": "22",
            "prodclass": "BUS",
            "delay": "-1"
          },
          {
            "x": "11992976",
            "y": "57719628",
            "name": "Bus X3",
            "gid": "9015014520300169",
            "lcolor": "#FFFF50",
            "bcolor": "#D400A2",
            "direction": "22",
            "prodclass": "BUS",
            "delay": "-2"
          },
          {
            "x": "11657490",
            "y": "58024704",
            "name": "Tjörn express",
            "gid": "9015014620800050",
            "lcolor": "#006C93",
            "bcolor": "#FFFFFF",
            "direction": "16",
            "prodclass": "BUS",
            "delay": "0"
          },
          {
            "x": "11677194",
            "y": "57701938",
            "name": "Hönöfärjan",
            "gid": "9015091029700157",
            "lcolor": "#006C93",
            "bcolor": "#FFFFFF",
            "direction": "2",
            "prodclass": "BOAT",
            "delay": "0"
          },
          {
            "x": "11991880",
            "y": "57656272",
            "name": "Bus 753",
            "gid": "9015014575300070",
            "lcolor": "#FFFF50",
            "bcolor": "#0061EB",
            "direction": "22",
            "prodclass": "BUS",
            "delay": "8"
          },
          {
            "x": "11992122",
            "y": "57705785",
            "name": "Bus 753",
            "gid": "9015014575300068",
            "lcolor": "#FFFF50",
            "bcolor": "#0061EB",
            "direction": "16",
            "prodclass": "BUS",
            "delay": "-2"
          },
          {
            "x": "12028834",
            "y": "57733697",
            "name": "Bus 58",
            "gid": "9015014505800184",
            "lcolor": "#FFFF50",
            "bcolor": "#0061EB",
            "direction": "18",
            "prodclass": "BUS",
            "delay": "1"
          },
          {
            "x": "11939805",
            "y": "57709111",
            "name": "Bus 58",
            "gid": "9015014505800182",
            "lcolor": "#FFFF50",
            "bcolor": "#0061EB",
            "direction": "20",
            "prodclass": "BUS",
            "delay": "0"
          },
          {
            "x": "11980958",
            "y": "57870297",
            "name": "Grön express",
            "gid": "9015014620500307",
            "lcolor": "#027446",
            "bcolor": "#FFFFFF",
            "direction": "26",
            "prodclass": "BUS",
            "delay": "1"
          },
          {
            "x": "11988590",
            "y": "57743423",
            "name": "Grön express",
            "gid": "9015014620500305",
            "lcolor": "#027446",
            "bcolor": "#FFFFFF",
            "direction": "20",
            "prodclass": "BUS",
            "delay": "-1"
          },
          {
            "x": "11976364",
            "y": "57701281",
            "name": "Grön express",
            "gid": "9015014620500303",
            "lcolor": "#027446",
            "bcolor": "#FFFFFF",
            "direction": "28",
            "prodclass": "BUS",
            "delay": "0"
          },
          {
            "x": "11950664",
            "y": "57747783",
            "name": "Bus 52",
            "gid": "9015014505200207",
            "lcolor": "#006C93",
            "bcolor": "#D8E8B0",
            "direction": "25",
            "prodclass": "BUS",
            "delay": "3"
          },
          {
            "x": "11968301",
            "y": "57706244",
            "name": "Bus 52",
            "gid": "9015014505200205",
            "lcolor": "#006C93",
            "bcolor": "#D8E8B0",
            "direction": "25",
            "prodclass": "BUS",
            "delay": "3"
          },
          {
            "x": "11979834",
            "y": "57680193",
            "name": "Bus 52",
            "gid": "9015014505200203",
            "lcolor": "#006C93",
            "bcolor": "#D8E8B0",
            "direction": "12",
            "prodclass": "BUS",
            "delay": "0"
          },
          {
            "x": "11987385",
            "y": "57688490",
            "name": "Bus 52",
            "gid": "9015014505200200",
            "lcolor": "#006C93",
            "bcolor": "#D8E8B0",
            "direction": "6",
            "prodclass": "BUS",
            "delay": "1"
          },
          {
            "x": "11968391",
            "y": "57713651",
            "name": "Bus 52",
            "gid": "9015014505200198",
            "lcolor": "#006C93",
            "bcolor": "#D8E8B0",
            "direction": "10",
            "prodclass": "BUS",
            "delay": "0"
          },
          {
            "x": "11947509",
            "y": "57756664",
            "name": "Bus 52",
            "gid": "9015014505200196",
            "lcolor": "#006C93",
            "bcolor": "#D8E8B0",
            "direction": "7",
            "prodclass": "BUS",
            "delay": "0"
          },
          {
            "x": "11968445",
            "y": "57705974",
            "name": "Bus 18",
            "gid": "9015014501800198",
            "lcolor": "#006C93",
            "bcolor": "#D8E8B0",
            "direction": "9",
            "prodclass": "BUS",
            "delay": "-2"
          },
          {
            "x": "11980949",
            "y": "57753976",
            "name": "Bus 18",
            "gid": "9015014501800196",
            "lcolor": "#006C93",
            "bcolor": "#D8E8B0",
            "direction": "4",
            "prodclass": "BUS",
            "delay": "1"
          },
          {
            "x": "11962072",
            "y": "57724698",
            "name": "Bus 18",
            "gid": "9015014501800201",
            "lcolor": "#006C93",
            "bcolor": "#D8E8B0",
            "direction": "19",
            "prodclass": "BUS",
            "delay": "2"
          },
          {
            "x": "12003997",
            "y": "57678871",
            "name": "Bus 758",
            "gid": "9015014575800072",
            "lcolor": "#FFFF50",
            "bcolor": "#0061EB",
            "direction": "10",
            "prodclass": "BUS"
          },
          {
            "x": "11936497",
            "y": "57542954",
            "name": "Bus X3",
            "gid": "9015014520300174",
            "lcolor": "#FFFF50",
            "bcolor": "#D400A2",
            "direction": "30",
            "prodclass": "BUS",
            "delay": "3"
          },
          {
            "x": "11947482",
            "y": "57681739",
            "name": "Bus X3",
            "gid": "9015014520300172",
            "lcolor": "#FFFF50",
            "bcolor": "#D400A2",
            "direction": "5",
            "prodclass": "BUS",
            "delay": "8"
          },
          {
            "x": "11917143",
            "y": "57675635",
            "name": "Bus 16",
            "gid": "9015014501600258",
            "lcolor": "#007C4F",
            "bcolor": "#FFFF50",
            "direction": "31",
            "prodclass": "BUS",
            "delay": "-1"
          },
          {
            "x": "11971555",
            "y": "57708275",
            "name": "Bus 16",
            "gid": "9015014501600256",
            "lcolor": "#007C4F",
            "bcolor": "#FFFF50",
            "direction": "10",
            "prodclass": "BUS",
            "delay": "0"
          },
          {
            "x": "11916074",
            "y": "57702037",
            "name": "Bus 16",
            "gid": "9015014501600254",
            "lcolor": "#007C4F",
            "bcolor": "#FFFF50",
            "direction": "16",
            "prodclass": "BUS",
            "delay": "-2"
          },
          {
            "x": "11940614",
            "y": "57641854",
            "name": "Bus 83",
            "gid": "9015014508300079",
            "lcolor": "#FFFF50",
            "bcolor": "#0061EB",
            "direction": "27",
            "prodclass": "BUS",
            "delay": "1"
          },
          {
            "x": "11980940",
            "y": "57870989",
            "name": "Bus 401",
            "gid": "9015014640100068",
            "lcolor": "#006C93",
            "bcolor": "#FFFFFF",
            "direction": "10",
            "prodclass": "BUS",
            "delay": "0"
          },
          {
            "x": "12015333",
            "y": "57854053",
            "name": "Bus 401",
            "gid": "9015014640100069",
            "lcolor": "#006C93",
            "bcolor": "#FFFFFF",
            "direction": "28",
            "prodclass": "BUS",
            "delay": "0"
          },
          {
            "x": "11796068",
            "y": "57615974",
            "name": "Fär 281",
            "gid": "9015014528100054",
            "lcolor": "#006C93",
            "bcolor": "#FFFFFF",
            "direction": "20",
            "prodclass": "BOAT",
            "delay": "0"
          },
          {
            "x": "11816653",
            "y": "58062073",
            "name": "Stenungsund express",
            "gid": "9015014621400126",
            "lcolor": "#006C93",
            "bcolor": "#FFFFFF",
            "direction": "9",
            "prodclass": "BUS",
            "delay": "0"
          },
          {
            "x": "12023791",
            "y": "57799264",
            "name": "Bus 73A",
            "gid": "9015014507300317",
            "lcolor": "#006C93",
            "bcolor": "#FFFFFF",
            "direction": "13",
            "prodclass": "BUS",
            "delay": "0"
          },
          {
            "x": "11864979",
            "y": "57751549",
            "name": "Svart express",
            "gid": "9015014521100192",
            "lcolor": "#000000",
            "bcolor": "#FFFFFF",
            "direction": "13",
            "prodclass": "BUS",
            "delay": "2"
          },
          {
            "x": "11981120",
            "y": "57750614",
            "name": "Bus 19",
            "gid": "9015014501900203",
            "lcolor": "#006C93",
            "bcolor": "#D8E8B0",
            "direction": "24",
            "prodclass": "BUS",
            "delay": "1"
          },
          {
            "x": "11963150",
            "y": "57705246",
            "name": "Bus 19",
            "gid": "9015014501900201",
            "lcolor": "#006C93",
            "bcolor": "#D8E8B0",
            "direction": "21",
            "prodclass": "BUS",
            "delay": "3"
          },
          {
            "x": "11988050",
            "y": "57680822",
            "name": "Bus 19",
            "gid": "9015014501900198",
            "lcolor": "#006C93",
            "bcolor": "#D8E8B0",
            "direction": "10",
            "prodclass": "BUS",
            "delay": "3"
          },
          {
            "x": "11958835",
            "y": "57720527",
            "name": "Bus 19",
            "gid": "9015014501900196",
            "lcolor": "#006C93",
            "bcolor": "#D8E8B0",
            "direction": "10",
            "prodclass": "BUS",
            "delay": "3"
          },
          {
            "x": "11996482",
            "y": "57768008",
            "name": "Bus 40",
            "gid": "9015014504000096",
            "lcolor": "#006C93",
            "bcolor": "#FFFFFF",
            "direction": "6",
            "prodclass": "BUS",
            "delay": "1"
          },
          {
            "x": "11918402",
            "y": "57708428",
            "name": "Bus 31",
            "gid": "9015014503100128",
            "lcolor": "#006C93",
            "bcolor": "#FFFFFF",
            "direction": "11",
            "prodclass": "BUS",
            "delay": "8"
          },
          {
            "x": "11960435",
            "y": "57726568",
            "name": "Bus 40",
            "gid": "9015014504000093",
            "lcolor": "#006C93",
            "bcolor": "#FFFFFF",
            "direction": "21",
            "prodclass": "BUS",
            "delay": "0"
          },
          {
            "x": "11912370",
            "y": "57731989",
            "name": "Bus 31",
            "gid": "9015014503100127",
            "lcolor": "#006C93",
            "bcolor": "#FFFFFF",
            "direction": "6",
            "prodclass": "BUS",
            "delay": "3"
          },
          {
            "x": "11885106",
            "y": "57818132",
            "name": "Bus 37",
            "gid": "9015014503700044",
            "lcolor": "#006C93",
            "bcolor": "#FFFFFF",
            "direction": "16",
            "prodclass": "BUS",
            "delay": "0"
          },
          {
            "x": "11901107",
            "y": "57677901",
            "name": "Bus 30",
            "gid": "9015014503000067",
            "lcolor": "#006C93",
            "bcolor": "#FFFFFF",
            "direction": "5",
            "prodclass": "BUS",
            "delay": "1"
          },
          {
            "x": "11896297",
            "y": "57698153",
            "name": "Bus 30",
            "gid": "9015014503000068",
            "lcolor": "#006C93",
            "bcolor": "#FFFFFF",
            "direction": "28",
            "prodclass": "BUS",
            "delay": "2"
          },
          {
            "x": "11964283",
            "y": "57717219",
            "name": "Svart express",
            "gid": "9015014521100194",
            "lcolor": "#000000",
            "bcolor": "#FFFFFF",
            "direction": "11",
            "prodclass": "BUS",
            "delay": "0"
          },
          {
            "x": "11987385",
            "y": "57886675",
            "name": "Bus 422",
            "gid": "9015014442200057",
            "lcolor": "#006C93",
            "bcolor": "#FFFFFF",
            "direction": "20",
            "prodclass": "BUS",
            "delay": "2"
          },
          {
            "x": "11304358",
            "y": "58390646",
            "name": "Bus 860",
            "gid": "9015014486000068",
            "lcolor": "#006C93",
            "bcolor": "#FFFFFF",
            "direction": "18",
            "prodclass": "BUS",
            "delay": "7"
          },
          {
            "x": "11816204",
            "y": "58353719",
            "name": "Bus 860",
            "gid": "9015014486000070",
            "lcolor": "#006C93",
            "bcolor": "#FFFFFF",
            "direction": "11",
            "prodclass": "BUS",
            "delay": "0"
          },
          {
            "x": "11687343",
            "y": "57695070",
            "name": "Fär 296",
            "gid": "9015014629600031",
            "lcolor": "#006C93",
            "bcolor": "#FFFFFF",
            "direction": "24",
            "prodclass": "BOAT",
            "delay": "16"
          },
          {
            "x": "11851468",
            "y": "58104142",
            "name": "Bus 4",
            "gid": "9015014634400083",
            "lcolor": "#FFE852",
            "bcolor": "#00ADEE",
            "direction": "23",
            "prodclass": "BUS",
            "delay": "1"
          },
          {
            "x": "12012285",
            "y": "57717129",
            "name": "Bus 17",
            "gid": "9015014501700230",
            "lcolor": "#006C93",
            "bcolor": "#D8E8B0",
            "direction": "17",
            "prodclass": "BUS",
            "delay": "0"
          },
          {
            "x": "11953388",
            "y": "57720761",
            "name": "Bus 17",
            "gid": "9015014501700228",
            "lcolor": "#006C93",
            "bcolor": "#D8E8B0",
            "direction": "15",
            "prodclass": "BUS",
            "delay": "0"
          },
          {
            "x": "11919804",
            "y": "57756161",
            "name": "Bus 17",
            "gid": "9015014501700226",
            "lcolor": "#006C93",
            "bcolor": "#D8E8B0",
            "direction": "22",
            "prodclass": "BUS",
            "delay": "0"
          },
          {
            "x": "11684377",
            "y": "57711718",
            "name": "Fär 296",
            "gid": "9015014629600032",
            "lcolor": "#006C93",
            "bcolor": "#FFFFFF",
            "direction": "21",
            "prodclass": "BOAT",
            "delay": "0"
          },
          {
            "x": "12019567",
            "y": "57862719",
            "name": "Bus 402",
            "gid": "9015014640200099",
            "lcolor": "#006C93",
            "bcolor": "#FFFFFF",
            "direction": "6",
            "prodclass": "BUS",
            "delay": "2"
          },
          {
            "x": "11936722",
            "y": "58347111",
            "name": "Bus 12",
            "gid": "9015014481200025",
            "lcolor": "#006C93",
            "bcolor": "#FFFFFF",
            "direction": "16",
            "prodclass": "BUS",
            "delay": "2"
          },
          {
            "x": "11909521",
            "y": "58231106",
            "name": "Bus 822",
            "gid": "9015014482200037",
            "lcolor": "#006C93",
            "bcolor": "#FFFFFF",
            "direction": "19",
            "prodclass": "BUS",
            "delay": "0"
          },
          {
            "x": "11910222",
            "y": "58339201",
            "name": "Bus 821",
            "gid": "9015014482100038",
            "lcolor": "#006C93",
            "bcolor": "#FFFFFF",
            "direction": "23",
            "prodclass": "BUS",
            "delay": "2"
          },
          {
            "x": "12004689",
            "y": "57738020",
            "name": "Spå 8",
            "gid": "9015014500806696",
            "lcolor": "#A5449A",
            "bcolor": "#FFFFFF",
            "direction": "22",
            "prodclass": "TRAM",
            "delay": "-1"
          },
          {
            "x": "11976131",
            "y": "57690476",
            "name": "Spå 8",
            "gid": "9015014500806650",
            "lcolor": "#A5449A",
            "bcolor": "#FFFFFF",
            "direction": "19",
            "prodclass": "TRAM",
            "delay": "1"
          },
          {
            "x": "11958593",
            "y": "57693299",
            "name": "Spå 2",
            "gid": "9015014500206685",
            "lcolor": "#FFE852",
            "bcolor": "#00ADEE",
            "direction": "4",
            "prodclass": "TRAM",
            "delay": "0"
          },
          {
            "x": "12001804",
            "y": "57714882",
            "name": "Spå 6",
            "gid": "9015014500606682",
            "lcolor": "#F89828",
            "bcolor": "#00435C",
            "direction": "18",
            "prodclass": "TRAM",
            "delay": "0"
          },
          {
            "x": "11952588",
            "y": "57692445",
            "name": "Spå 6",
            "gid": "9015014500606640",
            "lcolor": "#F89828",
            "bcolor": "#00435C",
            "direction": "8",
            "prodclass": "TRAM",
            "delay": "0"
          },
          {
            "x": "11962674",
            "y": "57719637",
            "name": "Spå 6",
            "gid": "9015014500606612",
            "lcolor": "#F89828",
            "bcolor": "#00435C",
            "direction": "9",
            "prodclass": "TRAM",
            "delay": "1"
          },
          {
            "x": "11893106",
            "y": "57725337",
            "name": "Spå 6",
            "gid": "9015014500606582",
            "lcolor": "#F89828",
            "bcolor": "#00435C",
            "direction": "7",
            "prodclass": "TRAM",
            "delay": "2"
          },
          {
            "x": "11953379",
            "y": "57686431",
            "name": "Spå 6",
            "gid": "9015014500606607",
            "lcolor": "#F89828",
            "bcolor": "#00435C",
            "direction": "27",
            "prodclass": "TRAM",
            "delay": "-1"
          },
          {
            "x": "12029769",
            "y": "57778544",
            "name": "Spå 4",
            "gid": "9015014500406710",
            "lcolor": "#027446",
            "bcolor": "#FFFFFF",
            "direction": "21",
            "prodclass": "TRAM",
            "delay": "-2"
          },
          {
            "x": "11970944",
            "y": "57706927",
            "name": "Spå 4",
            "gid": "9015014500406666",
            "lcolor": "#027446",
            "bcolor": "#FFFFFF",
            "direction": "18",
            "prodclass": "TRAM",
            "delay": "4"
          },
          {
            "x": "11998280",
            "y": "57686296",
            "name": "Spå 2",
            "gid": "9015014500206700",
            "lcolor": "#FFE852",
            "bcolor": "#00ADEE",
            "direction": "10",
            "prodclass": "TRAM",
            "delay": "0"
          },
          {
            "x": "11963123",
            "y": "57697731",
            "name": "Spå 2",
            "gid": "9015014500206658",
            "lcolor": "#FFE852",
            "bcolor": "#00ADEE",
            "direction": "19",
            "prodclass": "TRAM",
            "delay": "1"
          },
          {
            "x": "11896190",
            "y": "57737103",
            "name": "Spå 6",
            "gid": "9015014500606550",
            "lcolor": "#F89828",
            "bcolor": "#00435C",
            "direction": "11",
            "prodclass": "TRAM",
            "delay": "14"
          },
          {
            "x": "11927346",
            "y": "57719440",
            "name": "Spå 6",
            "gid": "9015014500606659",
            "lcolor": "#F89828",
            "bcolor": "#00435C",
            "direction": "1",
            "prodclass": "TRAM",
            "delay": "1"
          },
          {
            "x": "11991745",
            "y": "57713336",
            "name": "Spå 6",
            "gid": "9015014500606573",
            "lcolor": "#F89828",
            "bcolor": "#00435C",
            "direction": "1",
            "prodclass": "TRAM",
            "delay": "3"
          },
          {
            "x": "12039981",
            "y": "57759469",
            "name": "Spå 6",
            "gid": "9015014500606543",
            "lcolor": "#F89828",
            "bcolor": "#00435C",
            "direction": "5",
            "prodclass": "TRAM",
            "delay": "0"
          },
          {
            "x": "12011323",
            "y": "57666484",
            "name": "Spå 4",
            "gid": "9015014500406634",
            "lcolor": "#027446",
            "bcolor": "#FFFFFF",
            "direction": "24",
            "prodclass": "TRAM",
            "delay": "3"
          },
          {
            "x": "11968652",
            "y": "57706531",
            "name": "Spå 4",
            "gid": "9015014500406641",
            "lcolor": "#027446",
            "bcolor": "#FFFFFF",
            "direction": "7",
            "prodclass": "TRAM",
            "delay": "0"
          },
          {
            "x": "12024349",
            "y": "57773015",
            "name": "Spå 4",
            "gid": "9015014500406599",
            "lcolor": "#027446",
            "bcolor": "#FFFFFF",
            "direction": "4",
            "prodclass": "TRAM",
            "delay": "0"
          },
          {
            "x": "11990765",
            "y": "57692706",
            "name": "Spå 2",
            "gid": "9015014500206621",
            "lcolor": "#FFE852",
            "bcolor": "#00ADEE",
            "direction": "26",
            "prodclass": "TRAM",
            "delay": "0"
          },
          {
            "x": "11969407",
            "y": "57712491",
            "name": "Bus 16",
            "gid": "9015014501600255",
            "lcolor": "#007C4F",
            "bcolor": "#FFFF50",
            "direction": "27",
            "prodclass": "BUS",
            "delay": "0"
          },
          {
            "x": "11956471",
            "y": "57684391",
            "name": "Bus 16",
            "gid": "9015014501600253",
            "lcolor": "#007C4F",
            "bcolor": "#FFFF50",
            "direction": "19",
            "prodclass": "BUS",
            "delay": "5"
          },
          {
            "x": "11949612",
            "y": "57720635",
            "name": "Bus 99",
            "gid": "9015014509900199",
            "lcolor": "#FFFF50",
            "bcolor": "#0061EB",
            "direction": "0",
            "prodclass": "BUS",
            "delay": "-2"
          },
          {
            "x": "12000707",
            "y": "57696059",
            "name": "Bus 50",
            "gid": "9015014505000254",
            "lcolor": "#FFFF50",
            "bcolor": "#0061EB",
            "direction": "10",
            "prodclass": "BUS",
            "delay": "-1"
          },
          {
            "x": "11951195",
            "y": "57701956",
            "name": "Bus 50",
            "gid": "9015014505000252",
            "lcolor": "#FFFF50",
            "bcolor": "#0061EB",
            "direction": "19",
            "prodclass": "BUS",
            "delay": "0"
          },
          {
            "x": "11907327",
            "y": "57651571",
            "name": "Bus 50",
            "gid": "9015014505000250",
            "lcolor": "#FFFF50",
            "bcolor": "#0061EB",
            "direction": "30",
            "prodclass": "BUS",
            "delay": "-1"
          },
          {
            "x": "11887389",
            "y": "57659113",
            "name": "Bus 50",
            "gid": "9015014505000255",
            "lcolor": "#FFFF50",
            "bcolor": "#0061EB",
            "direction": "4",
            "prodclass": "BUS"
          },
          {
            "x": "11969730",
            "y": "57703834",
            "name": "Bus 50",
            "gid": "9015014505000253",
            "lcolor": "#FFFF50",
            "bcolor": "#0061EB",
            "direction": "28",
            "prodclass": "BUS",
            "delay": "3"
          },
          {
            "x": "12014236",
            "y": "57680112",
            "name": "Bus 50",
            "gid": "9015014505000251",
            "lcolor": "#FFFF50",
            "bcolor": "#0061EB",
            "direction": "28",
            "prodclass": "BUS",
            "delay": "1"
          },
          {
            "x": "11920146",
            "y": "57597034",
            "name": "Bus 82",
            "gid": "9015014508200067",
            "lcolor": "#FFFF50",
            "bcolor": "#0061EB",
            "direction": "17",
            "prodclass": "BUS",
            "delay": "0"
          },
          {
            "x": "11887164",
            "y": "57659176",
            "name": "Bus 91",
            "gid": "9015014509100067",
            "lcolor": "#FFFF50",
            "bcolor": "#0061EB",
            "direction": "18",
            "prodclass": "BUS",
            "delay": "-1"
          },
          {
            "x": "11897088",
            "y": "57671186",
            "name": "Bus 90",
            "gid": "9015014509000068",
            "lcolor": "#FFFF50",
            "bcolor": "#0061EB",
            "direction": "24",
            "prodclass": "BUS",
            "delay": "0"
          },
          {
            "x": "11900612",
            "y": "57624630",
            "name": "Bus 92",
            "gid": "9015014509200073",
            "lcolor": "#FFFF50",
            "bcolor": "#0061EB",
            "direction": "23",
            "prodclass": "BUS",
            "delay": "-1"
          },
          {
            "x": "11875299",
            "y": "57655158",
            "name": "Bus 90",
            "gid": "9015014509000067",
            "lcolor": "#FFFF50",
            "bcolor": "#0061EB",
            "direction": "1",
            "prodclass": "BUS",
            "delay": "0"
          },
          {
            "x": "11880135",
            "y": "57672849",
            "name": "Bus 91",
            "gid": "9015014509100068",
            "lcolor": "#FFFF50",
            "bcolor": "#0061EB",
            "direction": "20",
            "prodclass": "BUS",
            "delay": "2"
          },
          {
            "x": "11896217",
            "y": "57649647",
            "name": "Bus 94",
            "gid": "9015014509400068",
            "lcolor": "#FFFF50",
            "bcolor": "#0061EB",
            "direction": "2",
            "prodclass": "BUS",
            "delay": "1"
          },
          {
            "x": "11903785",
            "y": "57652452",
            "name": "Bus 99",
            "gid": "9015014509900198",
            "lcolor": "#FFFF50",
            "bcolor": "#0061EB",
            "direction": "30",
            "prodclass": "BUS",
            "delay": "-2"
          },
          {
            "x": "11939877",
            "y": "57657279",
            "name": "Bus 82",
            "gid": "9015014508200068",
            "lcolor": "#FFFF50",
            "bcolor": "#0061EB",
            "direction": "8",
            "prodclass": "BUS",
            "delay": "2"
          },
          {
            "x": "11915930",
            "y": "57649378",
            "name": "Bus 95",
            "gid": "9015014509500079",
            "lcolor": "#FFFF50",
            "bcolor": "#0061EB",
            "direction": "13",
            "prodclass": "BUS",
            "delay": "-2"
          },
          {
            "x": "11779725",
            "y": "57708446",
            "name": "Röd express",
            "gid": "9015014620100202",
            "lcolor": "#C63539",
            "bcolor": "#FFFFFF",
            "direction": "0",
            "prodclass": "BUS",
            "delay": "4"
          },
          {
            "x": "11996797",
            "y": "57694944",
            "name": "Röd express",
            "gid": "9015014620100200",
            "lcolor": "#C63539",
            "bcolor": "#FFFFFF",
            "direction": "27",
            "prodclass": "BUS",
            "delay": "4"
          },
          {
            "x": "11987808",
            "y": "57696949",
            "name": "Röd express",
            "gid": "9015014620100217",
            "lcolor": "#C63539",
            "bcolor": "#FFFFFF",
            "direction": "17",
            "prodclass": "BUS",
            "delay": "1"
          },
          {
            "x": "11803340",
            "y": "57716329",
            "name": "Röd express",
            "gid": "9015014620100215",
            "lcolor": "#C63539",
            "bcolor": "#FFFFFF",
            "direction": "18",
            "prodclass": "BUS",
            "delay": "2"
          },
          {
            "x": "11847594",
            "y": "57707286",
            "name": "Bus X1",
            "gid": "9015014521200188",
            "lcolor": "#FFFF50",
            "bcolor": "#D400A2",
            "direction": "30",
            "prodclass": "BUS",
            "delay": "2"
          },
          {
            "x": "12020807",
            "y": "57724384",
            "name": "Bus X1",
            "gid": "9015014521200195",
            "lcolor": "#FFFF50",
            "bcolor": "#D400A2",
            "direction": "18",
            "prodclass": "BUS",
            "delay": "2"
          },
          {
            "x": "11969524",
            "y": "57712671",
            "name": "Bus X1",
            "gid": "9015014521200193",
            "lcolor": "#FFFF50",
            "bcolor": "#D400A2",
            "direction": "11",
            "prodclass": "BUS",
            "delay": "10"
          },
          {
            "x": "11783393",
            "y": "57709237",
            "name": "Bus X1",
            "gid": "9015014521200191",
            "lcolor": "#FFFF50",
            "bcolor": "#D400A2",
            "direction": "17",
            "prodclass": "BUS",
            "delay": "2"
          },
          {
            "x": "11760228",
            "y": "57729750",
            "name": "Bus X1",
            "gid": "9015014521200189",
            "lcolor": "#FFFF50",
            "bcolor": "#D400A2",
            "direction": "17",
            "prodclass": "BUS",
            "delay": "4"
          },
          {
            "x": "11951887",
            "y": "57690917",
            "name": "Spå 1",
            "gid": "9015014500106660",
            "lcolor": "#FFFFFF",
            "bcolor": "#006C93",
            "direction": "23",
            "prodclass": "TRAM",
            "delay": "-1"
          },
          {
            "x": "11906096",
            "y": "57651095",
            "name": "Spå 1",
            "gid": "9015014500106630",
            "lcolor": "#FFFFFF",
            "bcolor": "#006C93",
            "direction": "19",
            "prodclass": "TRAM",
            "delay": "0"
          },
          {
            "x": "11895246",
            "y": "57732699",
            "name": "Spå 5",
            "gid": "9015014500506691",
            "lcolor": "#C63539",
            "bcolor": "#FFFFFF",
            "direction": "23",
            "prodclass": "TRAM",
            "delay": "0"
          },
          {
            "x": "11969209",
            "y": "57712896",
            "name": "Spå 5",
            "gid": "9015014500506633",
            "lcolor": "#C63539",
            "bcolor": "#FFFFFF",
            "direction": "25",
            "prodclass": "TRAM",
            "delay": "2"
          },
          {
            "x": "12028403",
            "y": "57719925",
            "name": "Spå 5",
            "gid": "9015014500506587",
            "lcolor": "#C63539",
            "bcolor": "#FFFFFF",
            "direction": "4",
            "prodclass": "TRAM",
            "delay": "1"
          },
          {
            "x": "11720918",
            "y": "58125069",
            "name": "Orust express",
            "gid": "9015014620700050",
            "lcolor": "#006C93",
            "bcolor": "#FFFFFF",
            "direction": "8",
            "prodclass": "BUS",
            "delay": "0"
          },
          {
            "x": "11950098",
            "y": "58355364",
            "name": "Bus 860",
            "gid": "9015014486000067",
            "lcolor": "#006C93",
            "bcolor": "#FFFFFF",
            "direction": "31",
            "prodclass": "BUS",
            "delay": "2"
          },
          {
            "x": "11918204",
            "y": "57858224",
            "name": "Bus 303",
            "gid": "9015014630300049",
            "lcolor": "#006C93",
            "bcolor": "#FFFFFF",
            "direction": "7",
            "prodclass": "BUS",
            "delay": "3"
          },
          {
            "x": "11982917",
            "y": "57710630",
            "name": "Västtågen",
            "gid": "9015014133103683",
            "lcolor": "#006C93",
            "bcolor": "#FFFFFF",
            "direction": "20",
            "prodclass": "VAS",
            "delay": "0"
          },
          {
            "x": "11992617",
            "y": "57714010",
            "name": "Spå 1",
            "gid": "9015014500106694",
            "lcolor": "#FFFFFF",
            "bcolor": "#006C93",
            "direction": "17",
            "prodclass": "TRAM",
            "delay": "-1"
          },
          {
            "x": "11925378",
            "y": "57670278",
            "name": "Spå 1",
            "gid": "9015014500106673",
            "lcolor": "#FFFFFF",
            "bcolor": "#006C93",
            "direction": "6",
            "prodclass": "TRAM",
            "delay": "0"
          },
          {
            "x": "11980499",
            "y": "57707592",
            "name": "Spå 1",
            "gid": "9015014500106619",
            "lcolor": "#FFFFFF",
            "bcolor": "#006C93",
            "direction": "0",
            "prodclass": "TRAM",
            "delay": "0"
          },
          {
            "x": "11985470",
            "y": "57734317",
            "name": "Bus 841",
            "gid": "9015014484100050",
            "lcolor": "#006C93",
            "bcolor": "#FFFFFF",
            "direction": "8",
            "prodclass": "BUS",
            "delay": "5"
          },
          {
            "x": "11854435",
            "y": "58320027",
            "name": "Bus 841",
            "gid": "9015014484100048",
            "lcolor": "#006C93",
            "bcolor": "#FFFFFF",
            "direction": "10",
            "prodclass": "BUS",
            "delay": "9"
          },
          {
            "x": "11509141",
            "y": "58302561",
            "name": "Bus 841",
            "gid": "9015014484100046",
            "lcolor": "#006C93",
            "bcolor": "#FFFFFF",
            "direction": "15",
            "prodclass": "BUS",
            "delay": "26"
          },
          {
            "x": "11504907",
            "y": "58302552",
            "name": "Bus 841",
            "gid": "9015014484100053",
            "lcolor": "#006C93",
            "bcolor": "#FFFFFF",
            "direction": "31",
            "prodclass": "BUS",
            "delay": "59"
          },
          {
            "x": "11925063",
            "y": "57664605",
            "name": "Spå 8",
            "gid": "9015014500806620",
            "lcolor": "#A5449A",
            "bcolor": "#FFFFFF",
            "direction": "24",
            "prodclass": "TRAM",
            "delay": "3"
          },
          {
            "x": "11989983",
            "y": "57692346",
            "name": "Spå 8",
            "gid": "9015014500806645",
            "lcolor": "#A5449A",
            "bcolor": "#FFFFFF",
            "direction": "4",
            "prodclass": "TRAM",
            "delay": "-1"
          },
          {
            "x": "12005939",
            "y": "57741292",
            "name": "Spå 8",
            "gid": "9015014500806601",
            "lcolor": "#A5449A",
            "bcolor": "#FFFFFF",
            "direction": "6",
            "prodclass": "TRAM",
            "delay": "0"
          },
          {
            "x": "11955509",
            "y": "57699852",
            "name": "Spå 11",
            "gid": "9015014501106617",
            "lcolor": "#000000",
            "bcolor": "#FFFFFF",
            "direction": "31",
            "prodclass": "TRAM",
            "delay": "3"
          },
          {
            "x": "12002883",
            "y": "57720905",
            "name": "Spå 9",
            "gid": "9015014500906684",
            "lcolor": "#D0EDFB",
            "bcolor": "#006C93",
            "direction": "20",
            "prodclass": "TRAM",
            "delay": "0"
          },
          {
            "x": "11915103",
            "y": "57687807",
            "name": "Spå 9",
            "gid": "9015014500906642",
            "lcolor": "#D0EDFB",
            "bcolor": "#006C93",
            "direction": "24",
            "prodclass": "TRAM",
            "delay": "-1"
          },
          {
            "x": "11927005",
            "y": "57696940",
            "name": "Spå 9",
            "gid": "9015014500906667",
            "lcolor": "#D0EDFB",
            "bcolor": "#006C93",
            "direction": "2",
            "prodclass": "TRAM",
            "delay": "1"
          },
          {
            "x": "12003754",
            "y": "57721507",
            "name": "Spå 9",
            "gid": "9015014500906627",
            "lcolor": "#D0EDFB",
            "bcolor": "#006C93",
            "direction": "4",
            "prodclass": "TRAM",
            "delay": "0"
          },
          {
            "x": "12026308",
            "y": "57733768",
            "name": "Spå 7",
            "gid": "9015014500706688",
            "lcolor": "#764712",
            "bcolor": "#FFFFFF",
            "direction": "22",
            "prodclass": "TRAM",
            "delay": "0"
          },
          {
            "x": "11969946",
            "y": "57698899",
            "name": "Spå 7",
            "gid": "9015014500706654",
            "lcolor": "#764712",
            "bcolor": "#FFFFFF",
            "direction": "25",
            "prodclass": "TRAM",
            "delay": "0"
          },
          {
            "x": "11930546",
            "y": "57673676",
            "name": "Spå 7",
            "gid": "9015014500706622",
            "lcolor": "#764712",
            "bcolor": "#FFFFFF",
            "direction": "18",
            "prodclass": "TRAM",
            "delay": "2"
          },
          {
            "x": "11899156",
            "y": "57645288",
            "name": "Spå 7",
            "gid": "9015014500706594",
            "lcolor": "#764712",
            "bcolor": "#FFFFFF",
            "direction": "25",
            "prodclass": "TRAM",
            "delay": "7"
          },
          {
            "x": "11966395",
            "y": "57687573",
            "name": "Spå 7",
            "gid": "9015014500706647",
            "lcolor": "#764712",
            "bcolor": "#FFFFFF",
            "direction": "5",
            "prodclass": "TRAM",
            "delay": "-1"
          },
          {
            "x": "12004123",
            "y": "57726173",
            "name": "Spå 7",
            "gid": "9015014500706605",
            "lcolor": "#764712",
            "bcolor": "#FFFFFF",
            "direction": "4",
            "prodclass": "TRAM",
            "delay": "-3"
          },
          {
            "x": "11953136",
            "y": "57700122",
            "name": "Spå 3",
            "gid": "9015014500306643",
            "lcolor": "#0071C1",
            "bcolor": "#FFFFFF",
            "direction": "31",
            "prodclass": "TRAM",
            "delay": "2"
          },
          {
            "x": "12005247",
            "y": "57716347",
            "name": "Spå 3",
            "gid": "9015014500306595",
            "lcolor": "#0071C1",
            "bcolor": "#FFFFFF",
            "direction": "0",
            "prodclass": "TRAM",
            "delay": "0"
          },
          {
            "x": "11921827",
            "y": "58352685",
            "name": "Bus 6",
            "gid": "9015014480600065",
            "lcolor": "#A5449A",
            "bcolor": "#FFFFFF",
            "direction": "31",
            "prodclass": "BUS"
          },
          {
            "x": "11454882",
            "y": "58255889",
            "name": "Fär 847",
            "gid": "9015014484700046",
            "lcolor": "#006C93",
            "bcolor": "#FFFFFF",
            "direction": "26",
            "prodclass": "BOAT",
            "delay": "0"
          },
          {
            "x": "11996914",
            "y": "57717201",
            "name": "Spå 11",
            "gid": "9015014501106670",
            "lcolor": "#000000",
            "bcolor": "#FFFFFF",
            "direction": "20",
            "prodclass": "TRAM",
            "delay": "1"
          },
          {
            "x": "11936021",
            "y": "57692445",
            "name": "Spå 11",
            "gid": "9015014501106638",
            "lcolor": "#000000",
            "bcolor": "#FFFFFF",
            "direction": "23",
            "prodclass": "TRAM",
            "delay": "-1"
          },
          {
            "x": "11865599",
            "y": "57667815",
            "name": "Spå 11",
            "gid": "9015014501106610",
            "lcolor": "#000000",
            "bcolor": "#FFFFFF",
            "direction": "17",
            "prodclass": "TRAM",
            "delay": "0"
          },
          {
            "x": "11901637",
            "y": "57680435",
            "name": "Spå 11",
            "gid": "9015014501106665",
            "lcolor": "#000000",
            "bcolor": "#FFFFFF",
            "direction": "2",
            "prodclass": "TRAM",
            "delay": "1"
          },
          {
            "x": "12026147",
            "y": "57734766",
            "name": "Spå 11",
            "gid": "9015014501106581",
            "lcolor": "#000000",
            "bcolor": "#FFFFFF",
            "direction": "6",
            "prodclass": "TRAM",
            "delay": "0"
          },
          {
            "x": "11971034",
            "y": "57686386",
            "name": "Spå 10",
            "gid": "9015014501006668",
            "lcolor": "#D8E8B0",
            "bcolor": "#006C93",
            "direction": "26",
            "prodclass": "TRAM",
            "delay": "1"
          },
          {
            "x": "11969775",
            "y": "57706702",
            "name": "Spå 10",
            "gid": "9015014501006663",
            "lcolor": "#D8E8B0",
            "bcolor": "#006C93",
            "direction": "2",
            "prodclass": "TRAM",
            "delay": "-1"
          },
          {
            "x": "11873285",
            "y": "57750497",
            "name": "Svart express",
            "gid": "9015014521100189",
            "lcolor": "#000000",
            "bcolor": "#FFFFFF",
            "direction": "29",
            "prodclass": "BUS",
            "delay": "4"
          },
          {
            "x": "11795627",
            "y": "57735890",
            "name": "Svart express",
            "gid": "9015014521100191",
            "lcolor": "#000000",
            "bcolor": "#FFFFFF",
            "direction": "2",
            "prodclass": "BUS",
            "delay": "1"
          },
          {
            "x": "11983340",
            "y": "57710190",
            "name": "Svart express",
            "gid": "9015014521100187",
            "lcolor": "#000000",
            "bcolor": "#FFFFFF",
            "direction": "2",
            "prodclass": "BUS",
            "delay": "0"
          },
          {
            "x": "11939715",
            "y": "57695097",
            "name": "Bus 60",
            "gid": "9015014506000332",
            "lcolor": "#006C93",
            "bcolor": "#D8E8B0",
            "direction": "2",
            "prodclass": "BUS",
            "delay": "2"
          },
          {
            "x": "11985821",
            "y": "57707106",
            "name": "Bus 60",
            "gid": "9015014506000330",
            "lcolor": "#006C93",
            "bcolor": "#D8E8B0",
            "direction": "31",
            "prodclass": "BUS",
            "delay": "-2"
          },
          {
            "x": "11995215",
            "y": "57709273",
            "name": "Bus 60",
            "gid": "9015014506000331",
            "lcolor": "#006C93",
            "bcolor": "#D8E8B0",
            "direction": "16",
            "prodclass": "BUS",
            "delay": "-2"
          },
          {
            "x": "11952031",
            "y": "57699744",
            "name": "Bus 60",
            "gid": "9015014506000329",
            "lcolor": "#006C93",
            "bcolor": "#D8E8B0",
            "direction": "22",
            "prodclass": "BUS",
            "delay": "0"
          },
          {
            "x": "11939509",
            "y": "57743630",
            "name": "Bus 17",
            "gid": "9015014501700231",
            "lcolor": "#006C93",
            "bcolor": "#D8E8B0",
            "direction": "26",
            "prodclass": "BUS",
            "delay": "1"
          },
          {
            "x": "11979304",
            "y": "57709507",
            "name": "Bus 17",
            "gid": "9015014501700229",
            "lcolor": "#006C93",
            "bcolor": "#D8E8B0",
            "direction": "2",
            "prodclass": "BUS",
            "delay": "-2"
          },
          {
            "x": "12039019",
            "y": "57809125",
            "name": "Bus 75",
            "gid": "9015014507500173",
            "lcolor": "#006C93",
            "bcolor": "#FFFFFF",
            "direction": "11",
            "prodclass": "BUS",
            "delay": "-1"
          },
          {
            "x": "11909242",
            "y": "58338805",
            "name": "Bus 821",
            "gid": "9015014482100055",
            "lcolor": "#006C93",
            "bcolor": "#FFFFFF",
            "direction": "7",
            "prodclass": "BUS",
            "delay": "-1"
          },
          {
            "x": "11933962",
            "y": "58375014",
            "name": "Bus 1",
            "gid": "9015014480100187",
            "lcolor": "#C63539",
            "bcolor": "#FFFFFF",
            "direction": "19",
            "prodclass": "BUS",
            "delay": "1"
          },
          {
            "x": "12007782",
            "y": "57716779",
            "name": "Bus 62",
            "gid": "9015014506200106",
            "lcolor": "#006C93",
            "bcolor": "#FFFFFF",
            "direction": "1",
            "prodclass": "BUS",
            "delay": "3"
          },
          {
            "x": "12001282",
            "y": "57695528",
            "name": "Bus 62",
            "gid": "9015014506200095",
            "lcolor": "#006C93",
            "bcolor": "#FFFFFF",
            "direction": "26",
            "prodclass": "BUS",
            "delay": "0"
          },
          {
            "x": "11962997",
            "y": "57866548",
            "name": "Bus 2",
            "gid": "9015014630200048",
            "lcolor": "#0071C1",
            "bcolor": "#FFFFFF",
            "direction": "19",
            "prodclass": "BUS",
            "delay": "0"
          }
        ],
        "time": "21:53:29",
        "minx": "10044745",
        "maxx": "12040389",
        "miny": "57025027",
        "maxy": "58406811"
      }
    },
    coordinates_bounding_box: {
        minX: 11.9184494,
        maxY: 57.7220735,
        maxX: 12.0229912,
        minY: 57.6876803
    },
    generatingToken: false,

    async generateToken() {
      if (this.generatingToken) {
        return false;
      }
      this.generatingToken = true;

      let xhr = new XMLHttpRequest();
      xhr.open('POST', "https://api.vasttrafik.se/token", true);
      // xhr.withCredentials = true;
      // xhr.setRequestHeader('Access-Control-Allow-Origin', '[something]');
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      xhr.setRequestHeader('Authorization', 'Basic UmJseEkyeTFsWVNFTTZ0Z2J6anBTa2E0R1o6Wk1nSkR0Y0paRGV4OTJldUxpQUdYOFExUnU=');
      xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE && (status === 0 || (status >= 200 && status < 400))) {
          //do something
          console.log(xhr.responseText);
          this.generatingToken = false;
        }
      }
      xhr.send(encodeURI("grant_type=client_credentials&scope=device_dev"));
    },

    async getData() {
      if (true) {
        let getVars = `?minx=${this.coordinates_bounding_box.minX}&maxx=${this.coordinates_bounding_box.maxX}&miny=${this.coordinates_bounding_box.minY}&maxy=${this.coordinates_bounding_box.maxY}`;
        // let response = await fetch("https://api.vasttrafik.se/bin/rest.exe/v2/livemap?minx=10044745&maxx=12040389&miny=57025027&maxy=58406811&onlyRealtime=yes", {
        let response = await fetch(`https://api.vasttrafik.se/bin/rest.exe/v2/livemap${getVars}&onlyRealtime=yes`, {
          headers: new Headers({
            "Authorization": "Bearer " + "bfe2b48f-c938-3e67-a8a1-42f3ce82a2d3"
          }),
        })

        // console.error(reason);
        // console.log(response);
        if (!response.ok) {
          if (response.status === 401) {
            // console.log("get new token");
            if (!this.generatingToken) {
              this.generateToken();
            }
            // else {
            //   // console.error();
            // }
          }

          return false;
        }

        // .catch(reason => {
        //     if (response.status === 401) {
        //       console.log("get new token");
        //     }
        // });
        
        // console.log(response);
        
        // else {
        //   return false;
        // }

        // }

        let data = await response.json();
        // console.log(data);


        // Get the min and max value of the buses' x- and y-coordinates.
        // note(joch): were you thinking?
        let maxY = Math.max.apply(Math, data.livemap.vehicles.map(vehicle => vehicle.y));
        let maxX = Math.max.apply(Math, data.livemap.vehicles.map(vehicle => vehicle.x));
        let minY = Math.min.apply(Math, data.livemap.vehicles.map(vehicle => vehicle.y));
        let minX = Math.min.apply(Math, data.livemap.vehicles.map(vehicle => vehicle.x));
        // Calculate scale based on the size of the min and max coordinate-values and our canvas-element.

        // console.log(maxY, maxX, minY, minX);
        data.vehicleMinMaxCoordinates = {
          maxY: Math.max.apply(Math, data.livemap.vehicles.map(vehicle => vehicle.y)),
          maxX: Math.max.apply(Math, data.livemap.vehicles.map(vehicle => vehicle.x)),
          minY: Math.min.apply(Math, data.livemap.vehicles.map(vehicle => vehicle.y)),
          minX: Math.min.apply(Math, data.livemap.vehicles.map(vehicle => vehicle.x))
        }

        this.currentData = data;
      }
      // this.currentData = this.temp_data;
    },

    // async tick() {

    // },

    async init() {
      this.$canvas = document.querySelector("#canvas-sol-system");
      this.$canvas.width = 1218;
      this.$canvas.height = 750;
      this.$canvas.style.backgroundImage = "url(../../resources/background-images/map_gbg_for_busses.png";
      this.$canvas.style.backgroundSize = "1218px 750px"
      this.$ctx = this.$canvas.getContext("2d");
      // this.$ctx.fillStyle = "#ddd";
      // this.$ctx.fillRect(0, 0, this.$canvas.width, this.$canvas.height);
      // this.generateToken();
      for (const key in this.coordinates_bounding_box) {
        if (Object.hasOwnProperty.call(this.coordinates_bounding_box, key)) {
          this.coordinates_bounding_box[key] *= 1000000;
          
        }
      }
      // for (const iterator in this.coordinates_bounding_box) {
      //   console.log(this.coordinates_bounding_box[iterator]);
      // }

      // setInterval(this.tick.bind(this), 1000);
      // return;
      setInterval(async function() {
        await this.getData();
  
        if (!this.currentData) {
          return false;
        }

        let width_of_maxx_minus_minx = this.currentData.livemap.maxx - this.currentData.livemap.minx;
        let height_of_maxy_minus_miny = this.currentData.livemap.maxy - this.currentData.livemap.miny;
        let scaleX = this.$canvas.width / width_of_maxx_minus_minx; // note(johan): is meters correct?
        let scaleY = this.$canvas.height / height_of_maxy_minus_miny; // note(johan): is meters correct?
  
        this.$ctx.clearRect(0, 0, this.$canvas.width, this.$canvas.height);
        this.$ctx.fillStyle = "black";
        for (let i = 0; i < this.currentData.livemap.vehicles.length; i++) {
          let vehicle = this.currentData.livemap.vehicles[i];
          // where 'maxx' === 'this.currentData.livemap.maxx'
          let vehicle_distFrom_maxx_x = vehicle.x - this.currentData.livemap.minx;
          let vehicle_distFrom_maxy_y = vehicle.y - this.currentData.livemap.miny;
          let canvas_vehicleX = vehicle_distFrom_maxx_x * scaleX;
          let canvas_vehicleY = vehicle_distFrom_maxy_y * scaleY;
          this.$ctx.beginPath();
          this.$ctx.arc(canvas_vehicleX, this.$canvas.height - canvas_vehicleY, 5, 0, 2 * Math.PI);
          this.$ctx.fill();
          this.$ctx.closePath();
        }
      }.bind(this), 1000);
    }
  }

  /* Here be foxes ("API stuff") */
  const getRandomFox = {
    $randomFoxImage: undefined,
    $getRandomFoxButton: undefined,

    getAndDisplayFox: function () {
      console.log(this);
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
    solSystem.init();
    vasttrafikBuses.init();
  }());
}());
