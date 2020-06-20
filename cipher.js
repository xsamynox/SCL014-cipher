const cipher = {
  encode: (offset, string) => {
    let showResult = '';
    string = string.toUpperCase();
    for (let i = 0; i < string.length; i++) {
      let caracterAscii = string.charCodeAt(i);
      if (caracterAscii >= 65 && caracterAscii <= 90) {
        showResult += String.fromCharCode(((caracterAscii - 65 + parseInt(offset)) % 26) + 65);
      } else {
        showResult += string[i];
      }
    }
    return showResult;
  },
  decode: (offset, string) => {
    let showResult = '';
    string = string.toUpperCase();
    for (let i = 0; i < string.length; i++) {
      let caracterAscii = string.charCodeAt(i)
      console.log(caracterAscii);  
      if (caracterAscii >= 65 && caracterAscii <= 83) {
        showResult += String.fromCharCode(((caracterAscii - 65 - parseInt(offset) + 26) % 26) + 65);
      } else if (caracterAscii >= 84 && caracterAscii <= 90) {
        showResult += String.fromCharCode(((caracterAscii - 65 - parseInt(offset) + 26) % 26) + 65);
      } else {
        showResult += string[i];
      } 
    }
    return showResult;
  },
};

export default cipher;

/* 
0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25
A B C D E F G H I J  K  L  M  N  O  P  Q  R  S  T  U  V  W  X  Y  Z*/
