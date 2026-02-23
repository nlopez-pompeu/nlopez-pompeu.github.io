let mic;//Crea una variable pel micròfon
function setup() {
  createCanvas(600,400);//Tamany de l'àrea de dibuix
  //El primer número es l'amplada en pixels i el segon número es l'alçada en pixels.
  mic=new p5.AudioIn();//El micròfon es una entrada de audio amb p5
  mic.start();//Activa el micròfon
}

function draw() {
  let vol=mic.getLevel();
  let h=map(vol,0,1,0,1000);
  background(mouseX-149,mouseY-117, mouseY+30);//Color del fons del dibuix.
  //El primer numero es el nivell de vermell"r", el segon número es el nivellde verd"g" i el tercer es l'intencitat de blau"B" per tant color RGB en html. Dintre de backgroud o fons.
  fill(255,246,229)//Color de la cara exterior
  //mouseX=300;mouseY=200
  //En el cas del fill serà al mateix pero el que fa es omplir de color la figura següent que son dos ellipses.
  ellipse(mouseX,mouseY,200+h,250+h);//Forma de la cara exterior
  //El primer número es la posició x del centre de l'ellipse desde la cantonada superior esquerra que es al "0,0", el segon número es la posició y" o l'alçada del centre de l'ellipsei el tercer numero es l'amplada de ellipse. El quart número  
  fill(255,250,250);//Color blanc dels ulls
  ellipse(mouseX-35,mouseY-40,30,25);//Formade l'ull dret perque x=160
  fill(mouseX-220,110,330)
  ellipse(mouseX-35,mouseY-40,15,13)
  fill(255, 255, 255)
  ellipse(mouseX+37,mouseY-40,30,25);//Forma de l'ull esquerra perquè x=350
  fill(mouseX-220,110,330)
  ellipse(mouseX+37,mouseY-40,15,13)
 fill(255-h*3,0,0);//Color de la boca

  arc(mouseX,mouseY+40,90,50+h,0,PI);//Forma de la boca
  line(mouseX+20,mouseY-70,mouseX+70,mouseY-85)
 line(mouseX-80,mouseY-70,mouseX-30,mouseY-70)
  strokeWeight(-1)
}
