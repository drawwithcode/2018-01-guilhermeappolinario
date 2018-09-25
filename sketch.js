  function preload(){
  // put preload code here
}

function setup() {
  // put setup ccode here
  createCanvas(1280,720);
}

function draw() {
  // put drawing
  background(0,0,0)
  // Neck

  stroke(255,255,255)
  line(580+pmouseX/16,pmouseY/16+340,pmouseX,pmouseY+20)

  stroke(255,255,255)
  line(600+pmouseX/16,pmouseY/16+340,pmouseX,pmouseY+20)

  stroke(255,255,255)
  line(620+pmouseX/16,pmouseY/16+340,pmouseX,pmouseY+20)
   // Antennas

   // Body
      noStroke();
      fill(192);
      arc(600+pmouseX/16, pmouseY/16+100+400, 280, 280, PI, TWO_PI);

      rectMode(CENTER);
      fill(200);
      rect(600+pmouseX/16,pmouseY/16+100+340,120,200,20);

      fill(255);
      rect(600+pmouseX/16,pmouseY/16+100+340,100,180,12);


   // Head
      // antennas
      stroke(255,255,255)
      line(pmouseX-0,pmouseY-100,pmouseX-0,pmouseY-10)

      fill(255,255,255)
      ellipse(pmouseX-0,pmouseY-80,12)

      fill(180)
      ellipse(pmouseX-0,pmouseY-80,6)

      // head wings
      noStroke();
      arc(pmouseX-0,pmouseY+20,200, 50, PI, TWO_PI);

      // white circle
      noStroke();
      fill(255,255,255)
      ellipse(pmouseX-0,pmouseY+0,100)
      // eye
      fill(128,128,128)
      ellipse(pmouseX-25,pmouseY,25)

      fill(128,128,128)
      ellipse(pmouseX+25,pmouseY,25)
      // pupils
      fill(40,40,40)
      ellipse(pmouseX-25,pmouseY,5)

      fill(40,40,40)
      ellipse(pmouseX+25,pmouseY,5)

}
