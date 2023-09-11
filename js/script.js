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

// surprise! :)

const aboutHeading = document.querySelector(".hover-me");
const smileyFace = document.createElement("span");
smileyFace.innerHTML = " :)";
smileyFace.style.opacity = "0";
smileyFace.style.transition = "opacity 0.3s ease-in-out";
smileyFace.style.color = "slategray";

aboutHeading.appendChild(smileyFace);

aboutHeading.addEventListener("mouseover", function() {
    smileyFace.style.opacity = "1";
});
aboutHeading.addEventListener("mouseout", function() {
    smileyFace.style.opacity = "0";
});

// skills icons hover

const skillsIcons = document.querySelectorAll(".language-wrapper");
skillsIcons.forEach(function(icon) {
    const iconContainer = icon.querySelector(".icon-container");
    const iconText = icon.querySelector(".icon-text");
    iconContainer.addEventListener("mouseover", function() {
        iconText.style.opacity = "1";
    });
});
