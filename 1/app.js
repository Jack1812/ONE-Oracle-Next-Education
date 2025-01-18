let numeroSecreto = 9;
let numeroUsuario = prompt("Me indicas un numero del 1 al 10por favor:");

console.log(numeroUsuario);

if (numeroUsuario == numeroSecreto) {
    alert(`Acertaste el numero es ${numeroUsuario}`);
}
else{
    alert('No asertastes el numero')
}