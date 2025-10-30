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
function operacionMatematica(){
    let resultado=0;
    const suma = (a,b) => a+b;
    const resta = (a,b) => a-b;
    const multiplicacion = (a,b) => a*b;
    const division = (a,b) => a/b;
return {
    sumar,
    restar,
    multiplicar,
    dividir,
  };
};