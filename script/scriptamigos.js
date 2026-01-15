// imagens
const atenasimagem = document.getElementById('atenasfoto');
const inforimagem = document.getElementById('inforimg');
const beneimagem = document.getElementById("fidobene");
const ivensimagem = document.getElementById("ivis")
const dafnyimagem = document.getElementById('dafene')
const guiimagem = document.getElementById("guizin")
const duardaimagem = document.getElementById("eduarda")
const josueimagem = document.getElementById("josue")
const yuriimagem = document.getElementById("yure")
// dict com os codes
const codigos = {
        ATENAS: {
            img: atenasimagem,
            src: 'imgs/atenassecret.jpeg'
        },
        HELENAEJOSE: {
            img: inforimagem,
            src: 'imgs/teatroinfor.png'
        },
        FIDOBENE: {
            img: beneimagem,
            src: 'imgs/benekids.jpg'
        },
        APENASUMBOMCURIOSO: {
            img: ivensimagem,
            src: 'imgs/bomcurioso.jpg'
        },
        BACTERIA: {
            img: dafnyimagem,
            src: 'https://i.pinimg.com/736x/d7/2a/ea/d72aeafcc65e9b7f2e25cc9db5184c74.jpg'
        },
        GATO: {
            img: guiimagem,
            src: 'imgs/guiabrido.png'
        },
        STICKYFINGERS: {
            img: duardaimagem,
            src: 'imgs/duardastand.png'
        },
        RAÇA: {
            img: josueimagem,
            src: 'imgs/jotinhaburro.jpg'
        },
        CAVACO: {
            img: yuriimagem,
            src: 'imgs/yuritrenando.png'
        }
};


const inputcodigo = document.getElementById('codigo-input');
const redeem = document.getElementById("botaoredeem");
let tentativa_code = '';

redeem.addEventListener('click', () => {
    tentativa_code = inputcodigo.value.toUpperCase();
    if (!(tentativa_code in codigos)){
        inputcodigo.value = 'Código inválido.';
        // o que ele deve fazer e depois de quanto tempo
        setTimeout(() => {
            inputcodigo.value = '';
        }, 1000);
    }
    else{
        //pega qual imagem vai ser alterada de acordo com o codigo e usa a src que vai ser mudada.
        const img = codigos[tentativa_code].img;
        const src = codigos[tentativa_code].src;
        img.src = src;
        inputcodigo.value = 'Algo mudou no site...';
        setTimeout(() => {
            inputcodigo.value = '';
        }, 1000);
    }   
});
