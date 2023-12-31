fetch('https://api.jikan.moe/v4/anime?sfw&status=airing&order_by=rank&order_by=popularity')
.then((res) => res.json())
.then((data) => {
  const animeData = data.data;
  const swiperWrapper = document.querySelector('.swiper-wrapper');
  
  for (let i = 0; i < 20; i++) {
    const anime = animeData[i];
    const slideDiv = document.createElement('div');
    let num = i+1;
    if (num <= 9){            
      num = String(num).padStart(2, '0');
    }

    slideDiv.classList.add('swiper-slide'); 
    slideDiv.innerHTML = `
          <div class="anime-title dynamic-name">
            ${anime.title}
          </div>
          <div class="number">${num}</div>
          <a href="./detail.html?id=${anime.mal_id}&title=${anime.title}">
            <img src="${anime.images.webp.large_image_url}" id="swiper-img">
          </a>
          `;
    swiperWrapper.appendChild(slideDiv);
  }
});