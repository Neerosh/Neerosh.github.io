const menu = document.getElementById('Menu'); 
const userLang = document.documentElement.getAttribute('lang');
const indexText = document.getElementById("selectionText");
const pageURI = document.documentURI;
const clientLang = navigator.language || navigator.userLanguage; 


loadMenu();
loadIndexText();

function loadMenu(){
    let imageSRC = 'images/NerroshSpace_LogoBlack.png';
    let menuLang = clientLang;
    
    if (indexText == null || indexText == undefined) {
        imageSRC ='../images/NerroshSpace_LogoBlack.png';
        menuLang = userLang;
    }

    if (pageURI.includes('/projects')){
        imageSRC ='../../images/NerroshSpace_LogoBlack.png';
    }

    if (menuLang == "pt-BR"){
        menu.innerHTML = `
            <nav class="navbar navbar-expand-md navbar-dark">
                <div class="container-fluid">
                    <a class="navbar-brand p-0" href="/pt-BR/home"><img class="website-icon" src="${imageSRC}"/></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto">
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown">
                                <i class="bi bi-diamond-half me-1"></i>Projetos
                                </a>
                                <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                                    <li>
                                        <a class="dropdown-item" href="/pt-BR/projects/githubUserSearch"><i class="bi bi-github me-1"></i>Pesquisa de Usuários (Github)</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="/pt-BR/projects/utilitiesTID"><i class="bi bi-tools me-1"></i>Utilidades TID</a>
                                    </li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/pt-BR/resume">
                                    <i class="bi bi-person me-1"></i>Currículo
                                </a>
                            </li>
                        </ul>
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" href="/pt-BR/contact">
                                    <i class="bi bi-send me-2"></i>Contato
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>`;
        return;
    }
    
    menu.innerHTML = `
        <nav class="navbar navbar-expand-md navbar-dark">
            <div class="container-fluid">
                    <a class="navbar-brand p-0" href="/en-US/home"><img class="website-icon" src="${imageSRC}"/></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto">
                        <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown">
                            <i class="bi bi-diamond-half me-1"></i>Projects
                        </a>
                            <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                                <li>
                                    <a class="dropdown-item" href="/en-US/projects/githubUserSearch"><i class="bi bi-github me-1"></i>Github User Search</a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="/en-US/projects/utilitiesTID"><i class="bi bi-tools me-1"></i>Utilities TID</a>
                                </li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/en-US/resume">
                                <i class="bi bi-person me-1"></i>Resume
                            </a>
                        </li>
                    </ul>
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="/en-US/contact">
                                <i class="bi bi-send me-2"></i>Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>`;

}

function loadIndexText(){
    if (indexText == null || indexText == undefined) { return; }
    if (clientLang != "pt-BR"){
        document.documentElement.setAttribute("lang", "en-US");
        indexText.textContent = "Select Your Language:";
        document.getElementById("englishButton").textContent = "English (en-US)"
        document.getElementById("portugueseButton").textContent = "Portuguese (pt-BR)";
    }else{
        document.documentElement.setAttribute("lang", "pt-BR");
        indexText.textContent = "Selecione Sua Linguagem:";
        document.getElementById("englishButton").textContent = "Inglês (en-US)"
        document.getElementById("portugueseButton").textContent = "Português (pt-BR)";
    }
}