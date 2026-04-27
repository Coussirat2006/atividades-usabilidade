// Atividade 2 - Array de Objetos e Loop
const animais = [
    { nome: 'Rex', especie: 'Cachorro', idade: 5 },
    { nome: 'Mimi', especie: 'Gato', idade: 3 },
    { nome: 'Loro', especie: 'Papagaio', idade: 10 }
];

animais.forEach(animal => {
    console.log(`Nome: ${animal.nome}, Espécie: ${animal.especie}, Idade: ${animal.idade} anos`);
});