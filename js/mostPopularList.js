setTimeout (lazyLoad,1800)

function lazyLoad () {
  fetch('https://api.jikan.moe/v4/top/anime?sfw&filter=bypopularity')
  .then((res) => res.json())
  .then((data) => {
    const mostPopulardata = data.data;
    const mostPopular = document.getElementById('most-popular-table');

    for (let i = 0; i < 5; i++) {
      const mostPopAnime = mostPopulardata[i];
      const mostPopularItem = document.createElement('li');
      let num = i+1;
      
      mostPopularItem.classList.add('d-flex','table-item'); 
      mostPopularItem.innerHTML = `
              <div class="my-auto me-4" id="table-number">0${num}</div>
              <a href="./detail.html?id=${mostPopAnime.mal_id}&title=${mostPopAnime.title}">
                <img src="${mostPopAnime.images.jpg.image_url}" id="small-poster-img" alt="${mostPopAnime.title}"/>
              </a>
              <div class="d-flex flex-column my-auto ms-3">
                <div><a href="./detail.html?id=${mostPopAnime.mal_id}&title=${mostPopAnime.title}" id="table-anime-title">${mostPopAnime.title}</a></div>
                <div class="d-flex align-content-start gap-1 mt-1" >
                  <div id="table-details">${mostPopAnime.type}</div>
                  <div class="dot"></div>
                  <div id="table-details">${mostPopAnime.duration.split("per")[0]}</div>
                </div>
              </div>
            `;
      mostPopular.appendChild(mostPopularItem);
    }
  });
}
