function scrollToTopMenu() {
  window.scrollTo({
    top:0,
  })
}

function scrollToTop() {
  window.scrollTo({
    top:0,
    behavior:"smooth"
  })
}

window.addEventListener('scroll', function(){
  var scroll = document.querySelector('.scrollTop');
  scroll.classList.toggle("active", window.scrollY > 500)
})