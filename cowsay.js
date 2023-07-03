const cowsay = require('cowsay');

const message = cowsay.say({
    text : 'Hola PilarTecno #4 Soy una vaquita',
    e : 'oO',
    T : 'U '
});

const unusedVar = {
    something: 'something'
};

const result = [unusedVar];

function helloWorld()
{
    console.log('hola mundo');
}

helloWorld();

console.log(message);
console.log(result);
