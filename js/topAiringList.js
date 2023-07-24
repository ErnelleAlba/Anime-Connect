fetch('https://api.jikan.moe/v4/anime?sfw&status=airing&order_by=popularity&sort=asc')
  .then((res) => res.json())
  .then((data) => {
    const animeData = data.data;
    const topAiring = document.getElementById('top-airing-table');

    for (let i = 0; i < 5; i++) {
      const anime = animeData[i];
      const tableItem = document.createElement('li');
      let num = i+1;
      
      tableItem.classList.add('d-flex','table-item'); 
      tableItem.innerHTML = `
              <div class="my-auto me-4" id="table-number">0${num}</div>
              <a href="./detail.html?id=${anime.mal_id}&title=${anime.title}">
                <img src="${anime.images.jpg.image_url}" id="small-poster-img" alt="${anime.title}"/>
              </a>
              <div class="d-flex flex-column my-auto ms-3">
                <div><a href="./detail.html?id=${anime.mal_id}&title=${anime.title}" id="table-anime-title">${anime.title}</a></div>
                <div class="d-flex align-content-start gap-1 mt-1" >
                  <div id="table-details">${anime.type}</div>
                  <div class="dot"></div>
                  <div id="table-details">${anime.duration.split("per")[0]}</div>
                </div>
              </div>
            `;
      topAiring.appendChild(tableItem);
    }
  });