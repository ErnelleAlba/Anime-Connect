let burgerBtn = document.querySelector('.burger-menu');

burgerBtn.addEventListener('click', function() {
  let sidebarMenu = document.querySelector('.sidebar-menu');
  let blurBgFilter = document.querySelector('.blur-bg');
  sidebarMenu.classList.toggle('showmenu');
  blurBgFilter.classList.toggle('active');
  document.body.classList.toggle('disable-scroll');
});