// get current date/time
var greetingTime = document.querySelector(".greeting-time");

var time = new Date().getHours();

var greeting = "Hello!"
if (time < 12) {
  greeting = "Good morning";
} else if (time <= 13) {
  greeting = "Good afternoon";
} else if (time <= 22) {
  greeting = "Good evening";
} else {
    greeting = "Good night";
};

greetingTime.innerHTML = `<div>${greeting}</div>`;

// hover effects

// h1
var headlineHover = document.querySelector(".hello");
headlineHover.addEventListener("mouseover", function() {
    headlineHover.classList.add("hello-hover");
});
var headlineHover = document.querySelector(".hello");  
headlineHover.addEventListener("mouseout", function() {
    headlineHover.classList.remove("hello-hover");
});

// time of day hover
var timeOfDayHover = document.querySelector(".greeting-time");
timeOfDayHover.addEventListener("mouseover", function() {
    timeOfDayHover.classList.add("greeting-time-hover");
});
var timeOfDayHover = document.querySelector(".greeting-time");
timeOfDayHover.addEventListener("mouseout", function() {
    timeOfDayHover.classList.remove("greeting-time-hover");
});

// h2 project title
var projectTitleHover = document.querySelector("#work h2");
projectTitleHover.addEventListener("mouseover", function() {
    projectTitleHover.classList.add("h2-hover");
});
var projectTitleHover = document.querySelector("#work h2");
projectTitleHover.addEventListener("mouseout", function() {
    projectTitleHover.classList.remove("h2-hover");
});

//button hover
var buttonHoverEnter = document.querySelector(".button");
buttonHoverEnter.addEventListener("mouseover", function() {
    buttonHover.classList.add("button-hover");
}); 
var buttonHoverLeave = document.querySelector(".button");
buttonHoverLeave.addEventListener("mouseout", function() {
    buttonHover.classList.remove("button-hover");
});

// portfolio header
var portfolioHeader = document.querySelector(".portfolio-header");
portfolioHeader.addEventListener("mouseover", function() {
    portfolioHeader.classList.add("hover-portfolio-header");
});
 var portfolioHeader = document.querySelector(".portfolio-header");
portfolioHeader.addEventListener("mouseout", function() {
    portfolioHeader.classList.remove("hover-portfolio-header");
});