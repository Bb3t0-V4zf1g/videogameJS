/**Mi primera librebría */
//Una clase en así sola en un archivo js, se llama librería

class Coin{
    #ActualImg;
    #change;
    #points;
    constructor(widthCont, heightCont){
        this.IncrementoX = Math.floor(Math.random()*21)+10;
        this.IncrementoY = Math.floor(Math.random()*21)+10;
        this.#ActualImg = "";//Validar colisiones y bordes
        this.imgs = [
            "assets/imgMoneda/coin1.png",
            "assets/imgMoneda/coin3.png",
            "assets/imgMoneda/coin2.png",
            "assets/imgMoneda/coin4.png",
            "assets/imgMoneda/coin5.png",
            "assets/imgMoneda/coin6.png",
            "assets/imgMoneda/coin7.png",
            "assets/imgMoneda/coin8.png",
            "assets/imgMoneda/coin9.png"
        ];//Lista de src para la creacion de imagenes
        this.imgsWithSrc = this.imgs.map((link)=>{
            let img = new Image();
            img.src = link;
            return img;
        });//Crear un array de imagenes con el objeto Image y añadiendo el valor al atributo src
        //Posiciones aleatorias dentro del contenedor
        this.PosicionX = Math.floor(Math.random()*(widthCont-this.imgsWithSrc[0].width));
        this.PosicionY = Math.floor(Math.random()*(heightCont-this.imgsWithSrc[0].height));
        this.#change = 0;
        this.#points = (this.IncrementoX + this.IncrementoY)/2;
        //Depende de la velocidad, vale mas
    }
    Avanzar(anchoContenedor, alturaContenedor){
        this.PosicionX += this.IncrementoX;
        this.PosicionY += this.IncrementoY;
        //Validar los bordes el canva
        if(this.PosicionX> anchoContenedor - this.#ActualImg.width){
            this.IncrementoX = -Math.abs(this.IncrementoX);
        }

        if(this.PosicionX < 0){
            this.IncrementoX = Math.abs(this.IncrementoX);
        }

        if(this.PosicionY> alturaContenedor - this.#ActualImg.height){
            this.IncrementoY = -Math.abs(this.IncrementoY);
        }

        if(this.PosicionY < 0){
            this.IncrementoY = Math.abs(this.IncrementoY);
        }
    }
    Dibujar(ctx){
        if(this.#change == 9){
            this.#change = 0;
        }
        ctx.drawImage(this.imgsWithSrc[this.#change], this.PosicionX, this.PosicionY);
        this.#ActualImg = this.imgsWithSrc[this.#change];   
        this.#change++;
    }
    //Obtener propiedad privada
    get getActualImg(){
        return this.#ActualImg;
    }
    //Obtener la propiedad de puntos para usar set
    get getPoints(){
        return this.#points;
    }
    //Sumar puntos obenidos
    set setPoint(point){
        this.#points = point;
    }
}