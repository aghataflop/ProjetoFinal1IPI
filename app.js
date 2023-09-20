var lista_de_produtos = []

 

while (true) {

 

    var opcao = prompt(`

Bem Vindo ao Cadastro de Produtos! 😉🤍

 

1. Cadastrar o produto

2. Editar produto

3. Remover produto

4. Visualizar os produto

`)

 

    if (opcao == 1) {

        adicionar()

        //codigo para adicionar produto

    } else if (opcao == 2) {

        var indice = prompt("qual produto?")

 

        editar(indice)

        //codigo para editar o produto

    } else if (opcao == 3) {

        var indice = prompt("Qual produto?")

 

        remover(indice)

        //codigo para remover

    } else if (opcao == 4) {

        ver()

        //codigo para visualizar

    } else {

        alert("Nenhuma das opcao foram selecionadas")

    }

 

 

}

 

 

function adicionar() {

    var objeto = {

        produto: '',

        marca: '',

        preco: '',

    }

 

    objeto.produto = prompt("digite aqui seu produto")

    objeto.marca = prompt("Coloque aqui a marca do seu produto")

    objeto.preco = prompt("Quanto que seu produto vai custar")

 

    lista_de_produtos.push(objeto)

 

}

 

function editar(indice) {

 

    var objeto = lista_de_produtos[indice]

   

    objeto.produto = prompt("Qual o nome do produto?")

    objeto.marca = prompt("Qual o nome da marca?")

    objeto.preco = prompt("Qual o nome do preço?")

 

    lista_de_produtos[indice] = objeto

 

}

 

function remover(indice) {

 

 

    var remover = lista_de_produtos[indice]

 

   lista_de_produtos.splice (indice , 1)

   

 

 

 

   

 

   

 

 

 

 

}

 

function ver() {

 

    var texto = ""

 

    for(let i = 0; i < lista_de_produtos.length; i++) {

 

        texto +=   `${i} - Produto: ${lista_de_produtos[i].produto}

                        - Marca: ${lista_de_produtos[i].marca}

                        - Preco: ${lista_de_produtos[i].preco} \n`

 

    }

    alert(texto)

 

 

 

}