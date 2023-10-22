const containerVideos = document.querySelector(".videos__container");


async function searchAndShowVideos() {
    try {
        const searching = await fetch("http://localhost:3000/videos");
        const videos = await searching.json();

        videos.forEach((video) => {
            if (video.category == "") {
                throw new Erro('Vídeo não tem categoria');
            }
            containerVideos.innerHTML += `
            <li class="videos__item">
                <iframe src="${video.url}" title="${video.title}" frameborder="0" allowfullscreen></iframe>
                <div class="description-video">
                    <img class="img-chanel" src="${video.image} alt="Logo do Canal">
                    <h3 class="title-video">${video.title}</h3>
                    <p class="title-chanel">${video.description}</p>
                    <p class="category" hidden>${video.category}</p>
                </div>
            </li>
            `;
        });
    } catch (error) {
        containerVideos.innerHTML = `<p> Houve um erro ao carregar os vídeos: $[error]</p>`
    } finally {
        alert('Isso sempre acontece')
    }
}

searchAndShowVideos();

const barResearch = document.querySelector(".search__input");

barResearch.addEventListener("input", filterSearch);

function filterSearch(){
    const videos = document.querySelectorAll(".videos__item");

    if(barResearch.value != ""){
        for(let video of videos){
            let title = video.querySelector(".title-video").textContent.toLowerCase();
            let valueFilter = barResearch.value.toLowerCase();

            if(!title.includes(valueFilter)){
                video.style.display = "none";
            } else {
                video.style.display = "block";
            }

        }
    } else {
        videos.forEach(video => video.style.display = 'block');
}
}

const buttonCategory = document.querySelectorAll(".higher__item");

buttonCategory.forEach((botao) => {
    let nameCategory = botao.getAttribute("name");
    botao.addEventListener("click", () => filterCategory(nameCategory));
})

function filterCategory(filter){
    const videos = document.querySelectorAll(".videos__item");
    for(let video of videos){
        let category = video.querySelector(".category").textContent.toLowerCase();
        let valueFilter = filter.toLowerCase();

        if(!category.includes(valueFilter) && valueFilter != 'tudo'){
            video.style.display = "none";
        } else {
            video.style.display = "block";
        }
    }
}
