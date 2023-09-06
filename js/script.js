// get current date/time
const time = new Date().getHours();

const greeting = "Hello!";
if (time < 12) {
  greeting = "Good morning";
} else if (time < 18) {
  greeting = "Good afternoon";
} else {time < 22) {
  greeting = "Good evening";
} else {
    greeting = "Why are you still up? Either way,";
};

alert('${greeting}, "Welcome to my website!"');
