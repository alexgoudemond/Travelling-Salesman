/*
Original Code was provided from Vector.js developers, via
    https://vectorjs.org/tutorials/getting-started/

    accessed January 2022, through Firefox

This file is called script.js

The URL in the import statement takes us to a webpage with the following:
    
    "
    import Interactive from "./elements/interactive.js";
    export default Interactive;
    //# sourceMappingURL=interactive.js.map
    "
*/

//TODO Find out how Interactive works as an object
import Interactive from "https://vectorjs.org/interactive.js";

// Construct an interactive within the HTML element with the id "my-interactive"
let myInteractive = new Interactive("my-interactive");
myInteractive.border = true;

// Construct a control point at the the location (100, 100)
let control = myInteractive.control(100, 100);

//New Variables
let point2 = myInteractive.control(150, 150);
let point3 = myInteractive.control(150, 250);

// Print the two objects to the console
console.log(control, myInteractive);