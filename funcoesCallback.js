function media(nota1, nota2){
    return (nota1 + nota2)/2
}

console.log(media(5.2, 0))


// arrow function
mediaArrow = (nota1, nota2) => {
    return (nota1 + nota2)/2
}
    console.log(mediaArrow(10, 9))


    //arrow function (Jeito simples)
    mediaArrowSimples = (nota1, nota2) => (nota1 + nota2)/2
        console.log(mediaArrowSimples(10, 8))


    //função Callback (uma função dentro de outra)
    const lista = ["Uno", "golf", "Voyage", "F100"]
    lista.forEach((carro) => console.log(carro))

    //função MAP = Altera todos os elementos da lista
    console.log(lista.map((carro) => carro + "zada"))
