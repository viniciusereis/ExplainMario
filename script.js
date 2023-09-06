const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = () => {
mario.classList.add('jump'); //Adicionando a classe de pulo

//Recebe uma função e um tempo
//Irá remover a classe jump quando a animação termina e volta a executar no keydown.
setTimeout(() => {

  mario.classList.remove('jump');

}, 500); 
}


const loop = setInterval(() => {

  const pipePosition = pipe.offsetLeft; //Posição do tubo e o deslocamento esquerdo
  const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', ''); //vai pegar o stylo que está na imagem do mario, e pega a propriedade que está aplicada ao mario
  
  if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
    
    pipe.style.animation = 'none';
    pipe.style.left = `${pipePosition}px`; //quando o tubo encostar no mario acaba o jogo

    mario.style.animation = 'none';
    mario.style.bottom = `${marioPosition}px`; //Se o mário encostar no tubo, permanece onde encostou

    mario.src='Imagens/game-over.png';
    mario.style.width = '75px';
    mario.style.marginLeft = '50px';

    clearInterval(loop); //Quando acabar o jogo não ficar rodando o loop no console

  }
}, 10);

document.addEventListener('keydown', jump);