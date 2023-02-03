// let colors = [
// "red",
// "yellow",
// "green",
// "aqua",
// "brown",
// "blue",
// "gray",
// "purple",
// ]
//  let min = Math.ceil(500);
//  let max = Math.floor(550);
//  console.log  ( Math.floor(Math.random() * (max - min) + min));
// const container = document.getElementById("container");

// for (let i = 0; i < 100; i++) {
//   const block = document.createElement("div");
//   block.classList.add("block");
//   block.style.backgroundColor = getRandomColor();
//   block.style.top = `${getRandomNumber(0, 100)}%`;
//   block.style.left = `${getRandomNumber(0, 100)}%`;
//   container.appendChild(block);
// }

// function getRandomColor() {
//   const letters = "0123456789ABCDEF";
//   let color = "#";
//   for (let i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }
//   return color;
// }

// function getRandomNumber(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }
// const container = document.getElementById("container");
// const colors = ["red", "blue", "green", "yellow", "purple", "orange", "pink", "brown", "gray", "black"];

// for (let i = 0; i < 100; i++) {
//   const block = document.createElement("div");
//   block.classList.add("block");
//   block.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
//   block.style.left = `${Math.random() * 100}%`;
//   block.style.top = `${Math.random() * 100}%`;
//   container.appendChild(block);
// }


//////////////////////////////////
const body = document.querySelector("body");

for (let i = 0; i < 100; i++) {
  const block = document.createElement("div");
  block.style.width = "50px";
  block.style.height = "50px";
  block.style.backgroundColor = getRandomColor();
  block.style.position = "absolute";
  block.style.left = getRandomPos() + "px";
  block.style.top = getRandomPos() + "px";
  
  body.appendChild(block);
}

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function getRandomPos() {
  return Math.floor(Math.random() * (window.innerWidth - 50));
}



