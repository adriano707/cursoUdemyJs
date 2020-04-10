/*
Entre 0 e 11 horas o sistema fala bom dia
Entre 12 e 17 horas o sistema fala boa tarde
Entre 18 e 23 horas o sistema fala boa noite
*/

const hora = 34;
if (hora >= 0 && hora <= 11){
    console.log('Bom dia');
    }else if (hora >= 12 && hora <= 17){
        console.log('Boa tarde');
    }else if (hora >= 18 && hora <= 23){
        console.log('Boa noite');
    }else {
        console.log('Hora não identificada');
    }
