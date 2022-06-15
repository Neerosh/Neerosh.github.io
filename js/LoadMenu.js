var header = document.getElementById('Menu'); 
var userLang = document.documentElement.getAttribute('lang');
var pageURI = document.documentURI;
var page = pageURI.substring(pageURI.lastIndexOf('/'));

console.log(page);
loadMenu();
markActiveLink();

function loadMenu(){
    if (userLang == "pt-BR"){
        header.innerHTML = `
            <nav class="navbar navbar-expand-md navbar-dark">
                <div class="container-xxl">
                    <a class="navbar-brand" href="/pt-BR/home">Neerosh Space</a>
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
                                        <a class="dropdown-item" href="/pt-BR/githubUserSearch"><i class="bi bi-github me-1"></i>GithubUserSearch</a>
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
            </nav>`
        return;
    }
    
    header.innerHTML = `
        <nav class="navbar navbar-expand-md navbar-dark">
            <div class="container-xxl">
                    <a class="navbar-brand" href="/en-US/home">Neerosh Space</a>
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
                                    <a class="dropdown-item" href="/en-US/githubUserSearch"><i class="bi bi-github me-1"></i>GithubUserSearch</a>
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
        </nav>`

}

function markActiveLink(){
    var activelink = document.getElementsByClassName('nav-link');
    var array = [].slice.call(activelink);
    array.forEach((element) => {
        element.classList.remove('active');
        if (element.getAttribute('href') == page){
            element.classList.add('active');
        }
    });
}