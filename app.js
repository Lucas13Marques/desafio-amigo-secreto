let amigos = [];

// Função responsável por exibir os amigos na lista <ul>
function exibirAmigos(){ 

//Busca o elementro a partir do id
    let lista = document.getElementById('listaAmigos');

//Deixa em branco qualquer texto interno no elemento
        lista.innerHTML = '';

//Cria loop com for, cria a variavel, adiciona condicional e adiciona valor a variavel 1 para finalizar o loop 
    for( let i = 0;i < amigos.length; i++ ){ 

// Cria um novo elemento <li> 
        let item = document.createElement('li');

// Define o texto do <li> como o nome do amigo atual
        item.textContent = amigos[i];

// Adiciona o <li> ao <ul>
        lista.appendChild(item);
    document.getElementById('resultado').innerHTML = '';
       
    }}

    
// Função responsável por adicionar um novo nome no array e atualizar a exibição
function adicionarAmigo() { 

// Verifica se o campo está vazio
    if (document.querySelector('input').value == ''){
       
// Alerta o usuário se nenhum nome foi inserido
        alert('Por favor, insira um nome.')

// Captura o valor digitado no campo <input>
    }else{
       
    let digitAmigo  = document.querySelector('input').value;

amigos.push(digitAmigo);

// Exibe o array atualizado no console (útil para depuração)
console.log(amigos);

 // Atualiza a lista exibida na tela
exibirAmigos() ;   

    }
    
 // Limpa o campo de entrada após o envio
limparcampos();}


// Função para limpar o campo de entrada do usuário
function limparcampos() { 
   let digitAmigo = document.querySelector('input');
    digitAmigo.value = '';
}
 
 function sortearAmigo(){
    if( amigos == '' ){ 
        //Alerta para caso tentem sortear amigos sem incluir ninguem na lista
        alert('Sua lista está vazia, preencha um nome')
        return
    }
    let amigoSorteado = Math.floor(Math.random() * amigos.length);
    let Result = document.getElementById('resultado');

//Deixa em branco qualquer texto interno no elemento
        Result.innerHTML = '';

//Cria loop com for, cria a variavel, adiciona condicional e adiciona valor a variavel 1 para finalizar o loop 
   let element = document.createElement('li');

// Define o texto do <li> como o nome do amigo atual
        element.textContent = 'O amigo sorteado foi: ' + amigos[amigoSorteado];

// Adiciona o <li> ao <ul>
        Result.appendChild(element);
    
     amigos = [];
    exibirAmigos();
       
 } 