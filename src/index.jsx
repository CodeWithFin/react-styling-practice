//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDOM from "react-dom";

var day = "Good Morning";
const d = new Date();
const hour =d.getHours();
console.log(hour)
const customStyle ={
    color: "red"
}
if(hour>12 && hour < 18){
    day = "Good Afternoon";
customStyle.color = "green"
}
if (hour > 18){
    day = "Good Night"
    customStyle.color = "blue"
}
ReactDOM.render(<h1 style ={customStyle}>{day}</h1>,document.getElementById("root"));