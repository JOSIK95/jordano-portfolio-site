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
var git = document.querySelector(".fa-brands fa-git");
git.addEventListener("mouseover", function(){
git.style.color ="#d45bb9";
});