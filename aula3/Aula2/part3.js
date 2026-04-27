// Atividade 2 - Parte 3 (Array de Objetos)
// O PDF pede no mínimo 10 objetos
const estoquePets = [
    { nome: 'Rex', especie: 'Cachorro', preco: 150, estoque: 5 },
    { nome: 'Mimi', especie: 'Gato', preco: 100, estoque: 12 },
    { nome: 'Loro', especie: 'Papagaio', preco: 300, estoque: 2 },
    { nome: 'Thor', especie: 'Cachorro', preco: 200, estoque: 8 },
    { nome: 'Luna', especie: 'Gato', preco: 120, estoque: 15 },
    { nome: 'Peixe', especie: 'Beta', preco: 20, estoque: 50 },
    { nome: 'Bolinha', especie: 'Hamster', preco: 40, estoque: 10 },
    { nome: 'Fred', especie: 'Tartaruga', preco: 250, estoque: 3 },
    { nome: 'Mel', especie: 'Cachorro', preco: 180, estoque: 7 },
    { nome: 'Pretinha', especie: 'Gato', preco: 90, estoque: 20 }
];


console.log("A. Preço do 2º objeto:", estoquePets[1].preco);


console.log("B. Nome do 3º objeto:", estoquePets[2].nome);


console.log("C. Total de itens no array:", estoquePets.length);


console.log("D. Nomes dos animais no estoque:");
estoquePets.forEach(pet => {
    console.log(`- ${pet.nome}`);
});


let totalEstoque = 0;
estoquePets.forEach(pet => {
    totalEstoque += pet.estoque;
});
console.log("E. Total de animais no estoque:", totalEstoque);

let maiorEstoque = estoquePets[0];
estoquePets.forEach(pet => {
    if (pet.estoque > maiorEstoque.estoque) {
        maiorEstoque = pet;
    }
});
console.log("F. Animal com maior quantidade em estoque:", maiorEstoque.nome);