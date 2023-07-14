// HEADER ON SCROLL SCRIPT 

    document.addEventListener('scroll', () =>{
      const header = document.querySelector('header');
      if (window.scrollY > 0) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');

      };
    });
  
    fetch('https://api.jikan.moe/v4/anime/54234/full') 
			.then(res => {
        if (res.ok) {
          return res.json();
        } else {
          console.log('error');
        }
      })
			.then(data => {
				console.log(data);
				const animeData = data.data;
				// Title
				document.getElementById('anime-title').textContent = `${animeData.title}`;
				// Image Poster
				document.getElementById('anime-img').src = `${animeData.images.jpg.large_image_url}`;
				// Synopsis of the Anime
				document.getElementById('anime-synopsis').textContent = `${animeData.synopsis}`;
				// Title - English
				document.getElementById('anime-title-english').textContent = `${animeData.title_english}`;
				// Title - Japanese
				document.getElementById('anime-title-japanese').textContent = `${animeData.title_japanese}`;
				// Rank
				document.getElementById('anime-rank').textContent = `${animeData.rank}`;
				// Popularity
				document.getElementById('anime-popularity').textContent = `${animeData.popularity}`;
				// Trailer Video of the Anime
				document.getElementById('anime-trailer').src = `${animeData.trailer.embed_url}`;

				// ***** Anime Information *****
				// Type
				document.getElementById('type').textContent = `${animeData.type}`;
				// Number of Episodes
				document.getElementById('episodes').textContent = `${animeData.episodes}`;
				// Status
				document.getElementById('status').textContent = `${animeData.status}`;
				// Year - Release 
				document.getElementById('year').textContent = `${animeData.year}`;
				// Aired - Date
				document.getElementById('aired').textContent = `${animeData.aired.string}`;
				// Premiered
				document.getElementById('premiered').textContent = `${animeData.season} ${animeData.year}`;
				// Broadcast - Time
				document.getElementById('broadcast').textContent = `${animeData.broadcast.string}`;
				// Source
				document.getElementById('source').textContent = `${animeData.source}`;
				// Duration per Episode
				document.getElementById('duration').textContent = `${animeData.duration}`;
				// Rating
				document.getElementById('rating').textContent = `${animeData.rating}`;

				// Producers
				for(let producer of animeData.producers) {
					const prodName = document.createElement("span");

					prodName.textContent = `${producer.name}, `;
					document.getElementById('producers').appendChild(prodName);
				}
				
				// Licensors
				for(let licensors of animeData.licensors) {
					const licName = document.createElement("span");

					licName.textContent = `${licensors.name}`;
					document.getElementById('licensors').appendChild(licName);
				}
				
				// Studios
				for(let studio of animeData.studios) {
					const studioName = document.createElement("span");

					studioName.textContent = `${studio.name}`;
					document.getElementById('studios').appendChild(studioName);
				}				

				// Genres
				for(let genre of animeData.genres) {
					const genreName = document.createElement("span");

					genreName.textContent = `${genre.name}`;
					document.getElementById('genre').appendChild(genreName);
				}

				// Themes
				for(let theme of animeData.themes) {
					const themeName = document.createElement("span");

					themeName.textContent = `${theme.name}, `;
					document.getElementById('themes').appendChild(themeName);
				}
				
				// Demographics
				for(let demographic of animeData.demographics) {
					const demographicName = document.createElement("span");

					demographicName.textContent = `${demographic.name}`;
					document.getElementById('demographic').appendChild(demographicName);
				}
			});

			// ***** Characters and Voice Actors *****
			fetch('https://api.jikan.moe/v4/anime/54234/characters') 
			.then(res => {
        if (res.ok) {
          return res.json();
        } else {
          console.log('error');
        }
      }).then(data =>{
					console.log(data)
					const characters = data.data;

					for(let charData of characters) {
						
					}
					

			});