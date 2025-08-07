let amigos = [];


function exibirAmigos(){ 
    let lista = document.getElementById('listaAmigos');
        lista.innerHTML = '';

    for( let i = 0;i < amigos.length; i++ ){ 
        let item = document.createElement('li');
        item.textContent = amigos[i];
        lista.appendChild(item);
       
    }}

function adicionarAmigo() { 

    if (document.querySelector('input').value == ''){
        alert('Por favor, insira um nome.')

    }else{
    let digitAmigo  = document.querySelector('input').value;

amigos.push(digitAmigo);

console.log(amigos);
exibirAmigos() ;   

    }
limparcampos();}


    
function limparcampos() { 
    chute = document.querySelector('input');
    chute.value = '';
}


 