//Activar eventos
window.onkeydown = keyPress;
window.onkeyup = keyUnpress;

//Obtener canva
var canvas = document.getElementById('pizarron');
//Indicar dimenciones
var ctx = canvas.getContext('2d');

//Cargar personaje;
//Imagenes para animacion personaje
let array =["assets/imgPersonaje/zeldaN.png", "assets/imgPersonaje/zeldaS1.png", "assets/imgPersonaje/zeldaS2.png",  "assets/imgPersonaje/zeldaS3.png",  "assets/imgPersonaje/zeldaS4.png",  "assets/imgPersonaje/zeldaS1.1.png", "assets/imgPersonaje/zeldaS2.1.png", "assets/imgPersonaje/zeldaS3.1.png", "assets/imgPersonaje/zeldaW1.png", "assets/imgPersonaje/zeldaW2.png",  "assets/imgPersonaje/zeldaW3.png",  "assets/imgPersonaje/zeldaW4.png",  "assets/imgPersonaje/zeldaW1.1.png", "assets/imgPersonaje/zeldaW2.1.png", "assets/imgPersonaje/zeldaW3.1.png", "assets/imgPersonaje/zeldaA1.png", "assets/imgPersonaje/zeldaA2.png",  "assets/imgPersonaje/zeldaA3.png",  "assets/imgPersonaje/zeldaA4.png",  "assets/imgPersonaje/zeldaA1.1.png", "assets/imgPersonaje/zeldaA2.1.png", "assets/imgPersonaje/zeldaA3.1.png", "assets/imgPersonaje/zeldaD1.png", "assets/imgPersonaje/zeldaD2.png",  "assets/imgPersonaje/zeldaD3.png",  "assets/imgPersonaje/zeldaD4.png",  "assets/imgPersonaje/zeldaD1.1.png", "assets/imgPersonaje/zeldaD2.1.png", "assets/imgPersonaje/zeldaD3.1.png"]
const personaje = new Character(array, 500);

//Cargar espada
const espada1 = new Sword(600,200, 10);
//Cargar moneda
const moneda1 = new Coin(canvas.width, canvas.height);
;

function inicio(){
        // let startCount = setInterval(()=>{
        //     setTimeout(console.log(1))}
        //     ,1000);
        let startGame = setInterval(animacion,30);
}

//Variables globales fuera del intervalo porque si no se reinician.
let posX = 0;//PosX de la imagen
let posY = 0;//Pos Y de la imagen
let moveX = 0;//Incremento X
let moveY = 0;//Incremento Y

function animacion() {
    posX+=moveX;
    posY+=moveY;
    // Limpieza del canvas y otras modificaciones
    ctx.clearRect(0,0, canvas.width, canvas.height);

    //Mover espada
    espada1.Avanzar(canvas.width, canvas.height);

    //Mover momeda
    moneda1.Avanzar(canvas.width, canvas.height);

    let colorFS;

    // Lógica de colisiones y validaciones
    toMove(canvas.width, canvas.height);

    //Colision con moneda, gana vida
    if(colision2(personaje, posX, posY, moneda1)){
        console.log("vida");
        console.log(moneda1.getPoints);
        personaje.winLife(moneda1.getPoints);
        colorFS = "green";
        console.log(`Recuperacion, ahora tengo: ${personaje.currentLife}`);
    }else{
        colorFS ="#000";
    }
    //Colision con espada, pierde vida
    if(colision2(personaje, posX, posY, espada1)){
        console.log("daño");
        personaje.loseLife(20);
        colorFS = "red";
        console.log(`Daño, ahora tengo: ${personaje.currentLife}`);
    }else{
        colorFS = "#000";
    }


    // Pintar el canvas
    canvas.style.background = colorFS;
    //Pintar personaje
    personaje.pintaLados(ctx, posX, posY,moveX, moveY);

    //Pintar espada
    espada1.Dibujar(ctx);

    //Pintar moneda
    moneda1.Dibujar(ctx);
}

//tecla presionada
function keyPress(event){
let key = event.key;

switch(key){
    case "w":
    moveY = -5;
    break;
    case "d":
    moveX = 5;
    break;
    case "a":
    moveX = -5;

    break;
    case "s":
    moveY = 5;
    break;
    case "q":
    moveY = -4;
    moveX = -4;
    break;
    case "e":
    moveY = -4;
    moveX = 4;
    break;
}
}

//tecla unpresh
function keyUnpress(event){
    console.log(event.key);
    let key = event.key;
    switch (key) {
        case "w":
        case "s":
            moveY = 0;
            break;
        case "a":
        case "d":
            moveX = 0;
            break;
        case "q":
        case "e":
            moveY = 0;
            moveX = 0;
            break;
    }
}

function toMove(ancho, alto){
//Sumar o restarle el incremento
posX += moveX;
posY += moveY;
// se le resta el ancho y alto del personaje porque es un cuadrado y sólo toma por defecto la referencia de la esquina superior izquierda.
if (posX > ancho - personaje.currentImg.width) {
    posX = ancho- personaje.currentImg.width ;
}
if( posX < 0){
    posX = 0;
}
if (posY > alto - personaje.currentImg.height) {
    posY = alto- personaje.currentImg.height;
}
if( posY < 0){
    posY = 0;
}
}

/////detectar colision con una accion
function colision(obj1, obj1PX, obj1PY, obj2){
    if(obj1PX < obj2.posX + obj2.imagen.width &&
    obj1PX + obj1.currentImg.width > obj2.posX &&
    obj1PY < obj2.posY +  obj2.imagen.height &&
    obj1PY + obj1.currentImg.height > obj2.posY
    ){
        return true;
    }else{
        return false;
    }
}

//Funcion derectar colision
function colision2(obj1, obj1PX, obj1PY, obj2){
    let imgObj2 = obj2.getActualImg;
    if(obj1PX < obj2.PosicionX + imgObj2.width &&
    obj1PX + obj1.currentImg.width > obj2.PosicionX && obj1PY < obj2.PosicionY +  imgObj2.height &&
    obj1PY + obj1.currentImg.height > obj2.PosicionY
    ){
        return true;
    }else{
        return false;
    }
}
// function colision2(obj1, obj2){
//     let imgObj2 = obj2.getActualImg;
//     if(obj1.PosicionX < obj2.PosicionX + imgObj2.width &&
//     obj1.PosicionX + imgObj1.width > obj2.PosicionX && obj1.PosicionY < obj2.PosicionY +  imgObj2.height &&
//     obj1.PosicionY + imgObj1.height > obj2.PosicionY
//     ){
//         return true;
//     }else{
//         return false;
//     }
// }
