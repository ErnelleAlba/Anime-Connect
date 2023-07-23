const loadMore = document.getElementById('load-more-btn');
let currentPage = 1;
let totalPages = 23640;   
let scrollHeight = 200;
const popularAnimeContainer = document.getElementById('card-container');
let scrollDown = popularAnimeContainer.scrollHeight;

fetch(`https://api.jikan.moe/v4/top/anime?sfw&filter=bypopularity&limit=24&page=${currentPage}`)
    .then((res) => res.json())
    .then((data) => {
      const popularAnimedata = data.data;
      for (popularAnime of popularAnimedata) {
        const cardItem = document.createElement('div');
        cardItem.classList.add('card-anime'); 
        cardItem.innerHTML = `
                  <div id="card-poster">
                    <a href="./detail.html?id=${popularAnime.mal_id}&title=${popularAnime.title_english}">
                      <img src="${popularAnime.images.webp.large_image_url}" alt="${popularAnime.title_english}"/>
                    </a>
                  </div>
                  <div class="d-flex flex-column " id="card-detail">
                      <div id="card-title"><a href="./detail.html?id=${popularAnime.mal_id}&title=${popularAnime.title_english}">${popularAnime.title_english}</a></div>
                      <div class="d-flex align-content-start gap-1 mt-1" >
                        <div id="card-details">${popularAnime.type}</div>
                        <div class="dot"></div>
                        <div id="card-details">${popularAnime.duration.split("per")[0]}</div>
                      </div>
                  </div>
                `;
        popularAnimeContainer.prepend(cardItem);
      }
    });


loadMore.addEventListener("click", ()=>{
    if (currentPage >= totalPages ) {
      this.style.display = 'none';
      return
    }
    scrollDown = scrollDown + 800;

    currentPage++;
    fetch(`https://api.jikan.moe/v4/top/anime?sfw&filter=bypopularity&limit=24&page=${currentPage}`)
    .then((res) => res.json())
    .then((data) => {
      const popularAnimedata = data.data;
      for (popularAnime of popularAnimedata) {
        const cardItem = document.createElement('div');
        cardItem.classList.add('card-anime'); 
        cardItem.innerHTML = `
                  <div id="card-poster">
                    <a href="">
                      <img src="${popularAnime.images.webp.large_image_url}" alt="${popularAnime.title}"/>
                    </a>
                  </div>
                  <div class="d-flex flex-column " id="card-detail">
                      <div id="card-title"><a href="#">${popularAnime.title}</a></div>
                      <div class="d-flex align-content-start gap-1 mt-1" >
                        <div id="card-details">${popularAnime.type}</div>
                        <div class="dot"></div>
                        <div id="card-details">${popularAnime.duration.split("per")[0]}</div>
                      </div>
                  </div>
                `;
        popularAnimeContainer.appendChild(cardItem);
        popularAnimeContainer.scrollTo (0,scrollDown);
        
      }
    });
  });







