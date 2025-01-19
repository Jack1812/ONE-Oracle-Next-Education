let numeroSecreto = 5;
let numeroUsuario = 0;
let intentos=1;
let palabras='vez';

while (numeroUsuario != numeroSecreto) {
    numeroUsuario = parseInt(prompt("Me indicas un numero del 1 al 10 por favor:"));

    console.log(numeroUsuario);

    if (numeroUsuario == numeroSecreto) {
        alert(`Acertaste el numero, es ${numeroUsuario}. Lo hiciste en ${intentos} ${palabras} `);
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert('El numero secreto es menor');
        } else {
            alert('El numero secreto es mayor');
        }
        intentos = intentos + 1;
        palabras = 'veces';
    }
}
