const body = document.querySelector("body");
const images = ["001.jpg", "002.jpg", "003.jpg", "004.jpg"];
const randomImg = images[Math.floor(Math.random() * images.length)];
// console.log(randomImg);
body.style.backgroundImage = `url("img/${randomImg}")`;
body.style.backgroundSize = "auto";
