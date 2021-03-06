class MobileMenu {
  constructor() {
    this.menuContent = document.querySelector(".site-header__menu-content")
    this.menuIcon = document.querySelector(".site-header__menu-icon")
    this.siteHeader = document.querySelector(".site-header")
    this.events()
  }
  events() {
    this.menuIcon.addEventListener("click", () => this.toggleMenu())
  }
  toggleMenu() {
    this.menuContent.classList.toggle("site-header__menu-content--is-visible")
    this.siteHeader.classList.toggle("site-header__is-expended")
    this.menuIcon.classList.toggle("site-header__menu-icon-close-x")
  }
}

export default MobileMenu
