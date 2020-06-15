const cipher = {
  // ...
};
export default cipher;
//Al hacer click en el botón Translate se muestra el resultado en la caja de la derecha.
//Declarando a variables el número de offset.
document.getElementById('translate').addEventListener('click', showTranslate);
let showResult = '';

function showTranslate() {
  let offset4 = document.getElementById('offset4').value;
  let text = document.getElementById('text').value;
  text = text.toUpperCase();
   for (let i = 0; i < text.length; i++) {
    let caracterAscii = text.charCodeAt(i);
      showResult += String.fromCharCode((caracterAscii - 65 + parseInt(offset4)) % 26 + 65); 
    console.log(showResult);
}
  document.getElementById('text-area-right').innerHTML = showResult;
}

/* 
0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25
A B C D E F G H I J  K  L  M  N  O  P  Q  R  S  T  U  V  W  X  Y  Z*/