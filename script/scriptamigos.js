let contatenas = 0;
const atenasimagem = document.getElementById('atenas');
atenasimagem.addEventListener('click', () => {
    contatenas ++;
    if(contatenas === 3){
    atenasimagem.src = "imgs/atenassecret.png";
}
    else if (contatenas > 3){
        atenasimagem.src = "imgs/atenas.png";
        contatenas = 0;
    }
})
function fazerAparecer() {
  atenasimagem.classList.add('imagem-escondida');
}
if(contatenas === 3){
    atenasimagem.src = "imgs/atenassecret.png";
}