//booleanos
var esVerdadero = true;
console.log(esVerdadero);
//Number
var entero = 6;
var decimal = 6.5;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
var big = 100n;
var bigDecimal = BigInt(100);
//String
var none = 'Hola mundo';
var anios = "18";
console.log("Hola, mi nombre es ".concat(none, " y tengo ").concat(anios, " a\u00F1os."));
//Array
var lista = [1, 2, 3, 4, 5];
//Tupla
var tupla;
//Enum
var Color;
(function (Color) {
    Color[Color["Rojo"] = 0] = "Rojo";
    Color[Color["Verde"] = 1] = "Verde";
    Color[Color["Azul"] = 2] = "Azul";
})(Color || (Color = {}));
//Any
var variable;
//Void
function saludar() {
    console.log('Hola mundo');
}
