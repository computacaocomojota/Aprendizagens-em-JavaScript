//código do ator
let xAtor = 85;
let yAtor = 370;
let colisao = false;
let meusPontos = 0;
function mostraAtor(){
  image(imagemDoAtor,xAtor,yAtor,30,30);
}

function movimentaAtor(){
  if(keyIsDown(UP_ARROW)){
    yAtor-=3;
  }
  if(keyIsDown(DOWN_ARROW)){
    if(podeSeMover()){
       yAtor+=3; 
    }
      
  }
  
}
function verificaColisao(){
  //collideRectCircle(200, 200, 100, 150, mouseX, mouseY, 100);
  for(let i=0;i<imagemCarros.length;i++){
    colisao = collideRectCircle(xCarros[i],yCarros[i],comprimentoCarro,alturaCarro,xAtor,yAtor,15);
    if(colisao){
      somDaColisao.play();
      voltarAtorParaPosicaoInicial();
      if(pontosMaiorQueZero()){
        meusPontos-=1;
      }
    }
  }
}

function voltarAtorParaPosicaoInicial(){
   yAtor = 370;
}

function incluiPontos(){
  textAlign(CENTER);
  textSize(20);
  fill(color(255,240,60));
  text(meusPontos,100,27);
}

function marcaPonto(){
  
  if(yAtor<15){
    meusPontos+=1
    somDoPonto.play();
    voltarAtorParaPosicaoInicial();
  } 
}

function pontosMaiorQueZero(){
  return meusPontos > 0;
}

function podeSeMover(){
  return yAtor<370;
}