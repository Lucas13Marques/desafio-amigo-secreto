let amigos = [];

 

function adicionarAmigo() { 

    if (document.querySelector('input').value == ''){
        alert('Por favor, insira um nome.')

    }else{
    let digitAmigo  = document.querySelector('input').value;

amigos.push(digitAmigo);

console.log(amigos);
    }
limparcampos();}


    
function limparcampos() { 
    chute = document.querySelector('input');
    chute.value = '';
}


