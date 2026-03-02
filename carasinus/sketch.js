function setup() {
  createCanvas(600,400);//Tamany de l'àrea de dibuix
  //El primer número es l'amplada en pixels i el segon número es l'alçada en pixels.
}

function draw() {
  let sinus=sin(frameCount*0.01)*45;
  //sinus es una variable, es un nom que conte numeros que canvien.
  //es a dir una variable numèrica on guardem numeros que provenen 
  //de la funció sinus que genera númers entre -1 i +1.
  // si els numeros de -1 i +1 es transformem en numeros entre-20 i +20, no seràn aleatoris sino que aniràn augmentant i disminuint sempre. Aquesta variable la pus sumar, multiplicar, dividir, o canviar en qualsevol parametre de les funcions següents.
  background(156+sinus, 109+sinus, 242+sinus);//Color del fons del dibuix.
  //El primer numero es el nivell de vermell"r", el segon número es el nivellde verd"g" i el tercer es l'intencitat de blau"B" per tant color RGB en html. Dintre de backgroud o fons.
  fill(255,246,229)//Color de la cara exterior
  //En el cas del fill serà al mateix pero el que fa es omplir de color la figura següent que son dos ellipses.
  ellipse(300+sinus,200+sinus,210-sinus,250-sinus);//Forma de la cara exterior
  //El primer número es la posició x del centre de l'ellipse desde la cantonada superior esquerra que es al "0,0", el segon número es la posició y" o l'alçada del centre de l'ellipsei el tercer numero es l'amplada de ellipse. El quart número  
  fill(255+sinus,250-sinus,250*sinus);//Color blanc dels ulls
 ellipse(265+sinus,160+sinus,30-sinus,25-sinus);//Formade l'ull dret perque x=160
 fill(0,0,0)
  ellipse(265+sinus,160+sinus,15-sinus,13-sinus)
 fill(255, 255, 255)
  ellipse(337+sinus,160+sinus,30-sinus,25-sinus);//Forma de l'ull esquerra perquè x=350
  fill(0,0,0)
  ellipse(337+sinus,160+sinus,15-sinus,13-sinus)
 fill(255,110,110);//Color de la boca
arc(300+sinus,240+sinus,90+sinus,50+sinus,0,PI);//Forma de la boca
}
