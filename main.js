//Simulação de adição de itens de pedido
//Seleciona todos os botões que possuem a classe 'adicionar'
const botoesAdicionar = document.querySelectorAll('.adicionar');

//Selecione a lista onde os itens dos pedidos estão sendo exibidos
const listaPedido = document.getElementById('lista-pedido');

//Seleciona o elemento que exibira o valor total do pedido
const totalElemento = document.getElementById('total');

//Criar variavel que armazena o total do pedido
let total = 0;

//Percorrer todos os botões 'Adicionar' e adicona um evento de clique em cada um
botoesAdicionar.forEach((botao) => {
    botao.addEventListener('click', () => {

        //Obtem o elemento pai do botao
        const produto = botao.parentElement;
    
        //Obtem o nome do produto a partir do texto da tag <h3>
        const nome = produto.querySelector('h3').textContent;

        //Obtem o preço do produto removendo o texto "R$" e converte o valor para decimal
        const preco = parseFloat(produto.querySelector(".preco").textContent.replace("R$",""));

        //Obtém um novo item de lista <lit> para adicionar o produto ao pedido
        const itemPedido = document.createElement('li');

        //Adiciona o R$ ao preço fixo
        itemPedido.textContent = `${nome} - R$ ${preco.toFixed(2)}`;

        //Adiciona o item criado a lista de pedidos
        listaPedido.appendChild(itemPedido);

        //Atualiza o total da compra
        total += preco;

        totalElemento.textContent = `Total: R$ ${total.toFixed(2)}`;

    })

});

//Simula finalização do pedido
const botaoFinalizarPedido = document.getElementById('finalizar-pedido');

    botaoFinalizarPedido.addEventListener("click", () => {
    alert("Pedido finalizado com sucesso" + totalElemento.textContent);

    listaPedido.innerHTML = '';

    total = 0;

    totalElemento.textContent = `Total: R$ ${total.toFixed(2)}`;

});