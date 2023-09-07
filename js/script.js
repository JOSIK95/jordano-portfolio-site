// get current date/time
var time = new Date().getHours();

var greeting = "Hello!";
var welcome ="Welcome to my website";
if (time < 12) {
  greeting = "Good morning";
} else if (time <= 13) {
  greeting = "Good afternoon";
} else if (time <= 22) {
  greeting = "Good evening";
} else {
    greeting = "Why are you still up? Either way";
};

alert(`${greeting}, ${welcome}!`);

// hover effects

var faBrands = document.querySelector(".fa-brands");
faBrands.addEventListener("mouseover", function() {
    faBrands.classList.add(".hover-fa-brands");
});







var portfolioHeader = document.querySelector(".portfolio-header");
portfolioHeader.addEventListener("mouseover", function() {
    portfolioHeader.classList.add(".hover-portfolio-header");
});
 var portfolioHeader = document.querySelector(".portfolio-header");
portfolioHeader.addEventListener("mouseout", function() {
    portfolioHeader.classList.add(".hover-portfolio-header-out");
});