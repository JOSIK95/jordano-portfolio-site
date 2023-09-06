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

var changeHover = document.querySelector(".hover i");
var icon = document.querySelector(".fa-brands");

changeHover.addEventListener("mouseover", function(){
    icon.classList.add(".hover i")
});