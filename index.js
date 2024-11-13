let bg = document.getElementById("background")
let text = document.getElementById("title")
let effect = document.getElementById("effect")

window.addEventListener('scroll', () => {
    let value = window.scrollY

    bg.style.marginTop = value * 0.3 + "px"
    text.style.marginTop = value * -0.4 + "px"
    effect.style.marginTop = value * -0.4 + "px"
})