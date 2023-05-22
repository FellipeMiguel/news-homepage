function showMenu () {
  let menuMobile = document.querySelector('.mobile-menu')

  if (menuMobile.classList.contains('open')) {
    menuMobile.classList.remove('open')
  }else {
    menuMobile.classList.add('open')
  }
}

function closeMenu () {
  let closeMenuMobile = document.querySelector('.mobile-menu')

  if (closeMenuMobile.classList.contains('open')) {
    closeMenuMobile.classList.remove('open')
  }
}