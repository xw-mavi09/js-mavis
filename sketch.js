function setup(){
    createCanvas(600, 600);
}

function draw(){
    stroke("blue");
    FileList("red");


  if(mouseIsPressed){
    Reflect(mouseX, mouseY, 20, 35);
  }

}