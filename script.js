

    let dropDownButton = document.querySelector('.dropDown-btn')
    let dropDownContent = document.querySelector('.dropDown-content')

       let timeOption = document.querySelectorAll('.dropDown-content p')
    timeOption.forEach(function (option) {
        option.addEventListener('click', function () {
            let selectedDuration = option.innerHTML;
            console.log('Selected time:', selectedDuration);
            console.log("hej")
            dropDownContent.classList.remove('show'); 
        })
    })

//------------------------------------------------------------------------------------------------------------------------


    document.addEventListener('DOMContentLoaded', function () {
        let frontViews = document.querySelectorAll('.view-front-view');
    
        frontViews.forEach(function (frontView) {
            frontView.addEventListener('click', function () {
                let backView = frontView.nextElementSibling;
                if (backView) {
                    backView.style.display = (backView.style.display === 'none' || backView.style.display === '') ? 'block' : 'none';
                }
            });
        });
    });

//------------------------------------------------------------------------------------------------------------------------



    // Vill lägga en eventlistener på en class som alla cards är med i som räknar klicken