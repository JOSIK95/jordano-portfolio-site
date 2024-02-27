// get current date/time
const greetingTime = document.querySelector(".greeting-time");

const time = new Date().getHours();

let greeting = "Hello!"
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


// h1

let headlineHover = document.querySelector(".hello");

headlineHover.addEventListener("mouseover", function () {
    headlineHover.classList.add("hello-hover");
});

headlineHover.addEventListener("mouseout", function () {
    headlineHover.classList.remove("hello-hover");
});

// time of day greeting hover

let timeOfDayHover = document.querySelector(".greeting-time");

timeOfDayHover.addEventListener("mouseover", function () {
    timeOfDayHover.classList.add("greeting-time-hover");
});

timeOfDayHover.addEventListener("mouseout", function () {
    timeOfDayHover.classList.remove("greeting-time-hover");
});

// surprise! :)

const aboutHeading = document.querySelector(".hover-me");
const smileyFace = document.createElement("span");
smileyFace.innerHTML = " :)";
smileyFace.style.opacity = "0";
smileyFace.style.transition = "opacity 0.3s ease-in-out";
smileyFace.style.color = "#00ccff";
aboutHeading.appendChild(smileyFace);

aboutHeading.addEventListener("mouseover", function () {
    smileyFace.style.opacity = "1";
});
aboutHeading.addEventListener("mouseout", function () {
    smileyFace.style.opacity = "0";
});






