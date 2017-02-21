// Object Literal
var spaceship1 = {
    make: 'Galaxy',
    model: 'Cruiser',
    launch: function(speed) {
        console.log(this.make + ' ' + this.model + ' launching to infinity and beyond at ' + speed + 'lyph')
    }
}

// Call the drive method with a speed argument value of 65
spaceship1.launch(2)





// // Object New
var spaceship2 = new Object()
spaceship2.make = 'Astronomical'
spaceship2.model = 'Corona'
spaceship2.launch = function(speed) {
    console.log(this.make + ' ' + this.model + ' launching to infinity and beyond at ' + speed + ' lyph.')
}

// // Call the drive method with a speed argument value of 35
spaceship2.launch(20)





// // Constructor Function
var Vehicle = function() {
    this.make = 'Ecliptic'
    this.model = 'Flare'
    this.launch = function(speed) {
        console.log(this.make + ' ' + this.model + ' blasting off at  ' + speed + 'lyph.')
    }
}

var spaceship3 = new Vehicle()

// // Call the drive method with a speed argument value of 85
spaceship3.launch(45)






// // Class
class Spaceship {
    constructor() {
        this.make = 'Celestial'
        this.model = 'Phase'
    }
    launch(speed) {
        console.log(this.make + ' ' + this.model + ' blasting away at ' + speed + ' lyph.')
    }
}

var spaceship4 = new Spaceship()

// // Call the drive method with a speed argument value of 55
spaceship4.launch(86)
