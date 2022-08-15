const encrypt = {

  encode: function(text) {

    let showMsgEncode = "";

    for(let i = 0; i < text.length; i++){
      let newText = text[i];
      newText = text[i].replace("e", "enter").replace("i", "imes").replace("a", "ai").replace("o", "ober").replace("u", "ufat");
      
      showMsgEncode += String(newText);
      
    } return showMsgEncode;    
  },
  
  decode: function(text) {
      let newText = "";
      newText = text.replaceAll("enter", "e").replaceAll("imes", "i").replaceAll("ai", "a").replaceAll("ober", "o").replaceAll("ufat", "u");
      
     return newText;
  }
};

export default encrypt;

