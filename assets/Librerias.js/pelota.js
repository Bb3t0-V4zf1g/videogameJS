/**Mi primera librebría */
//Una clase en así sola en un archivo js, se llama librería

class Pelota{
    /**Las características de cada pelota */
    constructor(arhivopng, posX, posY){
        this.imagen = new Image();
        this.posX = posX;
        this.posY = posY;
        this.incX = Math.floor((Math.random()*31)+10); /*10-30 */
        this.incY = Math.floor((Math.random()*31)+10); /*10-30 */
        this.imagen.src = arhivopng;//SRC
    }
    avanza(anchoContenedor, alturaContenedor){//Para que se mueva la pelota, por ahora es síncrona
        this.posX += this.incX;
        this.posY += this.incY;
        if(this.posX> anchoContenedor - this.imagen.width){
            this.incX = -Math.abs(this.incX);
        }

        if(this.posX < 0){
            this.incX = Math.abs(this.incX);
        }

        if(this.posY> alturaContenedor - this.imagen.height){
            this.incY = -Math.abs(this.incY);
        }

        if(this.posY< 0){
            this.incY = Math.abs(this.incY);
        }
    }

    pinta(ctx){
        ctx.drawImage(this.imagen,this.posX, this.posY);
    }
}