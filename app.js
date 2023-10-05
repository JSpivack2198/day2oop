properties of an object
let dog = {
    name: 'Clifford',
    numLegs: 4
    };

    //dot Notation
    let dog = {
        name: "Spot",
        numLegs: 4
      };
      // Only change code below this line
      console.log(dog.name, dog.numLegs)

      //Method on an Object
      let dog = {
        name: "Spot",
        numLegs: 4,
      sayLegs: function() {return "This dog has " + dog.numLegs + " legs."}
      };
      
      dog.sayLegs();

      //this keyword
      let dog = {
        name: "Spot",
        numLegs: 4,
        sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
      };
      
      dog.sayLegs();

    //Constructor Functions
      function Dog() {
        this.name = 'Clifford';
        this.color = 'Red';
        this.numLegs = 4;
      }

// Constructor to create an object
function Dog() {
    this.name = "Rupert";
    this.color = "brown";
    this.numLegs = 4;
  }
  //Only change code below this line
  let hound = new Dog

  //Constructor Arguments
  function Dog(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 4
    }
    let terrier = new Dog('Cocoa', 'brown')

    //Instanceof
    function House(numBedrooms) {
        this.numBedrooms = numBedrooms;
      }
      
      // Only change code below this line
      let myHouse = new House(3);
      
      myHouse instanceof House;

      //hasOwnProperty
      function Bird(name) {
        this.name = name;
        this.numLegs = 2;
      }
      
      let canary = new Bird("Tweety");
      let ownProps = [];
      // Only change code below this line
      for(let property in canary) {
        if(canary.hasOwnProperty(property)) {
          ownProps.push(property);
        }
      }
      console.log(ownProps)

      // prototypes
      function Dog(name) {
        this.name = name;
      }
      Dog.prototype.numLegs = 4;
      
      
      // Only change code above this line
      let beagle = new Dog("Snoopy");