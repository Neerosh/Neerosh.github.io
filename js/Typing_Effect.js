var i = 0;
var speed = 40; /* The speed/duration of the effect in milliseconds */
var userLang = document.documentElement.lang; 
var txt = "string fullName = \"Pedro Henrique Iatarola\";<br><br>\
           string[ ] skills = {\"C\", \"C#\", \"Java\", \"Clarion\", \"HTML\", \"CSS\", \"PHP\", \"Android\", \"SQL\"};<br><br>\
           string[ , ] projects = { {\"UtilitiesTID\",\"Set of tools and utilities to speed up work as a Clarion desktop programmer.\"},<br>\
                                    {\"StreamScheduler\",\"Scheduler for live broadcasts from Youtube, using Youtube's API.\"},<br>\
                                    {\"Neerosh.github.io\", \"Portfolio website made with bootstrap.\"} };<br>"
if (userLang == "pt-BR"){
  txt = "string nomeCompleto = \"Pedro Henrique Iatarola\";<br><br>\
         string[ ] habilidades = {\"C\", \"C#\", \"Java\", \"Clarion\", \"HTML\", \"CSS\", \"PHP\", \"Android\", \"SQL\"};<br><br>\
         string[ , ] projetos = { {\"UtilitiesTID\",\"Conjunto de ferramentas e utilidades para agilizar meu trabalho como programador desktop Clarion.\"},<br>\
                                  {\"StreamScheduler\",\"Agendador de transmissões ao vivo do Youtube, usando a API do Youtube.\"},<br>\
                                  {\"Neerosh.github.io\", \"Site portfólio feito usando bootstrap.\"} };<br>"
}
typeWriter();

/*var txtForm = "<div class=\"col-6 mt-3\">\
                <div class=\"input-group mb-3\">\
                <span class=\"input-group-text\">Full Name</span>\
                <input type=\"text\" class=\"form-control\" placeholder=\"Pedro Henrique Iatarola\" aria-label=\"Pedro Henrique Iatarola\">\
                </div>\
               </div>"*/

/*g = document.createElement("div");
g.innerHTML += txtForm
document.getElementById("programmingText").appendChild(g);*/

function typeWriter() {
  if (i < txt.length) {
    if (txt.substring(i,i+4) == "<br>") {
      document.getElementById("programmingText").innerHTML += "<br>"
      i += 3;
    }else{
      switch(txt.substring(i,i+6)){
        case "&emsp;":
          document.getElementById("programmingText").innerHTML += "&emsp;"
          i += 5;
          break;
        case "&ensp;":
          document.getElementById("programmingText").innerHTML += "&ensp;"
          i += 5;
          break;
        case "&nbsp;":
          document.getElementById("programmingText").innerHTML += "&nbsp;"
          i += 5;
          break;
        default:
          document.getElementById("programmingText").innerHTML += txt.charAt(i);
          break;
      }
    }
    i++;
    /*if (i == txt.length){
      document.getElementById("programmingText").innerHTML += txtForm;
    }*/
    setTimeout(typeWriter, speed);
  }
}