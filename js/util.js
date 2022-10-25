// verifica se o valor passado não é um número ou se está vazio
export function checkNumber(value){
    return isNaN(value) || value == "";
}

export function calculationImc(peso, altura){
    let calculation = ( peso / ((altura / 100) ** 2)).toFixed(2);
    return calculation;
}

export function situationResultImc(result){
    let message;

    if (result < 18.5) {
        message = `Seu IMC é de ${result}, você está em situação de Magreza.`;

    } else if(result >= 18.5 && result <= 24.9){
        message = `Seu IMC é de ${result}, você está Normal.`;

    }else if(result >= 25 && result <= 29.9){
        message = `Seu IMC é de ${result}, você está em Sobrepeso.`;

    }else if(result > 30){
        message = `Seu IMC é de ${result}, você está com Obesidade.`;
    }

    return message;
}