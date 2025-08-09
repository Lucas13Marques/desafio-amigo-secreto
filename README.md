# 🎯 Sorteador de Amigos

Este é um projeto simples em **JavaScript**, **HTML** e **CSS** que permite adicionar nomes a uma lista e sortear um deles aleatoriamente.  
Ideal para brincadeiras como **Amigo Secreto**.

---

## 📌 Funcionalidades

- Adicionar amigos digitando o nome.
- Exibir a lista de amigos cadastrados.
- Sortear um amigo aleatório.
- Limpar a lista automaticamente após o sorteio.
- Alertas para evitar nomes vazios ou sorteio sem amigos.

---

## 🚀 Como usar

1. Abra o arquivo `index.html` no navegador.
2. Digite o nome de um amigo no campo de texto.
3. Clique no botão **Adicionar**.
4. Repita para todos os nomes que quiser.
5. Clique no botão **Sortear Amigo** para exibir o sorteado.

---

## 📂 Estrutura
📁 sorteador-amigos
│
├── index.html # Estrutura da página
├── style.css # Estilo visual
└── script.js # Lógica em JavaScript


---

## 📜 Sobre o código

- O array `amigos` guarda os nomes adicionados.
- `exibirAmigos()` → Mostra os amigos na tela.
- `adicionarAmigo()` → Adiciona o nome digitado ao array.
- `limparcampos()` → Limpa o campo de texto após adicionar.
- `sortearAmigo()` → Escolhe um nome aleatório com `Math.random()` e exibe o resultado.



