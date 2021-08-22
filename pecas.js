//Sistema para cadastro de peças

//Criando uma lista de peças
const listaDePecas = ["Filtro", "Câmbio", "Suspensão"];
console.log(listaDePecas);

//Checando o espaço da lista (máximo 10 peças)
if (listaDePecas.length < 10) {
    console.log("É possível cadastrar mais peças");
} else {
   console.log("Espaço de cadastro insuficiente");
}

//Checando o peso da peça (mínimo 100g)
let peso = 100;

if (peso >= 100) {
    console.log("Peso da peça está adequado");
} else {
    console.log("Peso insuficiente");
}

//Checando a quantidade de caracteres do nome (mínimo 3)

//Modelo 1 (if, else)
let nomePeca = ("Velas");

if (nomePeca.length < 1) {
    console.log ("O nome não pode ser vazio. Digite um nome válido");
} else if (nomePeca.length > 0 && nomePeca.length <= 3) {
    console.log("O nome " + nomePeca + " é inválido. Ele deve possuir mais de 3 caracteres");
} else {
    console.log("Nome " + nomePeca +  " está adequado");
} 

//Modelo 2 (switch)
switch (nomePeca.length) {
    case 0:
        console.log("O nome não pode ser vazio. Digite um nome válido")
        break;

    case 1:
    case 2:
    case 3:
        console.log("O nome " + nomePeca + " é inválido. Ele deve possuir mais de 3 caracteres")
        break;

    default:
        console.log("Nome " + nomePeca +  " está adequado")
        break;
}
