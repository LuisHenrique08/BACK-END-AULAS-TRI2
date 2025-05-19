const strings = ["Banana", "Maça", "Tomate", "Goiaba"]
const numeros = [10, 20, 30, 40]


strings.push("Abacate")   // Adicionar elementos no final da lista.
console.log(strings)


strings.unshift("Jaca")    // Adicionar elementos no começo da lista.
console.log(strings)

// Adicionar ou remover elementos no meio da lista.

strings.splice(3, 1) //remove a partir do indice 3, apenas 1 elemento
console.log(strings)

strings.splice(3, 0, "Pêra") //adiciona a partir do indice 3
console.log(strings)

strings.pop() //remove o ultimo elemento
console.log(strings)
