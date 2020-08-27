//Dica: Para percorrer um vetor você deve utilizar a sintaxe for...of e para unir valores de um array com um separador utilize o join.

var usuarios = [
    {
    nome: "Diego",
    habilidades: ["Javascript", "ReactJS", "Redux"]
    },
    {
    nome: "Gabriel",
    habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
    }
];

function exibir(usuarios) {
    for (let value of usuarios) {
        console.log(`${value.nome} possui as habilidades: ${value.habilidades.join(', ')}`)
    }
}

exibir(usuarios)