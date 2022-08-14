const encrypt = {

    encode: function(text) {

      let showMsgCode = "";

    for(let i =0; i < text.length; i++){
      let newText = text[i];
      newText = text[i].replace("e", "enter").replace("i", "imes").replace("a", "ai").replace("o", "ober").replace("u", "ufat");
      
      showMsgCode += String(newText);
      
    } return showMsgCode;    
  } 
} 

export default encrypt;

