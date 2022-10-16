let contador = 1
let caixaTabela = document.querySelector('.tabela')
let produtos = []

let produto = {
}


function adicionar() {
    caixaTabela.classList.add("ativa")
    let tabela = document.querySelector('#tabela')
    let linha = tabela.insertRow()
    let nome = document.querySelector('#nome')
    let marca = document.querySelector('#marca')
    let preco = parseFloat(document.querySelector('#preco').value)
    let quant = Number(document.querySelector('#quant').value)

    produto = {
        id: contador,
        nome: nome.value,
        marca: marca.value,
        preco: preco,
        quantidade: quant,

        precoTotal() {
            return this.preco * this.quantidade
        },

        excluirProduto() {
            return linha.remove()
        },

    }

    nome = linha.insertCell()
    nome.innerHTML = produto.nome

    marca = linha.insertCell()
    marca.innerHTML = produto.marca

    preco = linha.insertCell()
    preco.innerHTML = 'R$ ' + produto.preco.toFixed(2)
    
    quant = linha.insertCell()
    quant.innerHTML = produto.quantidade

    let total = linha.insertCell()
    total.innerHTML = 'R$ ' + produto.precoTotal().toFixed(2)

    let lixeira = linha.insertCell()
    lixeira.innerHTML = `<img src="./img/lixeira.png" width="15px" class="lix">`
    lixeira.addEventListener('click', produto.excluirProduto)


    document.querySelector(".input-dados").reset()

    contador++
    produtos.push(produto)

}






