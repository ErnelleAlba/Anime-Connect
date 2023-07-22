setTimeout (lazyLoad,3800);

function lazyLoad () {
  fetch('https://api.jikan.moe/v4/top/anime?sfw&filter=favorite')
  .then((res) => res.json())
  .then((data) => {
    const mostFavoritedata = data.data;
    const mostFavorite = document.getElementById('most-favorite-table');

    for (let i = 0; i < 5; i++) {
      const mostFavAnime = mostFavoritedata[i];
      const mostFavoriteItem = document.createElement('li');
      let num = i+1;
      
      mostFavoriteItem.classList.add('d-flex','table-item'); 
      mostFavoriteItem.innerHTML = `
              <div class="my-auto me-4" id="table-number">0${num}</div>
              <a href="#">
                <img src="${mostFavAnime.images.webp.large_image_url}" id="small-poster-img"/>
              </a>
              <div class="d-flex flex-column my-auto ms-3">
                <div><a href="#" id="table-anime-title">${mostFavAnime.title}</a></div>
                <div class="d-flex align-content-start gap-1 mt-1" >
                  <div id="table-details">${mostFavAnime.type}</div>
                  <div class="dot"></div>
                  <div id="table-details">${mostFavAnime.duration.split("per")[0]}</div>
                </div>
              </div>
            `;
      mostFavorite.appendChild(mostFavoriteItem);
    }
  });
}
