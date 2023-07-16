// HEADER ON SCROLL SCRIPT 

    document.addEventListener('scroll', () =>{
      const header = document.querySelector('header');
      if (window.scrollY > 0) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');

      };
    });
  
	fetch('https://api.jikan.moe/v4/anime')
  .then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error('Network response was not OK.');
    }
  }).then((data) => {console.log(data);});

	fetch('https://api.jikan.moe/v4/top/anime')
  .then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error('Network response was not OK.');
    }
  })
  .then((data) => {
	// Process the data here (e.g., display it or do something else)
	console.log(data);
	const animeData = data.data;
  
	if (animeData && animeData.length > 0) {
	  // Display the first 24 anime
	  const animeCardContainer = document.querySelector('.anime-card-container');
  
	  for (let i = 0; i < 24; i++) {
		const anime = animeData[i];
  
		// Create a new card for each anime
		const cardDiv = document.createElement('div');
		cardDiv.classList.add('anime-card', 'container-fluid'); // Add .container class here
		cardDiv.innerHTML = `
		  <div class="card">
			<img src="${anime.images.jpg.image_url}" alt="" class="card-img-top">
			<div class="card-body">
			  <h5 class="card-title">${anime.title_english}</h5>
			  <!-- Add other anime information you want to display here -->
			  <h6 class="Ratings">
			  	Ratings: ${anime.score}
				<ul>
					<li>${anime.year}</li>
				</ul>
			  </h6>
			</div>
		  </div>
		`;
  
		// Append the card to the animeCardContainer
		animeCardContainer.appendChild(cardDiv);
	  }
	}
  })
  .catch((error) => {
	console.error('An error occurred:', error);
  });
		