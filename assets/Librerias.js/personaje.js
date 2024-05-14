class Character{
    #count
    constructor(setSrc){
        this.array = setSrc;
        this.imageN = [];
        this.imageW = [];
        this.imageA = [];
        this.imageS = [];
        this.imageD = [];
        this.currentImg = "";
        this.#count = 0;
        this.#doSet();
    }
    pintaLados(ctx, posX, posY, moveX, moveY){
        this.#counttemp();
        if(moveX == 0 && moveY == 0){
        ctx.drawImage(this.imageN[0] ,posX, posY);
        this.currentImg = this.imageN[0];
        }else{
            if(moveX<0){
                let selectA = this.#selectPh(this.imageA);
                ctx.drawImage(selectA, posX, posY);
                this.currentImg = this.imageA[0];
            }
            if(moveX>0){
                let selectD = this.#selectPh(this.imageD);
                ctx.drawImage(selectD, posX, posY);
                this.currentImg = this.imageD[0];

            }
            if(moveY<0){
                let selectW = this.#selectPh(this.imageW);
                ctx.drawImage(selectW, posX, posY);
                this.currentImg = this.imageW[0];
            }
            if(moveY>0){
                let selectS = this.#selectPh(this.imageS);
                ctx.drawImage(selectS, posX, posY);
                this.currentImg = this.imageS[0];
            }
        }
    }
    #counttemp(){
        if(this.#count === 6){
            this.#count = 0;
        }else{
            this.#count++;
        }
    }
    #selectPh(array){
        return array[this.#count]
    }

    #doSet(){
            this.array.filter((link)=>{
            let img = new Image();
            img.src = link;
            if(img.src.includes("N")){
                this.imageN.push(img);
            }
            if(img.src.includes("W")){
                this.imageW.push(img);
            }
            if(img.src.includes("A")){
                this.imageA.push(img);
            }
            if(img.src.includes("S")){
                this.imageS.push(img);
            }
            if(img.src.includes("D")){
                this.imageD.push(img);
            }
        })
    }
}