// Atividade 2 - Parte 2
let produto = {
    nome: 'Teclado Mecânico',
    cor: 'RGB',
    preco: 250.00,
    estoque: 100
};

console.log("A. Nome:", produto.nome);
console.log("B. Preço (colchetes):", produto['preco']);

produto.estoque = 80; // Alterando valor
console.log("D. Objeto atualizado:", produto);