const containerVideos = document.querySelector(".videos__container");

const api = fetch("http://localhost:3000/videos")
.then(res => res.json())
.then((videos) =>
    videos.forEach((video)=> {
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
    })
)
.catch((error) => {
    containerVideos.innerHTML `<p> Houve um erro ao carregar os videos: ${error} </p>`;
})
