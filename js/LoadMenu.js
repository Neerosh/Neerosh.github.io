const menu = document.getElementById('Menu'); 
const userLang = document.documentElement.getAttribute('lang');
const pageURI = document.documentURI;
let page = pageURI.substring(pageURI.lastIndexOf('/'));

if (page.endsWith('.html')){
    page = page.substring(1,page.lastIndexOf('.'));
}

loadMenu();
markActiveLink();

if (page == 'index' || page =='/'){
    loadIndexText();
}


function loadMenu(){
    let imageSRC ='../images/NerroshSpace_LogoBlack.png';
    if(page == 'index'){
        imageSRC = 'images/NerroshSpace_LogoBlack.png';
    }
    if (userLang == "pt-BR"){
        menu.innerHTML = `
            <nav class="navbar navbar-expand-md navbar-dark">
                <div class="container-xxl">
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
                                        <a class="dropdown-item" href="/pt-BR/project_githubUserSearch"><i class="bi bi-github me-1"></i>GithubUserSearch</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="/pt-BR/project_utilitiesTID"><i class="bi bi-tools me-1"></i>UtilitiesTID</a>
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
            <div class="container-xxl">
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
                                    <a class="dropdown-item" href="/en-US/project_githubUserSearch"><i class="bi bi-github me-1"></i>GithubUserSearch</a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="/en-US/project_utilitiesTID"><i class="bi bi-tools me-1"></i>UtilitiesTID</a>
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

function markActiveLink(){
    let activelink = document.getElementsByClassName('nav-link');
    let array = [].slice.call(activelink);
    array.forEach((element) => {
        element.classList.remove('active');
        if (element.getAttribute('href') == page){
            element.classList.add('active');
        }
    });
}

function loadIndexText(){
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
}