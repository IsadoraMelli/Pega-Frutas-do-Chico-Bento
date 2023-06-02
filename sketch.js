//variaveis

var imgCAMPO;
var chico;
var frutas = [];
var imgFrutas = [];
var pontos = 0;
var som;
var jogador;
var imgAbertura;
var controleTela = "INICIO";
var vidas = 3;

//bordas do fundo

function setup() {
  createCanvas(600, 400).parent("jogo");
}
//carregar imagens e suas definições

function preload() {
  imgCAMPO = loadImage("jogo/imgJogo/CAMPOOO.jpg");
  imgCHICO = loadImage("jogo/imgJogo/CHICO.png");
  imgFrutas[0] = loadImage("jogo/imgJogo/GOIABA.png");
  imgFrutas[1] = loadImage("jogo/imgJogo//MACA.png");
  imgFrutas[2] = loadImage("jogo/imgJogo/PERA.png");
  imgFrutas[3] = loadImage("jogo/imgJogo/BOMBA.png");
  som_explosao = loadSound("jogo/SOM/bombasom.mp3");
  som = loadSound("jogo/SOM/somo.mp3");
  chico = new Chico();
  frutas[0] = new Frutas();
  frutas[1] = new Frutas();
  frutas[2] = new Frutas();
  imgAbertura = loadImage("jogo/imgJogo/inicio.png");
  imgFinal = loadImage("jogo/imgJogo/gameover.png");
}


function keyPressed(){
  if(keyCode==32){
    controleTela = "JOGO"
  }
}

function draw() {
   if(controleTela == "INICIO"){
    mostraAbertura();
   }
else{
  if(controleTela == "JOGO"){
    executarJogo();
  }
  if
  (
    controleTela=="gameover"){
    background(imgFinal)
    vidas = 3
  }

}
}

