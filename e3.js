function esPar(num){
    return num%2===0;
}
function areaRectangulo(base, altura){
    return base*altura;
}
function esMultiplo(a,b){
    return a%b===0;
}
function mayorDeTres(a,b,c){
    return Math.max(a,b,c);
}
const promedio=function(nota1, nota2, nota3){
    return (nota1+nota2+nota3)/3;
}
const convertirAMayusculas=function(texto){
    return texto.toUpperCase();
}
const calcularDescuento=function(precio,porcentaje){
    return precio - (precio * (porcentaje / 100));
}
const saludo=(nombre)=>{
    return `Hola, ${nombre}!`;
}
const esPositivo=(num)=>{
    return num>0;
}
//ejercicio12
const aMayusculas = (texto) => {
    return texto.toUpperCase();
}
const agregarSigno = (texto) => {
    return texto + "!";
}
const componerTransformaciones = (f1, f2) => (texto) => f2(f1(texto));

const transformar = componerTransformaciones(aMayusculas, agregarSigno);

//ejercicio13
function procesarTexto(texto){
    function limpiarEspacios(texto){
        return texto.trim();
    }
    function contarPalabras(texto){
        if(texto==="") return 0;
        return texto.split(/\s+/).length;
    }
    const textoLimpio = limpiarEspacios(texto);
    const cantidadPalabras = contarPalabras(texto);
    
    return (textoLimpio)+"  "+(cantidadPalabras);
}
function operacionesMatematicas() {
    const sumar = (a, b) => a + b;
    const restar = (a, b) => a - b;
    const multiplicar = (a, b) => a * b;
    const dividir = (a, b) => {
        if (b === 0) {
            return "Error: División por cero";
        }
        return a / b;
    };
    return {
        sumar,
        restar,
        multiplicar,
        dividir
    };
}
function crearContador(valorInicial = 0) {
    let contador = valorInicial; 
    return {
        incrementar: () => {
            contador++;
            return contador;
        },
        resetear: () => {
            contador = valorInicial;
            return contador;
        },
        obtenerValor: () => contador 
    };
}
function crearAcumulador(valorInicial) {
    let acumulador = valorInicial; 
    return function(nuevoValor) {
        acumulador += nuevoValor;
        return acumulador;
    };
}
function saludo(nombre = "Amigo") {
    return `¡Hola, ${nombre}! Que tengas un buen día.`;
}
function media(...numeros) {
    if (numeros.length === 0) {
        return 0;
    }
    const suma = numeros.reduce((acc, current) => acc + current, 0);
    return suma / numeros.length;
}
function mostrarDatos(nombre, edad, ...hobbies) {
    let mensaje = `Nombre: ${nombre}, Edad: ${edad}`;
    if (hobbies.length > 0) {
        mensaje += `, Hobbies: ${hobbies.join(', ')}`;
    } else {
        mensaje += ', Sin Hobbies registrados.';
    }
    console.log(mensaje);
}
function ejecutarOperacion(fn, x, y) {
    if (typeof fn !== 'function') {
        return "Error: El primer argumento debe ser una función.";
    }
    return fn(x, y);
}
function filtrarArreglo(arr, callback) {
    const resultado = [];
    for (const elemento of arr) {
        if (callback(elemento)) {
            resultado.push(elemento);
        }
    }
    return resultado;
}
function descargarArchivo(url, callback) {
    console.log(`Descargando... (${url})`);
    setTimeout(() => {

        callback(url);
    }, 1500); }
const notificarDescargaCompleta = (url) => {
    console.log(`Descarga completa de ${url}`);
};
function potencia(base, exponente) {
    if (exponente === 0) {
        return 1;
    }
    if (exponente < 0) {
        return 1 / potencia(base, -exponente);
    }
    return base * potencia(base, exponente - 1);
}
function crearSecuencia(inicio, paso) {
    let valorActual = inicio; 
    return function() {
        const resultado = valorActual;
        valorActual += paso;
        return resultado;
    };
}    