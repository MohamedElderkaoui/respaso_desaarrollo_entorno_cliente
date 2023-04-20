var memoria = "";
var operacion = "";
var resultado = 0;
var pantalla = document.getElementById("pantalla");
pantalla.innerHTML = "0";
var teclas = document.getElementsByTagName("td");
var uno = document.getElementById("1");
var dos = document.getElementById("2");
var tres = document.getElementById("3");
var cuatro = document.getElementById("4");
var cinco = document.getElementById("5");
var seis = document.getElementById("6");
var siete = document.getElementById("7");
var ocho = document.getElementById("8");
var nueve = document.getElementById("9");
var cero = document.getElementById("0");
var suma = document.getElementById("+");
var resta = document.getElementById("-");
var multiplicacion = document.getElementById("*");
var division = document.getElementById("/");
var igual = document.getElementById("igual");
var c = document.getElementById("c");
// Add click event listeners to all buttons
c.addEventListener("click", function () {
  /* recarga la página */
  location.reload();
});
uno.addEventListener("click", function () {
  if (pantalla.innerHTML == "0") {
    pantalla.innerHTML = "1";
  } else {
    pantalla.innerHTML = pantalla.innerHTML + "1";
  }
});
dos.addEventListener("click", function () {
  if (pantalla.innerHTML == "0") {
    pantalla.innerHTML = "2";
  } else {
    pantalla.innerHTML = pantalla.innerHTML + "2";
  }
});
tres.addEventListener("click", function () {
  if (pantalla.innerHTML == "0") {
    pantalla.innerHTML = "3";
  } else {
    pantalla.innerHTML = pantalla.innerHTML + "3";
  }
});
cuatro.addEventListener("click", function () {
  if (pantalla.innerHTML == "0") {
    pantalla.innerHTML = "4";
  } else {
    pantalla.innerHTML = pantalla.innerHTML + "4";
  }
});
cinco.addEventListener("click", function () {
  if (pantalla.innerHTML == "0") {
    pantalla.innerHTML = "5";
  } else {
    pantalla.innerHTML = pantalla.innerHTML + "5";
  }
});
seis.addEventListener("click", function () {
  if (pantalla.innerHTML == "0") {
    pantalla.innerHTML = "6";
  } else {
    pantalla.innerHTML = pantalla.innerHTML + "6";
  }
});
siete.addEventListener("click", function () {
  if (pantalla.innerHTML == "0") {
    pantalla.innerHTML = "7";
  } else {
    pantalla.innerHTML = pantalla.innerHTML + "7";
  }
});
ocho.addEventListener("click", function () {
  if (pantalla.innerHTML == "0") {
    pantalla.innerHTML = "8";
  } else {
    pantalla.innerHTML = pantalla.innerHTML + "8";
  }
});
nueve.addEventListener("click", function () {
  if (pantalla.innerHTML == "0") {
    pantalla.innerHTML = "9";
  } else {
    pantalla.innerHTML = pantalla.innerHTML + "9";
  }
});
cero.addEventListener("click", function () {
  if (pantalla.innerHTML == "0") {
    pantalla.innerHTML = "0";
  } else {
    pantalla.innerHTML = pantalla.innerHTML + "0";
  }
});
suma.addEventListener("click", function () {
  if (pantalla.innerHTML == "0") {
    pantalla.innerHTML = "0";
  } else {
    memoria = pantalla.innerHTML;
    operacion = "+";
    pantalla.innerHTML = "";
  }
});
resta.addEventListener("click", function () {
  if (pantalla.innerHTML == "0") {
    pantalla.innerHTML = "0";
  } else {
    memoria = pantalla.innerHTML;
    operacion = "-";
    pantalla.innerHTML = "";
  }
});
multiplicacion.addEventListener("click", function () {
  if (pantalla.innerHTML == "0") {
    pantalla.innerHTML = "0";
  } else {
    memoria = pantalla.innerHTML;
    operacion = "*";
    pantalla.innerHTML = "";
  }
});
division.addEventListener("click", function () {
  if (pantalla.innerHTML == "0") {
    pantalla.innerHTML = "0";
  } else {
    memoria = pantalla.innerHTML;
    operacion = "/";
    pantalla.innerHTML = "";
  }
});
var cont = 0;
igual.addEventListener("click", function () {
    cont++;
    console.log(cont);
    pantalla.innerHTML = pantalla.innerHTML + " = ";
  var valor2 = pantalla.innerHTML;
  var valor1 = memoria;
  if (operacion == "+") {
    resultado = parseFloat(valor1) + parseFloat(valor2);
    console.log(resultado);
  } else if (operacion == "-") {
    resultado = parseFloat(valor1) - parseFloat(valor2);
    console.log(resultado);
  } else if (operacion == "*") {
    resultado = parseFloat(valor1) * parseFloat(valor2);
    console.log(resultado);
  } else if (operacion == "/") {
    resultado = parseFloat(valor1) / parseFloat(valor2);
    console.log(resultado);
  }
  pantalla.innerHTML = resultado;
});
