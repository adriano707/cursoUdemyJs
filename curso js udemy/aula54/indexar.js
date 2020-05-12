function Calculadora() { // cria a função(função fábrica).
    this.display = document.querySelector('.display');

    this.inicia = () => {//esse metodo busca pelo metodo capturaCliques.
        this.capturaCliques(); 
        this.capturaEnter();  
    };

    this.capturaEnter = () => {
        this.display.addEventListener('keypress', e => {
        if(e.keyCode === 13) {
            this.realizaConta(); 
            }
        });    
    }

    this.capturaCliques = () => {
        document.addEventListener('click', evento => {//checa por cliques.
            const el = evento.target;//pega o botão que foi pressionado.
            if(el.classList.contains('btn-num')) this.addNumDisplay(el);//adiciona numero digitado.
            if(el.classList.contains('btn-clear')) this.clear();//limpa todo o display.
            if(el.classList.contains('btn-del')) this.del(el);
            if(el.classList.contains('btn-eq')) this.realizaConta(el);//mostra o resultado da operação dos valores
        });
    };

    this.realizaConta = () => {
        try{
            const conta = eval(this.display.value);

            if(!conta){
                alert('Conta inválida');
                return;
            }

            this.display.value = conta;
            
        } catch(e) {
            alert('Conta inválida'); 
            return;   
        }    
    }; 
//  Esse metodo lê o  numero pressionado e mostra no display
    this.addNumDisplay = el => {
        this.display.value += el.innerText;
        this.display.focus();// metodo para manter o foco no displei evitando erros de digitação.
    }     
//  esse metodo limpa o conteúdo do display.
    this.clear = function(){
        this.display.value = '';    
    };
//  metodo usado para limpar o displey. A cada vez que é pressionado limpa um número do display.
    this.del = () => {
        this.display.value = this.display.value.slice(0, -1);    
    }
}

const calculadora = new Calculadora();// nova instancia da função fábrica.
calculadora.inicia();// chama o metodo inicia da função(tudo começa por esse metodo).