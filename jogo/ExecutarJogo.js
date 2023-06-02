//imagem de fundo

function executarJogo(){
    background(imgCAMPO);
  chico.mova();

  //ciclo do movimento das frutas

  for (let i = 0; i < frutas.length; i++) {
    frutas[i].mova();
    if (frutas[i].posY > 450) {
      frutas[i] = new Frutas(frutas[i].posX);
    }

    //código para as frutas serem coletadas

    if (
      chico.xInicial < frutas[i].xFinal &&
      chico.xFinal > frutas[i].xInicial &&
      chico.yInicial < frutas[i].yFinal &&
      chico.yFinal > frutas[i].yInicial
    ) {
      //perder pontuação
      if (frutas[i].imagem == imgFrutas[3]) {
        

        //som de explosão
        frutas[i] = new Frutas();
        som_explosao.play();

        vidas -= 1;
        if (vidas == 0){
          pontos = 0;
        controleTela = "gameover"
        }
      }
      //aumentar pontuação
      else {
        pontos += 1;
        frutas[i] = new Frutas();
        
        //som de moedinha
        som.play();
      }
    }

  

  }
  //texto de pontuação -> tamanho, localização e mudança
  textSize(15);
  text("PONTUAÇÃO: " + pontos, 30, 40);

  textSize(15);
  text("VIDAS: " + vidas, 30, 70);
}