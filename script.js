// Se uso como referencia las siguientes fuentes y se corrigio un bug del codigo original: 
//https://nomeloexplicaron.wordpress.com/2018/04/02/reloj-en-tiempo-real-con-javascript/
//https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Operadores_l%C3%B3gicos
//https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Conditional_Operator
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
//https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Funciones/Arrow_functions
// Funciones flecha sin parámetros que son visualmente más fáciles de procesar
const playClock = () => {


  const resultado = document.getElementById("reloj");

  // Función que añade un cero a la izquierda
  // a la hora, minutos y segundos cuando el
  // valor de estos es inferior a 10 
  // Funcion flecha con un parámetro que es visualmente má fácil de procesar
  //El operador condicional (ternario) es el único operador en JavaScript que tiene tres operandos. Este operador se usa con frecuencia como atajo para la instrucción if.
  const addZero = n => n = n < 10 ? "0"+n: n;
  
  // Funciones flecha sin parámetros que son visualmente más fáciles de procesar
  // Funcion que retorna el Reloj
  let hora, minutos, segundos, meridiano;
  const clock = () => {
      const dateJsNow = new Date();
      hora = dateJsNow.getHours(); // optener la hora actual
      //Se utilizo asignaciones estaticas para probar el codigo simulando diferentes horas
      //hora = 0;
      console.log(hora);
      minutos = dateJsNow.getMinutes(); //obtener los minutos actuales 
      segundos = dateJsNow.getSeconds();

      // Condicional para descubrir el meridiano de la hora actual
      // El operador condicional (ternario) es el único operador en JavaScript que tiene tres operandos. Este operador se usa con frecuencia como atajo para la instrucción if.
      meridiano = hora < 12 ? "am" : "pm";

      // Dar formato de 12 horas en lugar de 24 horas. Se restan 12 horas si el valor que optenemos de la hora es mayor a 12, 
      //se muestra la hora como 12 pm en la media noche 
      if (hora == 0) 
      {
        hora = 12;  
      }
      else if (hora > 12) {
        hora -= 12;
      }
      else if (hora <= 12) {
        hora = hora;
      }
      // codigo original con un bug al momento de que la hora es menor a 12:
      //hora = hora == 0 ? 12 : hora || hora > 12 ? hora -= 12 : hora;

      return (
          resultado.innerHTML = 
          `${addZero(hora)}:${addZero(minutos)}:${addZero(segundos)} ${meridiano}`
      );
  }

  // Llama a la función RELOJ cada segundo
  // para que se vaya actualizando la hora
  return setInterval(clock, 1000);
}

// Llama a la funcion PlayClock cuando el DOM se haya cargado
document.addEventListener("DOMContentLoaded", playClock);