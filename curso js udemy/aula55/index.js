//funções recursivas.

function recursiva(max) {
    if(max >= 10) return;
        max++;
        console.log(max);
        recursiva(max);
}

recursiva(-4);
recursiva(0);