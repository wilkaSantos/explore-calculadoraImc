import { Modal } from './modal.js';
import { AlertError } from './Error.js';
import { checkNumber, calculationImc, situationResultImc } from './util.js';

const buttonCalc = document.querySelector('.bt-imc');
const weight = document.querySelector('#peso');
const height = document.querySelector('#altura');

buttonCalc.onclick = (e) => {
    e.preventDefault();

    const peso = Number(weight.value);
    const altura = Number(height.value);

    // crio um váriavel para checar os valores de peso e altura
    const weightOrHeightIsNotANumber = checkNumber(peso) || checkNumber(altura);

    if(weightOrHeightIsNotANumber){
        AlertError.open();
        return;
    }

    AlertError.close();

    const result = calculationImc(peso, altura);
    displayResultMessage(result);
}

function displayResultMessage(result){
    
    let message = situationResultImc(result);
    Modal.titleModal.innerText = message;
    Modal.open();
}

weight.oninput = () => {
    AlertError.close();
}