//let userLang = document.documentElement.getAttribute('lang');
const rowCardsRepository = document.getElementById('RowCardsRepository');
const rowCardUser = document.getElementById('RowCardUser');
const searchButton = document.getElementById('ButtonSearch');
const usernameInput = document.getElementById('UsernameSearch');

//functions
usernameInput.addEventListener('keypress', function(event) {
    if (event.key === "Enter") {
      // Cancel the default action, if needed
      event.preventDefault();
      searchButton.click();
    }
  });

async function clickButtonSearch(){
    cleanRowCardUser();
    cleanRowCardsRepository();

    createPlaceholderCardUser();
    createPlaceholderCardsRepository();

    let username = document.getElementById('UsernameSearch').value;
    const user = await getUser(username);
    if (user == undefined){
        cleanRowCardUser();
        cleanRowCardsRepository();
        createAlertUser();
        return;
    }

    createCardUser(user);
    cleanPlaceholderCardUser();

    const repositories = await getRepositories(username);
    if (repositories == undefined){
        cleanRowCardUser();
        cleanRowCardsRepository();
        return;
    }

    createCardRepository(repositories);
    cleanPlaceholderCardsRepository();
}

function createPlaceholderCardUser(){
    rowCardUser.removeAttribute('hidden');
    rowCardUser.innerHTML = `
    <div class="col-md-8 mx-auto" name="placeholderCardUser">
        <div class="card text-bg-dark border-light h-100">
            <div class="card-body">
                <div class="d-flex align-items-start justify-content-left">
                    <img class="col-3 col-md-2 me-3 user-profile">
                    <div class="w-100">
                        <h3 class="card-title placeholder-glow">
                        <span class="placeholder col-8"></span>
                        </h3>
                        <p class="card-text mb-auto placeholder-glow">
                        <span class="placeholder col-8"></span>
                        <span class="placeholder col-8"></span>
                        </p>
                        <a href="#" class="btn btn-primary disabled mt-2 placeholder col-4"></a>
                    </div>
                </div>
            </div>
        </div>
    </div>`;
}
function createPlaceholderCardsRepository(){
    rowCardsRepository.removeAttribute('hidden');
    let placeholderCard = `
    <div class="col-md-6 col-lg-4" name="placeholderCardsRepository">
        <div class="card text-dark h-100">
            <div class="card-body">
                <h5 class="card-title placeholder-glow">
                <span class="placeholder col-6"></span>
                </h5>
                <p class="card-text mb-auto placeholder-glow">
                <span class="placeholder col-12"></span>
                <span class="placeholder col-12"></span>
                </p>
                <a href="#" class="btn btn-primary disabled mt-2 placeholder col-4"></a>
            </div>
            <div class="card-footer placeholder-glow">
                <small class="placeholder col-12"></small>
            </div>
        </div>
    </div>`;

    for (let i = 0; i < 9; i++){
        rowCardsRepository.innerHTML += placeholderCard
    }
}

async function getRepositories(username){
    const request = 'https://api.github.com/users/'+username+'/repos'
    const response = await fetch(request);
    const repositoriesJSON = await response.json();
    if (repositoriesJSON == undefined || repositoriesJSON == null){
        return undefined;
    }
    return repositoriesJSON;
    /*console.log(respData);
    if (repositoriesJSON != undefined && repositoriesJSON != null){
        createCardRepository(repositoriesJSON);
        cleanPlaceholderCardsRepository();
    }*/
}
function createCardRepository(repositoriesJSON){
    var array = [].slice.call(repositoriesJSON);
    array.sort(function(a, b){
        let date1 = new Date(a.pushed_at)
        let date2 = new Date(b.pushed_at)
        //order dates recent to older
        return date2 - date1;
    }).forEach((repository) => {
        let datePushed = new Date (repository.pushed_at);
        let options = { day:"numeric", year:"numeric", month:"short", hour:"numeric",minute:"numeric"};
        let dateDiffText = '';
        let description = '';
        let cardHTML = '';

        if (repository.description != null){
            description = repository.description;
        }

        if (userLang == "pt-BR"){
            dateDiffText = datePushed.toLocaleDateString('pt-BR', options);
            cardHTML =`
            <div class="col-md-6 col-xl-4">
                <div class="card text-dark h-100">
                    <div class="card-body d-flex align-items-start flex-column">
                        <h5 class="card-title">${repository.name}</h5>
                        <p class="card-text mb-auto">${description}</p>
                        <a href="${repository.html_url}" class="btn btn-primary mt-2"><i class="bi bi-folder2-open me-1"></i>Repositório</a>
                    </div>
                    <div class="card-footer text-muted">
                        <small>Última atualização em ${dateDiffText}</small>
                    </div>
                </div>
            </div>`;
            rowCardsRepository.innerHTML += cardHTML;
            return;
        }

        dateDiffText = datePushed.toLocaleDateString('en-US', options);
        cardHTML =`
        <div class="col-md-6 col-lg-4">
            <div class="card text-dark h-100">
                <div class="card-body d-flex align-items-start flex-column">
                    <h5 class="card-title">${repository.name}</h5>
                    <p class="card-text mb-auto">${description}</p>
                    <a href="${repository.html_url}" class="btn btn-primary mt-2"><i class="bi bi-folder2-open me-1"></i>Repository</a>
                </div>
                <div class="card-footer text-muted">
                   <small>Last updated on ${dateDiffText}</small>
                </div>
            </div>
        </div>`;
        rowCardsRepository.innerHTML += cardHTML;
    });

}
function cleanPlaceholderCardsRepository(){
    const placeholder = document.getElementsByName('placeholderCardsRepository');

    while (placeholder.length > 0) {
        let el = placeholder[0];
        el.parentNode.removeChild(el);
     }
}
function cleanRowCardsRepository(){
    rowCardsRepository.innerHTML = '';
}

