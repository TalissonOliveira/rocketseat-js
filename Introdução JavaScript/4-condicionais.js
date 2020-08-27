function retornaSexo(sexo) {
    /* if (sexo == 'M') {
        return 'Masculino'
    } else if (sexo == 'F') {
        return 'Feminino'
    }else {
        return 'Outro'
    } */

    // Verificar igualdade de valores de uma mesma variável multiplas vezes
    switch (sexo) {
        case 'M':
            return 'Masculino';
        case 'F':
            return 'Feminino'
        default:
            return 'Outro'
    }
}

console.log(retornaSexo('F'))