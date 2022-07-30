const rowCardsRepository = document.getElementById('RowCardsRepository');
const rowCardUser = document.getElementById('RowCardUser');
getRepositories();
getUser();


//functions
async function getRepositories(){
    const request = 'https://api.github.com/users/Neerosh/repos'
    const response = await fetch(request);
    const repositoriesJSON = await response.json();
    //console.log(respData);
    if (repositoriesJSON != undefined && repositoriesJSON != null){
        createCardRepository(repositoriesJSON);
        cleanPlaceholderCardsRepository();
    }
}
function createCardRepository(repositories){
    let array = [].slice.call(repositories);
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
                <div class="card custom-card-dark h-100">
                    <div class="card-body d-flex align-items-between flex-column">
                        <h5 class="card-title">${repository.name}</h5>
                        <p class="card-text mb-auto">${description}</p>
                        <div>
                            <a href="${repository.html_url}" class="btn btn-primary mt-2"><i class="bi bi-folder2-open me-1"></i>Repositório</a>
                        </div>
                    </div>
                    <div class="card-footer custom-card-dark">
                        <small>Última atualização em ${dateDiffText}</small>
                    </div>
                </div>
            </div>
            `;
            rowCardsRepository.innerHTML += cardHTML;
            return;
        }

        dateDiffText = datePushed.toLocaleDateString('en-US', options);
        cardHTML =`
        <div class="col-md-6 col-lg-4">
            <div class="card custom-card-dark h-100">
                <div class="card-body d-flex align-items-between flex-column">
                    <h5 class="card-title">${repository.name}</h5>
                    <p class="card-text mb-auto">${description}</p>
                    <div>
                        <a href="${repository.html_url}" class="btn btn-primary mt-2"><i class="bi bi-folder2-open me-1"></i>Repository</a>
                    </div>
                </div>
                <div class="card-footer custom-card-dark">
                   <small>Last updated on ${dateDiffText}</small>
                </div>
            </div>
        </div>
        `;
        rowCardsRepository.innerHTML += cardHTML;
    });

}
function cleanPlaceholderCardsRepository(){
    let placeholder = document.getElementsByName('placeholderCardsRepository');

    while (placeholder.length > 0) {
        let el = placeholder[0];
        el.parentNode.removeChild(el);
     }
}

async function getUser(){
    const request = 'https://api.github.com/users/Neerosh'
    const response = await fetch(request);
    const userJSON = await response.json();
    //console.log(respData);
    if (userJSON != undefined && userJSON != null){
        createCardUser(userJSON);
        cleanPlaceholderCardUser();
    }
}
function createCardUser(user){
    //let lastUpdatedDate = new Date(user.updated_at);
    //let options = { day:"numeric", year:"numeric", month:"short", hour:"numeric",minute:"numeric"};
    let bio = '';
    let cardHTML = '';

    if (user.bio != null){
        bio = user.bio;
    }

    if (userLang == "pt-BR"){
        //lasUpdatedDateText = lastUpdatedDate.toLocaleDateString('pt-BR', options);
        cardHTML =
        `<div class="col-md-8 mx-auto">
            <div class="card custom-card-dark h-100">
                <div class="card-body">
                    <div class="d-flex flex-wrap align-items-between justify-content-left">
                        <img src="${user.avatar_url}" class="col-4 col-sm-3 col-lg-2 me-3 user-profile">
                        <div class="">
                            <h3 class="card-title">${user.name}</h3>
                            <p class="card-text mb-1">${bio}</p>
                            <a href="${user.html_url}" class="btn btn-primary mt-2"><i class="bi bi-github me-1"></i>Perfil</a>
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
        <div class="card custom-card-dark h-100">
            <div class="card-body">
                <div class="d-flex flex-wrap align-items-between justify-content-left">
                    <img src="${user.avatar_url}" class="col-4 col-sm-3 col-lg-2 me-3 user-profile">
                    <div class="">
                        <h3 class="card-title">${user.name}</h3>
                        <p class="card-text mb-1">${bio}</p>
                        <a href="${user.html_url}" class="btn btn-primary mt-2"><i class="bi bi-github me-1"></i>Profile</a>
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