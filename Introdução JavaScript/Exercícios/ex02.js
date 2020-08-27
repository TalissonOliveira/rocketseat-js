// Crie uma função que dado um intervalo (entre x e y) exiba todos número pares:

function pares (x, y) {
    for (let i = x; i <= y; i++) {
        if (i % 2 == 0) {
            console.log(`${i} é par`)
        } 
    }
}

pares(1,100)