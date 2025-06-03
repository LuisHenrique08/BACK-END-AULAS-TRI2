const frutas = [
    {nome: "uva", preco: 12.90, quantidade: 50},
    {nome: "laranja lima", preco: 5.50, quantidade: 120},
    {nome: "abacaxi", preco: 10, quantidade: 12},
    {nome: "uva", preco: 14.90, quantidade: 10}
]
console.log(frutas)
//.find -> encontra um elemento
//.map -> altera todos os elementos da lista
//.filter -> filtra alguns elementos
//.sort -> ordena os elementos

const encontrado = frutas.find((fruta) => frutas.nome === "uva")
console.log(encontrado)

const filtrado = frutas.filter((fruta) => frutas.nome === "uva")
console.log(filtrado)

// usando .map crie um desconto de 50% para cada fruta.

const frutasComDesconto = frutas.map((fruta) => {
    return {
      ...fruta,               
      preco: fruta.preco * 0.5 
    };
    });
    console.log(frutasComDesconto);

//usando .sort ordene em ordem alfabetica
    
const frutasOrdenadas = frutasComDesconto.sort((a, b) => {
        if (a.nome.toLowerCase() < b.nome.toLowerCase()) {
          return -1; 
        }
        if (a.nome.toLowerCase() > b.nome.toLowerCase()) {
          return 1; 
        }
        return 0; 
      });
      console.log(frutasOrdenadas);

