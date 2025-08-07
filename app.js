let amigos = [];

function adicionarAmigo() { 

    if (document.querySelector('input').value == ''){
        alert('Digite um valor válido')

    }else{
    let digitAmigo  = document.querySelector('input').value

amigos.push(digitAmigo)

console.log(amigos)
    }}
