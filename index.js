import cipher from './cipher.js';

console.log(cipher);

//Agregando un evento al botón entrar
document
  .getElementById('button-get-in')
  .addEventListener('click', showSecretName);
//Mostrar nombre secreto
function showSecretName() {
  let userName = document.getElementById('secret-name').value;
  document.getElementById('user-name').innerHTML = userName;
  document.getElementById('login').classList.add('not-visible');
  document.getElementById('screen-cipher').classList.remove('not-visible');
  document.getElementById('header').classList.remove('not-visible');
  document.getElementById('btn-simple-text').classList.add('not-visible');
}

//Mostrar pantallas resultados
//Botón texto simple
document
  .getElementById('btn-simple-text')
  .addEventListener('click', showEncode);

function showEncode() {
  document.getElementById('decode').classList.add('not-visible');
  document.getElementById('encode').classList.remove('not-visible');
  document.getElementById('btn-cipher-text').classList.remove('not-visible');
  document.getElementById('btn-simple-text').classList.add('not-visible');
}

//Al hacer click en el botón Translate se muestra el resultado de codificar, en la caja de la derecha.
document.getElementById('translate').addEventListener('click', () => {
  let offset = document.getElementById('offset').value;
  let string = document.getElementById('string').value;
  document.getElementById('text-area-right').innerHTML = cipher.encode(
    offset,
    string
  );
});

//Botón texto codificado
document
  .getElementById('btn-cipher-text')
  .addEventListener('click', showDecode);

function showDecode() {
  document.getElementById('encode').classList.add('not-visible');
  document.getElementById('decode').classList.remove('not-visible');
  document.getElementById('btn-cipher-text').classList.add('not-visible');
  document.getElementById('btn-simple-text').classList.remove('not-visible');
}

//Al hacer click en el botón Translate se muestra el resultado de decodificar, en la caja de la derecha.
document.getElementById('translate2').addEventListener('click', () => {
  let offset = document.getElementById('offset').value;
  let string = document.getElementById('string').value;
  document.getElementById('text-area-right2').innerHTML = cipher.decode(
    offset,
    string
  );
});
