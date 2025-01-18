
// # Resolución de los desafíos del curso de lógica de programación <h1>

// Practicar la lógica de programación, incluyendo conceptos como variables, condiciones (if-else), bucles (while) e interacciones con el usuario (alert, prompt), es esencial para tu carrera en el desarrollo de software. Estos fundamentos son la base para abordar problemas de manera estructurada, tomar decisiones sin código, crear bucles controlados e interactuar de manera efectiva con los usuarios.

// Comprender estos conceptos no solo facilita el aprendizaje de nuevos lenguajes y tecnologías, sino que también te capacita para crear soluciones innovadoras, depurar de manera eficiente y mantener la calidad a lo largo del ciclo de vida del software. Por lo tanto, invertir tiempo en estos principios desde temprano es fundamental para construir una base sólida y exitosa en el campo de la programación.

// ## Desafíos - Respuestas <h2>

// 1. Pregunta al usuario qué día de la semana es. Si la respuesta es "Sábado" o "Domingo", muestra "¡Buen fin de semana!". En caso contrario, muestra "¡Buena semana!".
```
  let diaDeLaSemana = prompt('¿Qué día de la semana es?');
if (diaDeLaSemana === 'Sábado' || diaDeLaSemana === 'Domingo') {
    alert('¡Buen fin de semana!');
} else {
    alert('¡Buena semana!');
}
```
// 2. Verifica si un número ingresado por el usuario es positivo o negativo. Muestra una alerta informativa.
```
  let numero = prompt('Escribe un número positivo o negativo');
if (numero > 0) {
    alert('Número positivo');
} else if (numero < 0) {
    alert('Número negativo');
} else {
    alert('El número es cero');
}
```
// 3. Crea un sistema de puntuación para un juego. Si la puntuación es mayor o igual a 100, muestra "¡Enhorabuena, has ganado!". En caso contrario, muestra "Inténtalo de nuevo para ganar."
```
  let puntuacion = 105;
if (puntuacion >= 100) {
    console.log('¡Enhorabuena, has ganado!');
} else {
    console.log('Inténtalo de nuevo para ganar.');
}
```
// 4. Crea un mensaje que informe al usuario sobre el saldo de la cuenta, utilizando un template string para incluir el valor del saldo.
```
  let saldoCuenta = 500; // Ejemplo de saldo
alert(`Tu saldo es de ${saldoCuenta}.`);
```
// 5. Pide al usuario que ingrese su nombre usando prompt. Luego, muestra una alerta de bienvenida utilizando ese nombre.
```
  let nombre = prompt('Por favor, ingresa tu nombre');
alert(