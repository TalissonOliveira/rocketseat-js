// And, Or, Not

var sexo = 'M', idade = 19

if (sexo == 'M' || idade >= 18){
    console.log('Ok')
}

if (sexo != 'M') {
    console.log('Ok')
}

/* var masculino;
if (sexo == 'M') {
    masculino = true
} else {
    masculino = false
}
 */

 var masculino = sexo == 'M'
console.log(masculino)