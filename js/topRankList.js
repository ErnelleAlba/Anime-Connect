setTimeout (lazyLoad,2900);

function lazyLoad () {
  fetch('https://api.jikan.moe/v4/top/anime?sfw')
  .then((res) => res.json())
  .then((data) => {
    const topRankAnimedata = data.data;
    const topRankAnime = document.getElementById('top-ranking-table');

    for (let i = 0; i < 5; i++) {
      const topAnime = topRankAnimedata[i];
      const topRankAnimeItem = document.createElement('li');
      let num = i+1;
      
      topRankAnimeItem.classList.add('d-flex','table-item'); 
      topRankAnimeItem.innerHTML = `
              <div class="my-auto me-4" id="table-number">0${num}</div>
              <a href="./detail.html?id=${topAnime.mal_id}&title=${topAnime.title}">
                <img src="${topAnime.images.jpg.image_url}" id="small-poster-img" alt="${topAnime.title}"/>
              </a>
              <div class="d-flex flex-column my-auto ms-3">
                <div><a href="./detail.html?id=${topAnime.mal_id}&title=${topAnime.title}" id="table-anime-title">${topAnime.title_english}</a></div>
                <div class="d-flex align-content-start gap-1 mt-1" >
                  <div id="table-details">${topAnime.type}</div>
                  <div class="dot"></div>
                  <div id="table-details">${topAnime.duration.split("per")[0]}</div>
                </div>
              </div>
            `;
      topRankAnime.appendChild(topRankAnimeItem);
    }
  });
}
