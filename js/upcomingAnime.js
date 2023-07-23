setTimeout (lazyLoad,6900)

function lazyLoad () {
  fetch('https://api.jikan.moe/v4/seasons/upcoming?sfw')
  .then((res) => res.json())
  .then((data) => {
    const upcomingAnimedata = data.data;
    const upcomingAnime = document.getElementById('upcoming-anime-container');

    for (let i = 0; i < 12; i++) {
      const newAnime = upcomingAnimedata[i];
      const upcomingAnimeItem = document.createElement('div');
      
      upcomingAnimeItem.classList.add('card-anime'); 
      upcomingAnimeItem.innerHTML = `
                <div id="card-poster">
                  <a href="">
                    <img src="${newAnime.images.webp.large_image_url}" alt="${newAnime.title}"/>
                  </a>
                </div>
                <div class="d-flex flex-column " id="card-detail">
                    <div id="card-title"><a href="#">${newAnime.title}</a></div>
                    <div class="d-flex align-content-start gap-1 mt-1" >
                      <div id="card-details">${newAnime.type}</div>
                      <div class="dot"></div>
                      <div id="card-details">${newAnime.aired.string.split("to")[0]}</div>
                    </div>
                </div>
              `;
      upcomingAnime.appendChild(upcomingAnimeItem);
    }
  });
}