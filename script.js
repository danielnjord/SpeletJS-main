



// SKAPA github och invite stefan.holmberg@systementor.se :D


    let dropDownButton = document.querySelector('.dropDown-btn')
    let dropDownContent = document.querySelector('.dropDown-content')

   
    // Set the selected duration when clicking on an option
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
        // Get all elements with class 'view-front-view'
        let frontViews = document.querySelectorAll('.view-front-view');
    
        // Add click event listener to each 'view-front-view'
        frontViews.forEach(function (frontView) {
            frontView.addEventListener('click', function () {
                // Toggle the display property of the corresponding 'view-back-view'
                let backView = frontView.nextElementSibling; // Assuming it's the next sibling
                if (backView) {
                    backView.style.display = (backView.style.display === 'none' || backView.style.display === '') ? 'block' : 'none';
                }
            });
        });
    });



    