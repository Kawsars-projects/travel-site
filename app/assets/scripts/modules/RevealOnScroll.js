import throttle from "lodash/throttle"
import debounce from "lodash/debounce"
class RevealOnScroll {
  constructor(els, thresholdPercent) {
    this.revealItem = els
    this.thresholdPercent = thresholdPercent
    this.browserHeight = window.innerHeight
    this.hideInitially()
    this.scrollThrottle = throttle(this.calCaller, 200).bind(this)
    this.events()
  }
  events() {
    window.addEventListener("scroll", this.scrollThrottle)
    window.addEventListener(
      "resize",
      debounce(() => {
        this.browserHeight = window.innerHeight
      }, 300)
    )
  }
  calCaller() {
    this.revealItem.forEach((el) => {
      if (el.isRevealed == false) {
        this.calculateIfScrollTo(el)
      }
    })
  }
  calculateIfScrollTo(el) {
    if (window.scrollY + this.browserHeight > el.offsetTop) {
      let scrollPercent = (el.getBoundingClientRect().y / this.browserHeight) * 100

      if (scrollPercent < this.thresholdPercent) {
        el.classList.add("reveal-item__is-visible")
        el.isRevealed = true
        if (el.isLast) {
          window.removeEventListener("scroll", this.scrollThrottle)
        }
      }
    }
  }
  hideInitially() {
    this.revealItem.forEach((el) => {
      el.classList.add("reveal-item")
      el.isRevealed = false
    })
    this.revealItem[this.revealItem.length - 1].isLast = true
  }
}

export default RevealOnScroll
