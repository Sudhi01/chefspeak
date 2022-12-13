const textinputt = document.querySelector("#txt-Input");

var cbutton = document.querySelector("#click");

var outputDiv = document.querySelector("#output");

var serverUrl="	https://api.funtranslations.com/translate/chef.json";

function translationUrl(text){
      return serverUrl+"?"+"text="+text;
}

function errorHandler(error){
    console.log("error occured",error);
}

function clickEventHandler(){
    var inputText = textinputt.value;

    fetch(translationUrl(inputText))
    .then((response) => response.json())
    .then((json) => {
        var finalText = json.contents.translated
         outputDiv.innerText =finalText;
    })

    .catch(errorHandler);
}

cbutton.addEventListener("click",clickEventHandler);
