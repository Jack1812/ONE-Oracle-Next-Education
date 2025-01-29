// Variables 
let numeroMaximo = 100;
let numeroSecreto = Math.floor(Math.random() * numeroMaximo) + 1;
let numeroUsuario = 0;
let intentos=1;
// let palabras='vez';
let maximosIntentos =3;

while (numeroUsuario != numeroSecreto) {
    numeroUsuario = parseInt(prompt(`Me indicas un numero del 1 al ${numeroMaximo} por favor:`));	

    console.log(numeroUsuario);

    if (numeroUsuario == numeroSecreto) {
        alert(`Acertaste el numero, es ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces'} `);
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert('El numero secreto es menor');
        } else {
            alert('El numero secreto es mayor');
        }
        intentos = intentos + 1;
        palabrasVeces = 'veces';
        if (intentos > 3){
            alert(`Llegaste al número maximo de ${maximosIntentos} intentos`);
            break;
        }
    }
}
