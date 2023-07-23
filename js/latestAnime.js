const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

setTimeout (lazyLoad,4900)

function lazyLoad () {
  fetch('https://api.jikan.moe/v4/seasons/now?sfw')
  .then((res) => res.json())
  .then((data) => {
    const latestAnimedata = data.data;
    const latestAnime = document.getElementById('new-anime-container');

    for (let i = 0; i < 12; i++) {
      const newAnime = latestAnimedata[i];
      const latestAnimeItem = document.createElement('div');
      
      latestAnimeItem.classList.add('card-anime'); 
      latestAnimeItem.innerHTML = `
                <div id="card-poster">
                  <a href="./detail.html?id=${newAnime.mal_id}&title=${newAnime.title}">
                    <img src="${newAnime.images.webp.large_image_url}" alt="${newAnime.title}"/>
                  </a>
                </div>
                <div class="d-flex flex-column " id="card-detail">
                    <div id="card-title"><a href="./detail.html?id=${newAnime.mal_id}&title=${newAnime.title}">${newAnime.title}</a></div>
                    <div class="d-flex align-content-start gap-1 mt-1" >
                      <div id="card-details">${newAnime.type}</div>
                      <div class="dot"></div>
                      <div id="card-details">${newAnime.duration.split("per")[0]}</div>
                    </div>
                </div>
              `;
      latestAnime.appendChild(latestAnimeItem);
    }
  });
}