//aescreva uma função chamada de ePaisagem que recebe dois argumentos que 
//recebe dois argumentos, largura e altura de uma imagem (number).
//Retorne true se a imagem estiver no modo paisagem.

function ePaisagem(largura, altura){
    if (largura > altura){
        console.log('Modo paisagem!')
    }else{
        console.log('Modo retrato!')
    }
}

//function ePaisagem(largura, altura){
//    return largura > altura;
//}

//console.log(ePaisagem(1920, 1080));

ePaisagem(1080, 1920);