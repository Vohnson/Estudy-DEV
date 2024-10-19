const display = document.getElementById("tela");
let lastResult = false;
let lastError = false;

//Exibe na tela os botões que o usuário apertar. Verifica se não há um resultado anterior ou uma mensagem de erro para então exibir.
function inputDisplay (input) {
    if(lastResult || lastError) {
        display.value = "";
        lastResult = false;
        lastError = false;
    }
    display.value += input;
}
//Limpa a tela ao apertar o botão C.
function cleanDisplay () {
    display.value = "";
}   
//Calcula o valor da operação que está na tela. Caso a operação não for válida ou a sintaxe errada, retorna uma mensagem de erro.
function calculate () {
    try{
        display.value = eval(display.value);
        lastResult = true;
    }
    catch(error){
        display.value = "Erro";
        lastError = true;
    }
}
//abre o popup quando o botão é clicado.
function openPopup() {
    let popup = document.getElementById('popup-temas');
    popup.style.display = 'block';
}
//fecha o popup quando o botão é clicado.
function closePopup() {
    let popup = document.getElementById('popup-temas');
    popup.style.display = 'none';
}
//Muda o tema.
function setTheme(theme) {
    document.body.classList.remove('tema-bosque-body');
    document.body.classList.remove('tema-cerejeira-body');
    document.body.classList.remove('tema-acude-body');
    document.body.classList.remove('tema-areia-body');
    switch (theme) {
        case 'bosque':
            document.body.classList.add('tema-bosque-body');
            break;
        case 'cerejeira':
            document.body.classList.add('tema-cerejeira-body');
            break;
        case 'acude':
            document.body.classList.add('tema-acude-body');
            break;
        case 'areia':
            document.body.classList.add('tema-areia-body');
            break;
        default:
            break;
    }
    closePopup();
}