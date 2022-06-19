var userLang = navigator.language || navigator.userLanguage; 

if (userLang != "pt-BR"){
    document.documentElement.setAttribute("lang", "en-US");
    document.getElementById("selectionText").textContent = "Select Your Language:";
    document.getElementById("englishButton").textContent = "English (en-US)"
    document.getElementById("portugueseButton").textContent = "Portuguese (pt-BR)";
}else{
    document.documentElement.setAttribute("lang", "pt-BR");
    document.getElementById("selectionText").textContent = "Selecione Sua Linguagem:";
    document.getElementById("englishButton").textContent = "Inglês (en-US)"
    document.getElementById("portugueseButton").textContent = "Português (pt-BR)";
}