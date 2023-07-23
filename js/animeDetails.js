const getGenres = function(genreList) {
  const newGenreList = [];

  for (const { name } of genreList) newGenreList.push(name);

  return newGenreList.join('<div class="dot"></div>');
};

const getProducers = function(producersList) {
  const newProducersList = [];

  for (const { name } of producersList) newProducersList.push(name);

  return newProducersList.join(', ');
};

const getLicensors = function(licensorsList) {
  const newLicensorsList = [];

  for (const { name } of licensorsList) newLicensorsList.push(name);

  return newLicensorsList.join(', ');
};

const getStudios = function(studiosList) {
  const newStudiosList = [];

  for (const { name } of studiosList) newStudiosList.push(name);

  return newStudiosList.join(', ');
};

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

fetch(`https://api.jikan.moe/v4/anime/${id}/full`)
.then((res) => res.json())
.then((data) => {
  const animeData = data.data;
  const infoContainer = document.querySelector('[page-content]');
  document.title = `${animeData.title_english}`

  const animeItem = document.createElement('div');
  animeItem.classList.add('ani-detail-section'); 
  animeItem.innerHTML = `
  <div class="container-fluid ani-container">
  <div class="ani-cover-wrap">
    <div class="ani-cover" style="background-image: url(${animeData.images.webp.large_image_url});"></div>
  </div>
  <div class="ani-content">
    <div class="ani-poster">
      <div class="film-poster">
        <img src="${animeData.images.webp.large_image_url}" alt="${animeData.title_english}">
      </div>
    </div>
    <div class="anisc-detail">
      <h3 class="text-capitalize" id="ani-title">${animeData.title_english}</h2>
      <div class="d-flex align-content-start gap-1">
        <div id="card-details">${animeData.type}</div>
        <div class="dot"></div>
        <div id="card-details">${animeData.duration.split("per")[0]}</div>
        <div class="dot"></div>
        <div id="card-details"><i class="fa-solid fa-star me-1" style="color:#ffdd95;"></i>${animeData.score}</div>
      </div>
      <div class="d-flex align-content-start gap-1 mt-3">
        <div>${animeData.rating.split(" ")[0]}</div>
        <div class="dot"></div>
        <p class="ani-genres">${getGenres(animeData.genres)}</p>
      </div>
      <div class="ani-synopsis">
        <div>${animeData.synopsis}</div>
      </div>
    </div>
    <div class="ani-info-wrap">
      <div class="ani-info">
        <div class="item-title">
          <span class="me-3 fw-bold">Japanese:</span>
          <span>${animeData.title_japanese}</span>
        </div>
        <div class="item-title">
          <span class="me-3 fw-bold">Synonyms:</span>
          <span>${animeData.title_synonyms[0]}</span>
        </div>
        <div class="item-title">
          <span class="me-3 fw-bold">Aired:</span>
          <span>${animeData.aired.string}</span>
        </div>
        <div class="item-title">
          <span class="me-3 fw-bold">Premiered:</span>
          <span>${animeData.season} ${animeData.year}</span>
        </div>
        <div class="item-title">
          <span class="me-3 fw-bold">Duration:</span>
          <span>${animeData.duration.split("per")[0]}</span>
        </div>
        <div class="item-title">
          <span class="me-3 fw-bold">Status:</span>
          <span>${animeData.status}</span>
        </div>
        <div class="item-title">
          <span class="me-3 fw-bold">Rating:</span>
          <span>${animeData.rating}</span>
        </div>
        <div class="item-title">
          <span class="me-3 fw-bold">Score:</span>
          <span><i class="fa-solid fa-star me-2" style="color: #ffdd95;"></i>${animeData.score}</span>
        </div>
        <div class="item-title">
          <span class="me-3 fw-bold">Rank:</span>
          <span> # ${animeData.rank}</span>
        </div>
        <div class="item-title">
          <span class="me-3 fw-bold">Popularity:</span>
          <span> # ${animeData.popularity}</span>
        </div>
        <div class="item-title">
          <span class="me-3 fw-bold">Producers:</span>
          <span>${getProducers(animeData.producers)}</span>
        </div>
        <div class="item-title">
          <span class="me-3 fw-bold">Licensors:</span>
            <span>${getLicensors(animeData.licensors)}</span>
          </div>
        <div class="item-title">
          <span class="me-3 fw-bold">Studios:</span>
          <span>${getStudios(animeData.studios)}</span>
        </div>
      </div>
    </div>
  </div>
</div>
            `;
            infoContainer.appendChild(animeItem);
  const videoWrapper = document.querySelector('[trailer-wrapper]');
  const video = document.createElement('div');
  video.innerHTML = `
  <iframe src="${animeData.trailer.embed_url}" width="560" height="315" id="anime-trailer" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

  `;
  videoWrapper.appendChild(video);
});

fetch(`https://api.jikan.moe/v4/anime/${id}/characters`)
.then((res) => res.json())
.then((data) => {
  const charAniData = data.data;
  console.log(charAniData)
  const charInfoContainer = document.querySelector('[char-content]');

  for (let i = 0; i < 8; i++) {
    const charAni = charAniData[i];
    const charCard = document.createElement('div');
    charCard.classList.add('card-char')
    charCard.innerHTML=`
            <div class="char-img">
              <img src="${charAni.character.images.webp.image_url}" alt="${charAni.name}"/>
            </div>
            <div class="char-detail">
              <p>${charAni.character.name}</p>
              <p>${charAni.role}</p>
            </div>
  `;
    charInfoContainer.appendChild(charCard);
  }
});


fetch(`https://api.jikan.moe/v4/anime/${id}/recommendations`)
.then((res) => res.json())
.then((data) => {
    const recomAnimedata = data.data;
    const recomAnimeWrapper = document.querySelector('[recommendation-wrapper]');

    for (let i = 0; i < 21; i++) {
      const recomAnime = recomAnimedata[i];
      const recomAnimeItem = document.createElement('div');
      recomAnimeItem.classList.add('card-anime', 'recom-card'); 
      recomAnimeItem.innerHTML = `
                <div id="card-poster">
                  <a href="./detail.html?id=${recomAnime.entry.mal_id}&title=${recomAnime.entry.title}">
                    <img src="${recomAnime.entry.images.webp.large_image_url}" alt="${recomAnime.entry.title}"/>
                  </a>
                </div>
                <div class="d-flex flex-column " id="card-detail">
                    <div id="card-title"><a href="./detail.html?id=${recomAnime.entry.mal_id}&title=${recomAnime.entry.title}">${recomAnime.entry.title}</a></div>
                </div>
              `;
      recomAnimeWrapper.appendChild(recomAnimeItem);
    }
  });
