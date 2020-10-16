"use strict";

// Tests JavaScript.
console.log("Your JavaScript is working.");

// Changes the color of the list items upon hover/mouseover and resets the color after a short delay.
let symptomsList = document.getElementById("symptoms-list");
symptomsList.addEventListener("mouseover", function (event) {
    event.target.style.color = "orange";

    setTimeout(function () {
        event.target.style.color = "";
    }, 500);
}, false);

// Toggles the information image on and off when the button is clicked.
var informational = document.getElementById("informational");
var informationalFlyer = document.getElementById("informational-flyer");

informational.addEventListener("click", function() {
	if (informationalFlyer.className === "hide") {
		informationalFlyer.className = "";
	} else {
		informationalFlyer.className = "hide";
	}
}
);

// Attaches a scroll event to the aside.
document.getElementById("scroll-update").addEventListener("scroll", scrollFunction);

function scrollFunction() {
  document.getElementById("insert-p").innerHTML = "If you need help leaving an abusive partner safely please call the SAPD non-emergency number at 210.207.7273, and the advocates with the Crisis Response Teams can help you make a plan.";
}

// Prompts confirmation message before user leaves the page.
window.onbeforeunload = function(){
  return 'Before you go, read the following:';
};
