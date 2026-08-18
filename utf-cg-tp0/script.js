const meuBotao = document.getElementById('meuBotao');
const botoesAcoes = document.getElementById('botoesAcoes');
const fotoPeril = document.querySelector('.foto');
const btnDance = document.getElementById('btnDance');
const btnWalk = document.getElementById('btnWalk');
const btnClean = document.getElementById('btnClean');
const btnDefault = document.getElementById('btnDefault');

const imagemPadrao = 'img/perfil.jpg';
const imagemEasterEgg = 'img/quebrando.gif';

let botoesVisiveis = false;

let danceClickCount = 0;
let danceClickTimeout;

meuBotao.addEventListener('click', function() {
    botoesVisiveis = !botoesVisiveis;
    
    if (botoesVisiveis) {
        botoesAcoes.classList.remove('escondido');
        meuBotao.textContent = 'Fechar';
        meuBotao.style.backgroundColor = '#0f5658';
    } else {
        botoesAcoes.classList.add('escondido');
        meuBotao.textContent = 'Clique aqui';
        meuBotao.style.backgroundColor = '';
    }
});

//troca a imagem do perfil
function trocarImagem(novaSrc) {
    fotoPeril.src = novaSrc;
}

btnDance.addEventListener('click', function() {
    danceClickCount++;

    clearTimeout(danceClickTimeout);
    
    if (danceClickCount === 1) {
        trocarImagem('img/dance-p.gif');
        
        danceClickTimeout = setTimeout(function() {
            danceClickCount = 0;
        }, 300);
    } else if (danceClickCount === 2) {
        trocarImagem(imagemEasterEgg);
        danceClickCount = 0;
        console.log('🎉 Easter Egg ativado! 🎉');
        alert('🎉 Easter Egg encontrado! 🎉');
    }
});

btnWalk.addEventListener('click', function() {
    trocarImagem('img/walk.gif');
    danceClickCount = 0; 
});

btnClean.addEventListener('click', function() {
    trocarImagem('img/club-penguin-clean.gif');
    danceClickCount = 0; 
});


btnDefault.addEventListener('click', function() {
    trocarImagem(imagemPadrao);
    danceClickCount = 0;
});

document.addEventListener('click', function(e) {
    if (!e.target.closest('.btn-acao')) {
        danceClickCount = 0;
    }
});
