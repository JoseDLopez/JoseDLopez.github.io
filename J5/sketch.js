// 2016 07 23
// Nuestro primer archivo en P5.

// El setup es el area donde se configura. Corre una sola vez y solo al inicio

//Apuntes de color:
//Por defecto, funciona con RGB y 8 bits, es decir que va de 0 a 255.
//El color se puede indicar de 4 maneras:
// 1) 1 Si es numero quiere decir que se hace en escala de grises donde, 0 es negro y 255 es blanco
// 2) Escala de grises + alpha, donde 0 es transparente y 255 es opaco.
// 3) 3 quiere decir que se esta declarando en RGB es decir, a,b,c
// 4) Quiere decir que es RGB + alpha (0,255,0,120)


//Variables:
// Son espacios en la memoria del computador donde se almacenan datos.
//1) Se debe declarar la variable.
//Se declara de la siguiente manera: var x;
//Luego de declararla se le pueden asignar valores.
//Es dinamico, puede ser cualquier tipo de variable.



var ejemplo; //Declaracion de la variable
ejemplo= 0; //Asignacion de valor a la variable

//Creamos una variable para que guarde el diametro
//var diametro;
var diametro;
// agregamos valor a diametro
diametro=600;

var masomenos=1;

var diametro_mouse = 20;


//Existen variables globales y locales
//Las variables globales son declaradas fuera de una funcion.
//Las variables locales son la0s declaradas dentro de una funcion.

//Las variables globales pueden ser usadas donde queramos.
//Las variables locales solo pueden ser usadas dentro de la funcion donde viven.

//FUNCIONES
//Se declaran una sola vez
//Se declaran antes del Setup
//Creando la funcion
function NombreFuncion(){
  
}




function setup() {
  //Creamos una variable X
  var x = 20;
  
  // Creamos un lienzo
  // Para crear un lienzo debemos usar la siguiente funcion: createCanvas(hor,ver); Los numeros que incluyes dentro del parentesis en pixeles.
  createCanvas(800, 600);
  //si quiero que sea del tamaño de la ventana
  //createCanvas(windowWudth, windowHeight)
  
  //Vamos a pintar este lienzo de Verde
  //El comando es background(color);
  background(25,55,255,255); //En este caso estamos pintando el fondo de azul, y con una transparencia de 100

}
// Draw se ejecuta infinitamente a 60 veces por segundo. (Es la velocidad maxima)
function draw() {
  
  miElipse();
  
  miTriangulo();
  
  //muchasElipses();
    
  //ellipse(20,40,100,100);
  //background(25,55,255,255);
  //ellipse(mouseX,mouseY,20,20);

  
  //Con esto hacemos que el rectangulo tome la posicion del mouse:
  //rect(mouseX,mouseY,45,100);
  rect(mouseX,mouseY,diametro_mouse,diametro_mouse);
  
  //triangle(x1,y1,x2,y2,x3,y3)
  triangle(800, 600, 58, 20, 86, 75);  
  
  //Aumentamos el diametro en 1
  //diametro=diametro + 0.1;
  //diametro_mouse += 0.05;
  
  //console.log(x); imprime en la consola el valor de x
  console.log(diametro_mouse);


  
 // while (ejemplo<1000000){
 if (masomenos==1){
     diametro=diametro + 10;
   diametro_mouse += 0.05; 
   if (diametro>800){
     masomenos=0;
   }
 }
 
  if (masomenos==0){
     diametro=diametro - 10;
   diametro_mouse -= 0.05; 
      if (diametro<1){
     masomenos=1;
   }
 }
ejemplo+=0.1;

//if (ejemplo > 10000000){
  //ejemplo=0;
  //if (masomenos=1){
    //masomenos=0;
    //else
    //masomenos=1;
  //}
//}
  //}
   // ejemplo=1;
   // while (ejemplo<1000000){
   // diametro=diametro - 0.01;
   // diametro_mouse -= 0.05;  
    //ejemplo+=1;
  //}


}

//Declaramos la funcion del mouse
function mouseClicked() {
  if (masomenos == 0) {
    masomenos = 1;
  } else {
    masomenos = 0;
  }
}


//Declarar funcion estiloVictoriano
function estiloVictoriano(){
  //Definiremos el ancho de la figura en px
  //strokeWeight(px);
  strokeWeight(3);
  
  //Definiremos el color del Borde.
  //stroke(color);
  stroke(140,250,50);
  
  //Definir el color del relleno
  //fill(color);
  fill(100,100,100,255);
}

function estiloRuso(){
    //Definiremos el ancho de la figura en px
  //strokeWeight(px);
  strokeWeight(3);
  
  //Definiremos el color del Borde.
  //stroke(color);
  stroke(140,250,50);
  
  //Definir el color del relleno
  //fill(color);
  fill(100,100,20,255);
}


function miElipse(){
    //Llamamos la funcion estilo Victoriano
  estiloVictoriano();
  
  //Aqui vamos a dibujar una elipse en las coordenadas 250, 340
  //ellipse(pos,posy,width,height);
  //ellipse(400,300,diametro,diametro);
    //ellipse(pos,posy,width,height);
  ellipse(400,300,diametro,diametro);
  
}

function miTriangulo(){
    //Llamamos la funcion estilo Ruso
  estiloRuso();
  
  //Aqui dibujaremos un triangulo
  //triangle(x1,y1,x2,y2,x3,y3)
  triangle(400, 300, 58, 20, 86, 75);  
  
}


//demostraremos la iteracion
function muchasElipses(){
  
  //Iteracion
  //Iteraremos a traves de un FOR:
  //for(inicio;fin;refrescate){};
  for(var i =0;i<200;i+=1){
  //Elipse se dibuje en una posicion aleatoria del cambas
  noStroke();
  fill(random(255),random(255),random(255),random(255));
  ellipse(random(width),random(height),random(20),random(100)); 
    
  }
  
  

}
