//classe das frutas
//velocidade das frutas, posições,definição do aleatório

class Frutas {
    constructor() {
      this.imagem = imgFrutas[int(random(0, 3.9))];
      this.posY = 1;
      this.posX = random(10, 500);
      this.velocidade = random(1, 5 + pontos);
      this.largura = 60;
      this.altura = 60;
  
      this.yInicial = this.posY;
      this.yFinal = this.posY + this.altura;
      this.xInicial = this.posX;
      this.xFinal = this.posX + this.largura;
  
      //movimento das frutas
    }
    mova() {
      this.posY += this.velocidade;
      image(this.imagem, this.posX, this.posY, this.largura, this.altura);
      this.yInicial = this.posY;
      this.yFinal = this.posY + this.altura;
      this.xInicial = this.posX;
      this.xFinal = this.posX + this.largura;
    }
  }