const containerVideos = document.querySelector(".videos__container");


async function seekShow() {
    try {
        const searching = await fetch("http://localhost:3000/videos");
        const videos = await searching.json();

        videos.forEach((video) => {
            if (video.category == "") {
                throw new Erro ('Vídeo não tem categoria');
            }
            containerVideos.innerHTML += `
            <li class="videos__item">
                <iframe src="${video.url}" title="${video.title}" frameborder="0" allowfullscreen></iframe>
                <div class="description-video">
                    <img class="img-chanel" src="${video.image} alt="Logo do Canal">
                    <h3 class="title-video">${video.title}</h3>
                    <p class="title-chanel">${video.description}</p>
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

seekShow();