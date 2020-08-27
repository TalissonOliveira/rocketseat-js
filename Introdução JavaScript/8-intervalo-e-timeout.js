// Intervalo = função que executa várias vezes dentro de um intervalo
function exibeAlgo() {
    console.log('Helo World!')
}

// Para referenciar a função não coloca (), caso contrário, a ela vai executar somente uma vez
setInterval(exibeAlgo, 1000)


// setTimeout = Executa somente uma vez com um delay antes da execução
setTimeout(exibeAlgo, 5000)