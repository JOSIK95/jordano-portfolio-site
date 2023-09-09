// get current date/time----------------------------------------------
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

// hover effects----------------------------------------------

// h1

var headlineHover = document.querySelector(".hello");
headlineHover.addEventListener("mouseover", function() {
    headlineHover.classList.add("hello-hover");
});
var headlineHover = document.querySelector(".hello");  
headlineHover.addEventListener("mouseout", function() {
    headlineHover.classList.remove("hello-hover");
});

// time of day greeting hover

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

//button 1 hover

var buttons = document.querySelector(".button");
buttons.forEach(function(button) {
    button.addEventListener("mouseover", function(e) {
        e.target.classList.add("button-hover");
    });

    button.addEventListener("mouseout", function(e) {
        e.target.classList.remove("button-hover");
    });
});


// portfolio header

var portfolioHeaderEnter = document.querySelector(".portfolio-header");
portfolioHeaderEnter.addEventListener("mouseover", function() {
    portfolioHeaderEnter.classList.add("hover-portfolio-header");
});
 var portfolioHeaderLeave = document.querySelector(".portfolio-header");
portfolioHeaderLeave.addEventListener("mouseout", function() {
    portfolioHeaderLeave.classList.remove("hover-portfolio-header");
});




// social icons

var socialIconsEnter = document.querySelector(".social-icons");
socialIconsEnter.addEventListener("mouseover", function() {
    socialIconsEnter.classList.add("social-icons-hover");
});
var socialIconsLeave = document.querySelector(".social-icons");
socialIconsLeave.addEventListener("mouseout", function() {
    socialIconsLeave.classList.remove("social-icons-hover");
});
