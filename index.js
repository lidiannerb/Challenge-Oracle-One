import encrypt from "./encrypt.js";

const btnCode = document.getElementById("codeButton");

function encryptingText (e) {

  e.preventDefault() 
  const string = document.getElementById("portugueseText").value;
  const encrypting = encrypt.encode(string);
  document.getElementById("codeText").innerHTML = encrypting;
}

btnCode.addEventListener("click", encryptingText);


