let bg = document.getElementById("background")
let text = document.getElementById("title")
let effect = document.getElementById("effect")
// let sub = document.getElementById("hero-sub")
let particles = document.getElementById("artists-long-particles")
let stab_head = document.getElementById("banner-ytb-single")
let iframe = document.getElementById("ytb-iframe")

// Check s'il y a un paramètre "by" dans l'URL et si oui, le mettre dans localstorage sous "invitedBy" et remplacer la valeur de "invitedBy" dans le formulaire par la valeur de "by"
let urlParams = new URLSearchParams(window.location.search);
console.log(urlParams);
let invitedBy = urlParams.get('by');
console.log(invitedBy);
if (invitedBy) {
    localStorage.setItem('invitedBy', invitedBy);
    let form = document.getElementById("invitedby")
    form.value = invitedBy
    form.setAttribute("readonly", "readonly")
    //Retirer tous les paramètres dans l'url
    let newUrl = window.location.protocol + "//" + window.location.host + window.location.pathname;
    window.history.replaceState({ path: newUrl }, '', newUrl);
}
//Check si il y a un paramètre "invitedBy" dans le localStorage et si oui, remplacer dans le formulaire la valeur de "invitedBy" par la valeur de "invitedBy" dans le localStorage
let invitedByLocalStorage = localStorage.getItem('invitedBy');
if (invitedByLocalStorage) {
    let form = document.getElementById("invitedby")
    form.value = invitedByLocalStorage
}


window.addEventListener('scroll', () => {
    let value = window.scrollY

    
    bg.style.marginTop = value * 0.3 + "px"
    text.style.marginTop = value * -0.4 + "px"
    effect.style.marginTop = value * -0.4 + "px"
    // particles.style.marginTop = value * 0.2 + "px"
    // sub.style.marginBottom = value * 0.2 + "px"
    // sub.style.opacity = 1 - (value / 500)
})

// Crée un observateur
let observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // Si l'élément est visible, ajoute la classe
            iframe.classList.add("iframe-visible");
        } else {
            // Sinon, retire la classe
            iframe.classList.remove("iframe-visible");
        }
    });
}, {
    root: null, // Observe par rapport à la fenêtre visible (viewport)
    threshold: 1 // Détecte si au moins 10% de l'iframe est visible
});

// Observe l'élément iframe
observer.observe(iframe);

let animateStab = (element) => {
    element.animate([
        { opacity: 1, transform: 'scale(1) rotate(0deg)', filter: 'drop-shadow(0px 0px 0px #000) brightness(1)' },
        { transform: 'scale(1.3) rotate(30deg)', filter: 'drop-shadow(0px 0px 10px #000) brightness(1)', offset: 0.1 },
        { transform: 'scale(1.6) rotate(28deg)', filter: 'drop-shadow(0px 0px 10px #000) brightness(1.2)', offset: 0.15 },
        { transform: 'scale(1.8) rotate(32deg)', filter: 'drop-shadow(0px 0px 10px #000) brightness(1.4)', offset: 0.2 },
        { transform: 'scale(1.8) rotate(26deg)', filter: 'drop-shadow(0px 0px 10px #000) brightness(0.7)', offset: 0.25 },
        { transform: 'scale(1.6) rotate(24deg)', filter: 'drop-shadow(0px 0px 10px #000) brightness(1.2)', offset: 0.3 },
        { transform: 'scale(1.6) rotate(12deg)', filter: 'drop-shadow(0px 0px 10px #000) brightness(1.2)', offset: 0.35 },
        { transform: 'scale(1.6) rotate(26deg)', filter: 'drop-shadow(0px 0px 10px #000) brightness(1)', offset: 0.4 },
        { opacity: 1, offset: 0.99 },
        { opacity: 0, transform: 'scale(1) rotate(0deg)', filter: 'drop-shadow(0px 0px 0px #000) brightness(1)', offset: 1 }
    ], {
        duration: 900,
        fill: 'forwards'
    });
};

