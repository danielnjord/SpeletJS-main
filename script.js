
NiceSelect.bind(document.getElementById("dropDown")) 

// väljer alla element med klassen 'view-front-view'
let frontView = document.querySelectorAll('.view-front-view')

document.addEventListener('DOMContentLoaded', function () {
    // lägger till eventlistener till varje element 'frontView' / view-front-view i html
    frontView.forEach(function (frontView) {
        frontView.addEventListener('click', function () {
            let backView = frontView.nextElementSibling
            if (backView) {
                backView.style.display = (backView.style.display === 'none' 
                || backView.style.display === '') ? 'block' : 'none'
            }
        })
    })
})

// väljer alla element med klassen 'card'
let cardClick = document.querySelectorAll('.card')
let clickCount = 0

// en loop som går igenom alla element som är med i klassen 'card' och lägger till en eventlistener på dem som 
// räknar klick och uppdaterar textencontent på variabeln 'antalKlick'
cardClick.forEach(function (card) {
    card.addEventListener('click', function () {
        clickCount++;
        document.getElementById('antalKlick').textContent = clickCount;
    });
});


