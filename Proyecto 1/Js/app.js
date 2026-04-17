//Nombre y Apellido: Juan Trus
//Curso: 6B
//Grupo: 604
//Taller de programacion III
//Departamento de Informatica - EESTn°1 - Raul Scalabrini Ortiz

const nuevaString = "Juan";
const nuevoNum = 7;
const nuevoBool = true; 
const nuevaResta = 10 - 5 === 5;
const nuevaMultiplicacion = 10 * 4 === 40 ;
const nuevoModulo = 21 % 5 === 1;

function devolverString(str) {
return (str);
}

function suma(x, y) {
  return x + y;
}

function resta(x, y) {
  return x-y;
}

function multiplica(x, y) {
  return x * y;
}

function divide(x, y) {
  return x/y;
}

function sonIguales(x, y) {
  if (x === y) {
    return true;
  } else {
    return false;
  }
}

function tienenMismaLongitud(str1, str2) {
  if (str1.length === str2.length) {
    return true;
  } else {
    return false;
  }
}

function menosQueNoventa(num) {
 if (num <  90){
     return true;
 }else {
     return false
}
}

function mayorQueCincuenta(num) {
  if (num > 50) {
      return true;
  }else {
return false;
  }
}

function obtenerResto(x, y) {
  return x % y;
}

function esPar(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

function esImpar(num) {
  if (num % 2 !== 0) {
    return true;
  } else {
    return false;
  }
}

function elevarAlCuadrado(num) {
  return Math.pow(num, 2);
}

function elevarAlCubo(num) {
  return Math.pow(num, 3);
}

function elevar(num, exponent) {
 return Math.pow(num, exponent);
}

function redondearNumero(num) {
  return Math.round(num);
}

function redondearHaciaArriba(num) {
  return Math.ceil(num);
}

function agregarSimboloExclamacion(str) {
  return str + "!";
}

function combinarNombres(nombre, apellido) {
  return nombre + " " + apellido;
}