let animateDistortion = (element) => {
    element.animate([
        { opacity: 1, transform: 'scale(1) rotate(0deg)', filter: 'drop-shadow(0px 0px 0px #000) brightness(1)' },
        { transform: 'scale(1.2) rotate(-3deg)', filter: 'drop-shadow(0px 0px 10px #000) brightness(1.1)', offset: 0.025 },
        { transform: 'scale(1.5) rotate(-6deg)', filter: 'drop-shadow(0px 0px 10px #000) brightness(1.2)', offset: 0.05 },
        { transform: 'scale(1.8) rotate(-10deg)', filter: 'drop-shadow(0px 0px 10px #000) brightness(1.3)', offset: 0.075 },
        
        { transform: 'scale(1.8) rotate(-7deg)', filter: 'drop-shadow(0px 0px 10px #000) brightness(1.4)', offset: 0.1 },
        { transform: 'scale(1.8) rotate(-10deg)', filter: 'drop-shadow(0px 0px 10px #000) brightness(1.5)', offset: 0.125 },
        { transform: 'scale(1.8) rotate(-7deg)', filter: 'drop-shadow(0px 0px 10px #000) brightness(1.6)', offset: 0.15 },
        { transform: 'scale(1.8) rotate(-3deg)', filter: 'drop-shadow(0px 0px 10px #000) brightness(1.2)', offset: 0.175 },
        
        { transform: 'scale(1.8) rotate(-8deg)', filter: 'drop-shadow(0px 0px 10px #000) brightness(1.4)', offset: 0.2 },
        { transform: 'scale(1.8) rotate(-10deg)', filter: 'drop-shadow(0px 0px 10px #000) brightness(1.3)', offset: 0.225 },
        { transform: 'scale(1.8) rotate(-5deg)', filter: 'drop-shadow(0px 0px 10px #000) brightness(1.5)', offset: 0.25 },
        { transform: 'scale(1.8) rotate(-8deg)', filter: 'drop-shadow(0px 0px 10px #000) brightness(1.6)', offset: 0.275 },
        
        { transform: 'scale(1.8) rotate(-10deg)', filter: 'drop-shadow(0px 0px 10px #000) brightness(1.4)', offset: 0.3 },
        { transform: 'scale(1.8) rotate(-6deg)', filter: 'drop-shadow(0px 0px 10px #000) brightness(1.2)', offset: 0.325 },
        { transform: 'scale(1.8) rotate(-9deg)', filter: 'drop-shadow(0px 0px 10px #000) brightness(1.5)', offset: 0.35 },
        { transform: 'scale(1.8) rotate(-10deg)', filter: 'drop-shadow(0px 0px 10px #000) brightness(1.6)', offset: 0.375 },
        
        { transform: 'scale(1.8) rotate(-8deg)', filter: 'drop-shadow(0px 0px 10px #000) brightness(1.2)', offset: 0.4 },
        { transform: 'scale(1.8) rotate(-10deg)', filter: 'drop-shadow(0px 0px 10px #000) brightness(1.4)', offset: 0.425 },
        { transform: 'scale(1.8) rotate(-7deg)', filter: 'drop-shadow(0px 0px 10px #000) brightness(1.6)', offset: 0.45 },
        
        { transform: 'scale(1.8) rotate(-10deg)', filter: 'drop-shadow(0px 0px 10px #000) brightness(1.3)', offset: 0.475 },
        
        { transform: 'scale(1.8) rotate(-20deg)', filter: 'drop-shadow(0px 0px 10px #000) brightness(1.5)', offset: 0.5 },
        { transform: 'scale(1.8) rotate(-23deg)', filter: 'drop-shadow(0px 0px 10px #000) brightness(1.2)', offset: 0.525 },
        { transform: 'scale(1.8) rotate(-27deg)', filter: 'drop-shadow(0px 0px 10px #000) brightness(1.6)', offset: 0.55 },
        { transform: 'scale(1.8) rotate(-24deg)', filter: 'drop-shadow(0px 0px 10px #000) brightness(1.3)', offset: 0.575 },
        
        { transform: 'scale(1.8) rotate(-28deg)', filter: 'drop-shadow(0px 0px 10px #000) brightness(1.2)', offset: 0.6 },
        { transform: 'scale(1.8) rotate(-25deg)', filter: 'drop-shadow(0px 0px 10px #000) brightness(1.4)', offset: 0.625 },
        { transform: 'scale(1.8) rotate(-30deg)', filter: 'drop-shadow(0px 0px 10px #000) brightness(1.1)', offset: 0.65 },
        { transform: 'scale(1.8) rotate(-27deg)', filter: 'drop-shadow(0px 0px 10px #000) brightness(1.3)', offset: 0.675 },
        
        { transform: 'scale(1.8) rotate(-23deg)', filter: 'drop-shadow(0px 0px 10px #000) brightness(1.5)', offset: 0.7 },
        { transform: 'scale(1.8) rotate(-26deg)', filter: 'drop-shadow(0px 0px 10px #000) brightness(1.2)', offset: 0.725 },
        { transform: 'scale(1.8) rotate(-29deg)', filter: 'drop-shadow(0px 0px 10px #000) brightness(1.4)', offset: 0.75 },
        { transform: 'scale(1.8) rotate(-25deg)', filter: 'drop-shadow(0px 0px 10px #000) brightness(1.2)', offset: 0.775 },
        
        { transform: 'scale(1.8) rotate(-28deg)', filter: 'drop-shadow(0px 0px 10px #000) brightness(1.1)', offset: 0.8 },
        { transform: 'scale(1.8) rotate(-30deg)', filter: 'drop-shadow(0px 0px 10px #000) brightness(1.3)', offset: 0.825 },
        { transform: 'scale(1.8) rotate(-23deg)', filter: 'drop-shadow(0px 0px 10px #000) brightness(1)', offset: 0.85 },
        { transform: 'scale(1.8) rotate(-27deg)', filter: 'drop-shadow(0px 0px 10px #000) brightness(1.5)', offset: 0.875 },
        
        { opacity: 1, transform: 'scale(1.8) rotate(-29deg)', filter: 'drop-shadow(0px 0px 10px #000) brightness(1.3)', offset: 0.9 },
        { opacity: 1, transform: 'scale(1) rotate(0deg)', filter: 'drop-shadow(0px 0px 10px #000) brightness(1)', offset: 0.95 },
        { opacity: 0, transform: 'scale(1) rotate(0deg)', filter: 'drop-shadow(0px 0px 0px #000) brightness(1)', offset: 1 }
    ], {
        duration: 2700,
        fill: 'forwards'
    });
};

window.onkeydown = function(e) {
    let key = e.keyCode
    let distortion = new Audio('./assets/sounds/distortion-bass.mp3')
    let megabass = new Audio('./assets/sounds/mega-bass.mp3')
    let stab = new Audio('./assets/sounds/stab.mp3')

    switch (key) {
        case 37:
            e.preventDefault()
            stab.play()
            animateStab(stab_head)
            break
        case 38:
            e.preventDefault()
            distortion.play()
            animateDistortion(stab_head)
            break
        case 40:
            e.preventDefault()
            megabass.play()
            break
        default:
            break 
    }
    
}


tippy('.artist-link', {
    content(reference) {
        const img = reference.querySelector('img');
        return img ? img.alt : '#';
    },
allowHTML: true,
theme: "azaphrex"
});