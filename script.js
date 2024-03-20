import axios from "axios";

const containerVideos = document.querySelector(".videos__container");

async function searchAndShowVideos() {
  const urlVideos = import.meta.env.PROD
    ? "https://gist.githubusercontent.com/kayoennrique/b664048f373125173acabf50c42b68c9/raw/f0ab8b97f28d65180789006a2cc04332996356fc/videos.txt"
    : "http://localhost:3000/videos";

  try {
    const searching = await axios.get(urlVideos);

    const videos = searching.data;

    videos.forEach((video) => {
      if (video.category == "") {
        throw new Error("Vídeo não tem categoria");
      }
      containerVideos.innerHTML += `
                <li class="videos__item">
                    <iframe src="${video.url}" title="${video.title}" frameborder="0" allowfullscreen></iframe>
                    <div class="descricao-video">
                        <img class="img-canal" src="${video.image} alt="Logo do Canal">
                        <h3 class="titulo-video">${video.title}</h3>
                        <p class="titulo-canal">${video.description}</p>
                        <p class="categoria" hidden>${video.category}</p>
                    </div>
                </li>
                `;
    });
  } catch (error) {
    containerVideos.innerHTML = `<p> Houve um erro ao carregar os vídeos: ${error}</p>`;
  }
}

searchAndShowVideos();

const barResearch = document.querySelector(".pesquisar__input");

barResearch.addEventListener("input", filterSearch);

function filterSearch() {
  const videos = document.querySelectorAll(".videos__item");

  if (barResearch.value != "") {
    for (let video of videos) {
      let title = video
        .querySelector(".titulo-video")
        .textContent.toLowerCase();
      let valueFilter = barResearch.value.toLowerCase();

      if (!title.includes(valueFilter)) {
        video.style.display = "none";
      } else {
        video.style.display = "block";
      }
    }
  } else {
    for (let video of videos) {
      video.style.display = "block";
    }
  }
}

const buttonCategory = document.querySelectorAll(".superior__item");

buttonCategory.forEach((button) => {
  let nameCategory = button.getAttribute("nome");
  button.addEventListener("click", () => filterByCategory(nameCategory));
});

function filterByCategory(filter) {
  const videos = document.querySelectorAll(".videos__item");
  for (let video of videos) {
    let category = video.querySelector(".categoria").textContent.toLowerCase();
    let valueFilter = filter.toLowerCase();

    if (!category.includes(valueFilter) && valueFilter != "tudo") {
      video.style.display = "none";
    } else {
      video.style.display = "block";
    }
  }
}