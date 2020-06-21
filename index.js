import cipher from './cipher.js';

console.log(cipher);

//Agregando un evento al botón entrar
document.getElementById('button-get-in').addEventListener('click', showSecretName);

//Mostrar Alias del usuario.
function showSecretName() {
  let userName = document.getElementById('secret-name').value;
  document.getElementById('user-name').innerHTML = userName;
  document.getElementById('login').classList.add('not-visible'); //Oculta la pantalla de Login.
  document.getElementById('screen-cipher').classList.remove('not-visible'); //Muestra pantalla Cipher.
  document.getElementById('header').classList.remove('not-visible'); //Muestra el header.
  document.getElementById('translate').classList.remove('not-visible'); //Mostrando el botón de Codificar.
  document.getElementById('translate2').classList.add('not-visible'); //Ocultando el botón de Decifrar
  document.getElementById('footer').classList.remove('not-visible');
}

//Mostrar pantallas resultados
//Botón texto simple
document.getElementById('btn-simple-text').addEventListener('click', showEncode);

function showEncode() {
  document.getElementById('decode').classList.add('not-visible');
  document.getElementById('encode').classList.remove('not-visible');
  document.getElementById('translate2').classList.add('not-visible');
  document.getElementById('translate').classList.remove('not-visible');
}

//Al hacer click en el botón Translate se muestra el resultado de codificar, en la caja de la derecha.
document.getElementById('translate').addEventListener('click', () => {
  let offset = document.getElementById('offset').value;
  let string = document.getElementById('string').value;
  document.getElementById('text-area-right').innerHTML = cipher.encode(offset, string);
});

//Copiar valor de textarea.
document.getElementById('copy').addEventListener('click', copy);

function copy() {
  let textarea = document.getElementById("text-area-right");
  textarea.select();
  document.execCommand("copy");
  let textarea2 = document.getElementById("text-area-right2");
  textarea2.select();
  document.execCommand("copy");
}

//Botón texto codificado
document.getElementById('btn-cipher-text').addEventListener('click', showDecode);

function showDecode() {
  document.getElementById('encode').classList.add('not-visible');
  document.getElementById('decode').classList.remove('not-visible');
  document.getElementById('translate2').classList.remove('not-visible');
  document.getElementById('translate').classList.add('not-visible');
}

//Al hacer click en el botón Translate se muestra el resultado de decodificar, en la caja de la derecha.
document.getElementById('translate2').addEventListener('click', () => {
  let offset = document.getElementById('offset').value;
  let string = document.getElementById('string').value;
  document.getElementById('text-area-right2').innerHTML = cipher.decode(offset,string);
});
