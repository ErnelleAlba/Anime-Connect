let searchBtn = document.querySelector('.search-logo');
searchBtn.addEventListener('click', function() {
  let searchForm = document.querySelector('.search-bar-mobile');
  searchForm.classList.toggle('showsearch');
});