const main = document.getElementById('main');
const userLang = document.documentElement.getAttribute('lang'); 

getRepositories();

async function getRepositories(){
    const ApiUrl = 'https://api.github.com/users/Neerosh/repos'
    const resp = await fetch(ApiUrl);
    const respData = await resp.json();
    //console.log(respData);
    createCard(respData)
}

function createCard(repositories){
    repositories.sort(function(a, b){
        const date1 = new Date(a.pushed_at)
        const date2 = new Date(b.pushed_at)
        //order dates recent to older
        return date2 - date1;
    }).forEach((repo) => {
        const datePushed = new Date (`${repo.pushed_at}`);
        const options = { day:"numeric", year:"numeric", month:"short", hour:"numeric",minute:"numeric"};
        let dateDiffText = '';
        let description = '';
        let cardHTML = '';

        if (repo.description != null){
            description = repo.description;
        }

        if (userLang != "pt-BR"){
            dateDiffText = datePushed.toLocaleDateString('en-US', options);
            cardHTML =`
            <div class="col-md-6 col-lg-4">
                <div class="card text-dark h-100">
                    <div class="card-body d-flex align-items-start flex-column">
                        <h5 class="card-title">${repo.name}</h5>
                        <p class="card-text mb-auto">${description}</p>
                        <a href="${repo.html_url}" class="btn btn-primary mt-2"><i class="bi bi-github me-1"></i>Repository</a>
                    </div>
                    <div class="card-footer text-muted">Last updated ${dateDiffText}
                    </div>
                </div>
            </div>
            `;
        }else{
            dateDiffText = datePushed.toLocaleDateString('pt-BR', options);
            cardHTML =`
            <div class="col-md-6 col-lg-4">
                <div class="card text-dark h-100">
                    <div class="card-body d-flex align-items-start flex-column">
                        <h5 class="card-title">${repo.name}</h5>
                        <p class="card-text mb-auto">${description}</p>
                        <a href="${repo.html_url}" class="btn btn-primary mt-2"><i class="bi bi-github me-1"></i>Repositório</a>
                    </div>
                    <div class="card-footer text-muted">Ultima Atualização ${dateDiffText}
                    </div>
                </div>
            </div>
            `;
        }
        main.innerHTML += cardHTML;
    });

}