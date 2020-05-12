function criaCalculadora() {
    return {
        display: document.querySelector('.display'),


        inicia() {
            this.cliqueBotoes();
            this.pressioneEnter();
        },
//      a função testa se a tecla pressionada foi enter. Caso enter seja confirmado é chamada a função realizaConta que mostra o valor da operação.
        pressioneEnter() {
            this.display.addEventListener('keyup', e => {
                if(e.keyCode === 13) {
                    this.realizaConta();
                }
            })    
        },

        realizaConta() {
            let conta = this.display.value;
            
            try {
                conta = eval(conta);  
                
                if(!conta) {
                    alert('Conta inválida');    
                    return;
                }

                this.display.value = String(conta);
            } catch(e) {
                alert('Conta inválida');    
                    return;
            }
        },

//      esse metodo limpa todo o display da calculadora.
        clearDisplay() {
            this.display.value = '';
        },
//      esse metodo apaga somente um n[umero opr vez da calculadora.]
        apagaUm() {
            this.display.value = this.display.value.slice(0, -1);
        },

        cliqueBotoes() {
            document.addEventListener('click', (e) => {
                const el = e.target;
//              se o botão pressionado contem a classe btn-num criada no html o texto do botão é mostrado no input.
                if(el.classList.contains('btn-num')) {
                    this.btnParaDispley(el.innerText);    
                }
//              se o botão pressionado contem a classe btn-clear criada no html o texto do botão o conteúdo do input é apagado.
                if(el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }
//              se o botão pressionado contem a classe btn-del criada no html o texto do botão é apagado um caractere por vez.
                if(el.classList.contains('btn-del')) {
                    this.apagaUm();    
                }
//              se o botão pressionado contem a classe btn-eq criada no html é feita a operação atribuída aos valores.
                if(el.classList.contains('btn-eq')) {
                    this.realizaConta();
                }
            });
        }, 
        
        btnParaDispley(valor) {
            this.display.value += valor;
        }
    };
}

const calculadora = criaCalculadora(); 
calculadora.inicia();