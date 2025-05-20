const numeros = [10, 50, 100, 202, 30]

// filter ->

const filtro = numeros. filter((n) => n < 100)
console.log(filtro)


lista = ["uno", "fusca", "palio", "celta", "hb20"]
//ordenar uma lista (ordem alfabética)
const ordenado = lista.sort()
console.log(ordenado)

const numerosOrdenado = numeros.sort((a, b) => {
    if (a < b) {
        return -1;
    }
    if (a > b) {
        return 1;
    }
    return 0;
})
console.log(numerosOrdenado)