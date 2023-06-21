const cowsay = require('cowsay');

const message = cowsay.say({
    text : "Hola PilarTecno #4\nUn paso para el hombre y un salto de línea para la humanidad",
    e : "oO",
    T : "U "
});

const message2 = cowsay.say({
    text : "Soy la segunda vaquita",
    e : "00",
    T : "b "
});

console.log(message);
console.log(message2)