async function getUser(username){
    const request = 'https://api.github.com/users/'+username
    const response = await fetch(request);
    const userJSON = await response.json();
    if (userJSON == undefined || userJSON == null || userJSON.name == undefined){
        return undefined;
    }
    return userJSON;
    /*console.log(respData);
    if (userJSON != undefined && userJSON != null){
        createCardUser(userJSON);
        cleanPlaceholderCardUser();
    }*/
}
function createCardUser(userJSON){
    //let lastUpdatedDate = new Date(userJSON.updated_at);
    //let options = { day:"numeric", year:"numeric", month:"short", hour:"numeric",minute:"numeric"};
    let bio = '';
    let cardHTML = '';

    if (userJSON.bio != null){
        bio = userJSON.bio;
    }

    if (userLang == "pt-BR"){
        //lasUpdatedDateText = lastUpdatedDate.toLocaleDateString('pt-BR', options);
        cardHTML =
        `<div class="col-md-8 mx-auto">
            <div class="card text-bg-dark border-light h-100">
                <div class="card-body">
                    <div class="d-flex align-items-start justify-content-left">
                        <img src="${userJSON.avatar_url}" class="col-3 col-md-2 me-3 user-profile">
                        <div class="">
                            <h3 class="card-title">${userJSON.name}</h3>
                            <p class="card-text mb-1">${bio}</p>
                            <a href="${userJSON.html_url}" class="btn btn-primary mt-2"><i class="bi bi-github me-1"></i>Perfil</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
        rowCardUser.innerHTML += cardHTML;
        return;
    }

    //lasUpdatedDateText = lastUpdatedDate.toLocaleDateString('en-US', options);
    cardHTML =
    `<div class="col-md-8 mx-auto">
        <div class="card text-bg-dark border-light h-100">
            <div class="card-body">
                <div class="d-flex align-items-start justify-content-left">
                    <img src="${userJSON.avatar_url}" class="col-3 col-md-2 me-3 user-profile">
                    <div class="">
                        <h3 class="card-title">${userJSON.name}</h3>
                        <p class="card-text mb-1">${bio}</p>
                        <a href="${userJSON.html_url}" class="btn btn-primary mt-2"><i class="bi bi-github me-1"></i>Profile</a>
                    </div>
                </div>
            </div>
        </div>
    </div>`;
    rowCardUser.innerHTML += cardHTML;
}
function cleanPlaceholderCardUser(){
    let placeholder = document.getElementsByName('placeholderCardUser');

    while (placeholder.length > 0) {
        let el = placeholder[0];
        el.parentNode.removeChild(el);
    }
}
function cleanRowCardUser(){
    rowCardUser.innerHTML = '';
}
function createAlertUser(){
    if (userLang == "pt-BR"){
        rowCardUser.innerHTML =`
        <div class="col-md-8 mx-auto">
            <div class="alert alert-dismissible alert-light" role="alert">
                Usuário não encontrado. Verifique se o usuário digitado está correto.
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        </div>`;
    }else{
        rowCardUser.innerHTML =`
        <div class="col-md-8 mx-auto">
            <div class="alert alert-dismissible alert-light" role="alert">
                User not found. Check if the entered name is correct.
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        </div>`;     
    }
}