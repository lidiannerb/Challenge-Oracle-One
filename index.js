import encrypt from "./encrypt.js";

const btnCode = document.getElementById("codeButton");
const btnDecode = document.getElementById("decodeButton");


function encryptingText (e) {

  e.preventDefault() 

  const text = document.getElementById("text").value;
  const encrypting = encrypt.encode(text);
  document.getElementById("textCode").innerHTML = encrypting;
}
btnCode.addEventListener("click", encryptingText);


function decryptingText (e) {

  e.preventDefault() 

  const text = document.getElementById("text").value;
  const decrypting = encrypt.decode(text);
  document.getElementById("textCode").innerHTML = decrypting;
}
btnDecode.addEventListener("click", decryptingText);


const btnCopy = document.getElementById("copyText");

btnCopy.addEventListener("click", function(e) {
  let textArea = document.getElementById("textCode");
  textArea.select();
  document.execCommand('copy');
});

