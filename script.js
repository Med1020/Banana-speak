const btn = document.querySelector('.btn-translate')
var textInput = document.querySelector('#input') 
var outputText = document.querySelector('.output')
var error = document.querySelector('.error')
var serverURL = "https://api.funtranslations.com/translate/minion.json"

const getTranslationURL=(text)=>{
    return serverURL+"?text="+text
}

const errorHandler=(error)=>{
    console.log("Error has occured:", error)
}

btn.addEventListener('click',()=>{
    var text = textInput.value
    if(text){

        fetch(getTranslationURL(text))
        .then(response =>response.json())
        .then(json => outputText.innerText = json.contents.translated)
        .catch(errorHandler)
    }
    else{
        error.innerText='* Please enter some text here'
    }

})
