/**Mi primera librebría */
//Una clase en así sola en un archivo js, se llama librería

class Sword{
    #Direccion;//Propiedad privada
    #ActualImg;
    /*Sólo una velocidad porque esta le sumaremos o restaremos para X o Y*/
    constructor(PosX, PosY, Vel){
        this.PosicionX = PosX;
        this.PosicionY = PosY;
        this.Velocidad = Vel;
        this.#Direccion = Math.floor((Math.random()*8)); /*1-3 */
        this.#ActualImg = "";//Validar colisiones y bordes
        this.imgs = [
            "assets/imgEspada/sword0.png",
            "assets/imgEspada/sword1.png",
            "assets/imgEspada/sword2.png",
            "assets/imgEspada/sword3.png",
            "assets/imgEspada/sword4.png",
            "assets/imgEspada/sword5.png",
            "assets/imgEspada/sword6.png",
            "assets/imgEspada/sword7.png"
        ]
        this.imgsWithSrc = this.imgs.map((link)=>{
            let img = new Image();
            img.src = link;
            return img;
        });
    }
    Avanzar(anchoContenedor, alturaContenedor){
        //Evitar cambios drasticos, cada 10 numeros aleatorios.
        if(Math.floor(Math.random()*10) == 1){
            this.#CambiarDireccion();
        }  

        //Condiciones dependiento la mirada del fantasma
        if(this.#Direccion == 0){
            this.PosicionY-= this.Velocidad;
        }//Avanza arriba

        if(this.#Direccion == 1){
            this.PosicionX+= this.Velocidad/2;
            this.PosicionY-= this.Velocidad/2;
        }//Avanza derecha-arriba

        if(this.#Direccion == 2){
            this.PosicionX+= this.Velocidad;
        }//Avanza derecha

        if(this.#Direccion == 3){
            this.PosicionX+= this.Velocidad/2;
            this.PosicionY+= this.Velocidad/2;
        }//Avanza derecha-abajo

        if(this.#Direccion == 4){
            this.PosicionY+= this.Velocidad;
        }//Avanza abajo

        if(this.#Direccion == 5){
            this.PosicionX-= this.Velocidad/2;
            this.PosicionY+= this.Velocidad/2;
        }//Avanza izquierda-abajo

        if(this.#Direccion == 6){
            this.PosicionX-= this.Velocidad;
        }//Avanza izquierda

        if(this.#Direccion == 7){
            this.PosicionX-= this.Velocidad/2;
            this.PosicionY-= this.Velocidad/2;
        }//Avanza izquierda-arriba

        //Validar los bordes el canva
        if(this.PosicionX> anchoContenedor - this.#ActualImg.width){
            this.PosicionX =  anchoContenedor - this.#ActualImg.width;
        }

        if(this.PosicionX < 0){
            this.PosicionX = 0 ;
        }

        if(this.PosicionY> alturaContenedor - this.#ActualImg.height){
            this.PosicionY = alturaContenedor - this.#ActualImg.height;
        }

        if(this.PosicionY< 0){
            this.PosicionY = 0; 
        }
    }

    Dibujar(ctx){

        if(this.#Direccion == 0){
            ctx.drawImage(this.imgsWithSrc[0], this.PosicionX, this.PosicionY);
            this.#ActualImg = this.imgsWithSrc[0];//Variable para validar bordes
        }//Mirada arriba

        if(this.#Direccion == 1){
            ctx.drawImage(this.imgsWithSrc[1], this.PosicionX, this.PosicionY);
            this.#ActualImg = this.imgsWithSrc[1];//Variable para validar bordes
        }//Mirada derecha-arriba

        if(this.#Direccion == 2){
            ctx.drawImage(this.imgsWithSrc[2], this.PosicionX, this.PosicionY);
            this.#ActualImg = this.imgsWithSrc[2];//Variable para validar bordes
        }//Mirada derecha

        if(this.#Direccion == 3){
            ctx.drawImage(this.imgsWithSrc[3], this.PosicionX, this.PosicionY);
            this.#ActualImg = this.imgsWithSrc[3];//Variable para validar bordes
        }//Mirada derecha-abajo
        if(this.#Direccion == 4){
            ctx.drawImage(this.imgsWithSrc[4], this.PosicionX, this.PosicionY);
            this.#ActualImg = this.imgsWithSrc[4];//Variable para validar bordes
        }//Mirada abajo

        if(this.#Direccion == 5){
            ctx.drawImage(this.imgsWithSrc[5], this.PosicionX, this.PosicionY);
            this.#ActualImg = this.imgsWithSrc[5];//Variable para validar bordes
        }//Mirada izquierda-abajo

        if(this.#Direccion == 6){
            ctx.drawImage(this.imgsWithSrc[6], this.PosicionX, this.PosicionY);
            this.#ActualImg = this.imgsWithSrc[6];//Variable para validar bordes
        }//Mirada izquierda

        if(this.#Direccion == 7){
            ctx.drawImage(this.imgsWithSrc[7], this.PosicionX, this.PosicionY);
            this.#ActualImg = this.imgsWithSrc[7];//Variable para validar bordes
        }//Mirada izquierda-arriba
    }

    #CambiarDireccion(){
        //0-7
        this.#Direccion = Math.floor(Math.random()*8)
    }
    //Obtener propiedad privada
    get getActualImg(){
        return this.#ActualImg;
    }
    set setDireccion(dir){
        this.#Direccion = dir;
    }
    get getDireccion(){
        return this.#Direccion;
    }
}