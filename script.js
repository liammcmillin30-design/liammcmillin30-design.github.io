function setup() {
  createCanvas(worldSize, worldSize);
}

let worldSize=400;
let startX=0;
let xStep=15;
let w=10

  function draw() {
    
let mx = map(mouseX, 0, width, 0, worldSize);
let my = map(mouseY, 0, height, 0, worldSize);

if (key === "r"){
  fill("red")
}
if (key === "o"){
  fill("orange")
}
if (key === "y"){
  fill("yellow")
}
if (key === "g"){
  fill("green")
}
if (key === "b"){
  fill("blue")
}
if (key === "i"){
  fill("indigo")
}
if (key === "v"){
  fill("violet")
}
if (key === "w"){
  fill("white")
 }
if (key === "/"){
  fill("black")
 }
if (key === "c"){
  background(worldSize)
 }
if (key === "1"){
  w=10
}
if (key === "2"){
  w=20
}
if (key === "3"){
  w=30
}
if (key === "4"){
  w=40
}
if (key === "5"){
  w=50
}
if (key === "6"){
  w=60
}
if (key === "7"){
  w=70
}
if (key === "8"){
  w=80
}
if (key === "9"){
  w=90
}
if (key === "0"){
  w=worldSize
}

for (let i=0; i< worldSize/15; i=i+2) {
  let x=startX+xStep*i
    circle(x,worldSize,30)
    circle(worldSize,x,30)
    circle(0,x,30)
    circle(x,0,30)
}
if (mouseIsPressed||key === ' '){
  circle(mx,my,w);
  }
}