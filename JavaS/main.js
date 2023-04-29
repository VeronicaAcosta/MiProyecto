
/*let edad = prompt("Ingrese tu edad")
mesesEdad = "Llevas " + edad * 12 + " meses vivo";
alert(mesesEdad); 

let numero1 = Number(prompt("Ingrese un número"));
let numero2 = Number(prompt("Ingrese otro número"));
let suma = numero1 + numero2;
alert ("El resultado es " + suma);*/

//Pedir un número por prompt y evaluar si está entre 10 y 50. En caso positivo mostrar un alert.

/*let numero = Number(prompt("Ingrese su numero"))

if(numero >= 10 && numero <= 50){
    alert("Su numero es correcto")
}else{
    alert("Vuelva a intentarlo")
}*/

//Pedir número mediante prompt y si es mayor a 1000 mostrar un alert.

/* let numero = Number(prompt("Ingrese su numero"))

if(numero >= 1000){
    alert("Muy bien!")
}else{
    alert("Ow:(")
} */

// Pedir un texto mediante prompt, y si es igual a "Hola" mostrar un alerta por consola.

/* let mensaje = prompt("Ingrese una palabra");

if(mensaje.toLowerCase() === "hola"){
    alert("Correcto!");
}else{
    alert("Intente de nuevo");
} */

/* for(let i = 0; i < 20; i++){
    if(i % 2 === 0){
        continue;
    }

    console.log(i);
} */

/* let dia = prompt("NUESTROS TÉCNICOS DE INTERNET POR FIBRA ÓPTICA ESTÁN DISPONIBLES DE MARTES A SÁBADO. INDIQUE EL DÍA QUE DESEE.");
  let horario = parseInt(prompt("LOS HORARIOS SON DE 9 A 18 HRS. INDIQUE EL HORARIO QUE DESEE."));
  let confirmar = prompt(`¿DESEA CONFIRMAR LA VISITA PARA EL DIA ${dia} A LAS ${horario} ? si || no`);


  while (confirmar === "no") {
    let dia = prompt("NUESTROS TÉCNICOS DE INTERNET POR FIBRA ÓPTICA ESTÁN DISPONIBLES DE MARTES A SÁBADO. INDIQUE EL DÍA QUE DESEE.");
    let horario = parseInt(prompt("LOS HORARIOS SON DE 9 A 18 HRS. INDIQUE EL HORARIO QUE DESEE."));
    confirmar = prompt(`¿DESEA CONFIRMAR LA VISITA PARA EL DIA ${dia} A LAS ${horario} ? si || no`);
    visitaTecnica(dia, horario, confirmar);
  }

  function visitaTecnica(dia, horario, confirmar) {
    if (confirmar === "si") {
      if (dia === "lunes" || dia === "domingo") {
        alert("Lo siento, no podemos programar visitas técnicas los lunes ni domingos");
      } else if (horario < 9 || horario > 18) {
        alert("Lo siento, nuestro horario de atención es de 9 a 18 hrs");
      } else {
        alert(`Nuestro técnico visitará su domicilio el día ${dia}, a las ${horario} hrs`);
      }
    } else if (confirmar === "no") {
      alert("Ingrese datos nuevamente si desea una visita técnica");
    } else {
      alert("Operación inválida");
    }
  }
  

  visitaTecnica(dia, horario, confirmar); */