//capturar evento de submit do formulário
const form = document.querySelector('#formulario');

form.addEventListener('submit',  function(event){
    event.preventDefault();
    console.log('Evento previnido.');
    setResultado('Olá mundo');
});

function setResultado (msg){
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    const p = document.createElement('p');
    p.classList.add('paragrafo-resultado');
    p.innerHTML = 'Um texto';
    resultado.appendChild(p);
}