//Programa que genera un numero aleatorio y hay que adivinarlo
function numeroAleatorio(min,max){
  return Math.floor(Math.random() * (max - min) + min);
}

//Declarar variables para los intentos y para el numero aleatorio
let numIntentos = 0;
const numAleatorio = numeroAleatorio(1,100);


//Funcion que se encarga de averiguar si el numero introducido es el numero aleatorio
function averiguarNum(){
  const num = document.getElementById('numero').value;    //Captura el numero introducido
  if(num > numAleatorio)
  {
    borrarNumero();
    document.getElementById("cont0").style.backgroundColor = "red";
    document.getElementById("cont0").style.color = "black";
    document.getElementById('cont0').innerHTML='¡INCORRECTO!';
    document.getElementById('cont1').innerHTML='¡El numero es muy grande!';
    document.MyForm.MyTextbox('numero').value='prueba';
    numIntentos++;

  }
  else if (num < numAleatorio) {
    borrarNumero();
    document.getElementById("cont0").style.backgroundColor = "red";
    document.getElementById("cont0").style.color = "black";
    document.getElementById('cont0').innerHTML='¡INCORRECTO!';
    document.getElementById('cont1').innerHTML='¡El numero es muy bajo!';
    numIntentos++;
  }
  else if (num == numAleatorio) {
    borrarNumero();
    document.getElementById("cont0").style.backgroundColor = "green";
    document.getElementById("cont0").style.color = "black";
    document.getElementById('cont0').innerHTML='¡FELICIDADES!';
    document.getElementById('cont1').innerHTML='¡LO HAS ADIVINADO!';
    document.getElementById('cont2').innerHTML='Has tenido un total de ' + numIntentos + ' intentos';
  }
  else
  {
    borrarNumero();
    document.getElementById('cont0').innerHTML='Introduce numero del 1 al 100';
  }
}

//Funcion que se encarga de eliminar el numero introducido cada vez que se le da a comprobar
function borrarNumero(){
  var inputNombre = document.getElementById("numero");
  inputNombre.value = "";
}
