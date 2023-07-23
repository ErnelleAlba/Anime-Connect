setTimeout (lazyLoad,6000)

function lazyLoad () {
  fetch('https://api.jikan.moe/v4/random/anime?sfw')
  .then((res) => res.json())
  .then((data) => {
    const recommendedData = data.data;
    console.log(recommendedData)
    // const recommended = document.getElementById('recommended-list');

    // for (let i = 0; i < 20; i++) {
    //   const recommendedAnime = recommendedData[i];
    //   const recommendedItem = document.createElement('li');
      
    //   recommendedItem.classList.add('d-flex','table-item'); 
    //   recommendedItem.innerHTML = `
    //           <a href="#">
    //             <img src="" id="small-poster-img"/>
    //           </a>
    //           <div class="d-flex flex-column my-auto ms-3">
    //             <div><a href="#" id="table-anime-title">${recommendedAnime.title}</a></div>
    //             <div class="d-flex align-content-start gap-1 mt-1" >
    //               <div id="table-details">${recommendedAnime.type}</div>
    //               <div class="dot"></div>
    //               <div id="table-details">${recommendedAnime.duration.split("per")[0]}</div>
    //             </div>
    //           </div>
    //         `;
    //   recommended.appendChild(recommendedItem);
    // }
  });
}
