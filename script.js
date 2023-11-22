
NiceSelect.bind(document.getElementById("dropDown"))


document.addEventListener('DOMContentLoaded', function () {
    let frontViews = document.querySelectorAll('.view-front-view')
    
    frontViews.forEach(function (frontView) {
        frontView.addEventListener('click', function () {
            let backView = frontView.nextElementSibling
            if (backView) {
                backView.style.display = (backView.style.display === 'none' 
                || backView.style.display === '') ? 'block' : 'none'
            }
        })
    })
})

//------------------------------------------------------------------------------------------------------------------------

let cardClick = document.querySelectorAll('.card')
let clickCount = 0

// en loop som går igenom alla element som är med i klassen 'card' och lägger till en eventlistener på dem
cardClick.forEach(function (card) {
    card.addEventListener('click', function () {
        clickCount++;
        // uppdaterar textContent på elementet 'flips'
        document.getElementById('antalKlick').textContent = clickCount;
    });
});


