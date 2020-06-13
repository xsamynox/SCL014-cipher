import cipher from './cipher.js';

console.log(cipher);

//Botón entrar
document.getElementById('button-get-in').addEventListener('click', showSecretName);
//Muestra nombre secreto
function showSecretName() {
    let userName = document.getElementById('secret-name').value;
    document.getElementById('user-name').innerHTML = userName;
}
