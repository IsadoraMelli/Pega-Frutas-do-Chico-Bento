//classe do jogador principal
//atributos da personagem (posição,altura e largura)

class Chico {
    constructor() {
      this.imagem = loadImage("jogo/imgJogo/CHICO.png");
      this.posX = 270;
      this.posY = 260;
      this.velocidade = 7;
      this.largura = 100;
      this.altura = 130;
      this.yInicial = this.posY;
      this.yFinal = this.posY + this.altura;
      this.xInicial = this.posX;
      this.xFinal = this.posX + this.largura;
    }
  
    //definição dos movimentos
  
    mova() {
      image(this.imagem, this.posX, this.posY, this.largura, this.altura);
  
      if (keyIsDown(39) && this.xFinal < 600) {
        this.posX += this.velocidade;
      }
  
      if (keyIsDown(37) && this.xInicial > 0) {
        this.posX -= this.velocidade;
      }
  
      this.yInicial = this.posY;
      this.yFinal = this.posY + this.altura;
      this.xInicial = this.posX;
      this.xFinal = this.posX + this.largura;
    }
  }