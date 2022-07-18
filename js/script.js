// let products = [
//     {
//         nome: "Uva Crimson",
//         preco: 44.99
//     },
//     {
//         nome: "Vinho Canção",
//         preco: 17.90
//     },
//     {
//         nome: "Agua de Coco",
//         preco: 8.99
//     },
//     {
//         nome: "Mamão",
//         preco: 9.98
//     },
//     {
//         nome: "Agua Tonica",
//         preco: 17.98
//     }
// ]

// let soma = products[0].preco + products[1].preco + products[2].preco + products[3].preco + products[4].preco 
// console.log(soma)


// for(let i = 0; i < products.length; i++){
//     let ul = document.createElement("ul")
//     const buttom = document.createElement("buttom:submit")
//     const section = document.createElement("section")
//     const main = document.createElement("main")

//     ul = products[i]
//     buttom.textContent =

//     main.append(ul, section)
// }




let produtos = [
    {
        id: 1,
        nome: 'Uva Crimson',
        preco: 44.99
    },
    {
        id: 2,
        nome: 'Vinho Canção',
        preco: 17.98
    },
    {
        id: 3,
        nome: 'Agua de Coco',
        preco: 8.99
    },
    {
        id: 4,
        nome: 'Mamão',
        preco: 9.98
    },
    {
        id: 5,
        nome: 'Agua Tonica',
        preco: 17.98
    }
    ]
    
    
    const body = document.querySelector('body')
    
    let main = document.createElement('main')
    body.appendChild(main)
    
    let itens = document.createElement('div')
    main.appendChild(itens)
    itens.className = 'cardSuperior'
    
    let descItem = document.createElement('p')
    itens.appendChild(descItem)
    descItem.innerText = 'Item'
    
    let descValor = document.createElement('p')
    itens.appendChild(descValor)
    descValor.innerText = 'Valor'
    
    let produtcsList = document.createElement('ul')
    main.appendChild(produtcsList)
    
    produtcsList.className = 'lista'
    
    let resultado = 0
    for(let i = 0; i < produtos.length; i++){
       
        let productsDetail = document.createElement('li')
        let nome = document.createElement('p')
        let preco = document.createElement('span')
        productsDetail.className = 'classe'
        resultado = resultado + produtos[i].preco
            
        nome.innerText = produtos[i].nome
        preco.innerText = `R$ ${produtos[i].preco.toString().replace('.',',')}`
    
        productsDetail.append(nome, preco)
    
        produtcsList.appendChild(productsDetail)
    }
    
    let tratado = resultado.toString().replace('.', ',')
    
    let secao = document.createElement('section')
    main.appendChild(secao)
    
    let div = document.createElement('div')
    secao.appendChild(div)
    
    let descricao = document.createElement('p')
    let totalPreco = document.createElement('p')
    
    descricao.innerText = `Total`
    totalPreco.innerText = `R$ ${tratado}`
    div.append(descricao, totalPreco)
    div.className = 'cardResultado'
    
    let botaoDiv = document.createElement('div')
    secao.appendChild(botaoDiv)
    
    let botao = document.createElement('button')
    botaoDiv.appendChild(botao)
    
    botaoDiv.className = 'cardBotao'
    botao.appendChild(document.createTextNode('Finalizar Compra'))
