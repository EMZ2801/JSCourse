/* const carouselWrapper = document.querySelector('.carousel__wrapper')

console.log('carouselWrapper', carouselWrapper)

carouselWrapper.addEventListener('click', (event) => {
    const rightElement =  getComputedStyle(event.currentTarget).right.replace('px', '')

    const isLeftClick = (20 + 700 + 8) > event.pageX
    if (isLeftClick) {
        if (rightElement <= 0) return

        event.currentTarget.style.right = `${+rightElement - 480}px`
    } else {
        if (rightElement >= 900) return

        event.currentTarget.style.right = `${+rightElement + 480}px`
    }
}) */


/* document.getElementById("summer").addEventListener("click", function() {
    var specificBlock = document.getElementById("summerId");
    specificBlock.style.display = "summer";
}); */

/* document.getElementById("spring").addEventListener("click", function() {
    var allBlocks = document.querySelectorAll(".season_large");
    for (var i = 0; i < allBlocks.length; i++) {
        allBlocks[i].style.display = "none";
    }
    
    var specificBlock = document.getElementById("springId");
    specificBlock.style.display = "flex";
});

document.getElementById("summer").addEventListener("click", function() {
    var allBlocks = document.querySelectorAll(".season_large");
    for (var i = 0; i < allBlocks.length; i++) {
        allBlocks[i].style.display = "none";
    }
    
    var specificBlock = document.getElementById("summerId");
    specificBlock.style.display = "flex";
});

document.getElementById("autumn").addEventListener("click", function() {
    var allBlocks = document.querySelectorAll(".season_large");
    for (var i = 0; i < allBlocks.length; i++) {
        allBlocks[i].style.display = "none";
    }
    
    var specificBlock = document.getElementById("autumnId");
    specificBlock.style.display = "flex";
});

document.getElementById("winter").addEventListener("click", function() {
    var allBlocks = document.querySelectorAll(".season_large");
    for (var i = 0; i < allBlocks.length; i++) {
        allBlocks[i].style.display = "none";
    }
    
    var specificBlock = document.getElementById("winterId");
    specificBlock.style.display = "flex";
}); */

/* let radioButtons = document.querySelectorAll('input[type="radio"][name="choice_seasons"]');

radioButtons.forEach(function(radioButton) {
    radioButton.addEventListener("click", function() {
        let selectedBlockId = this.value;
        let allBlocks = document.querySelectorAll(".season_large");
        
        allBlocks.forEach(function(block) {
            if (block.id === selectedBlockId) {
                block.style.display = "flex";
            } else {
                block.style.display = "none";
            }
        });
    });
}); */


const radioButtons = document.querySelectorAll('input[type="radio"][name="choice_seasons"]');
    const codeBlocks = document.querySelectorAll('.season_large');

    // Автоматически выбираем первую кнопку при загрузке страницы (по макету-spring)
    radioButtons[1].click();
    //реализуем переключение по кнопкам
    radioButtons.forEach(radioButton => {
        radioButton.addEventListener('change', function() {
            codeBlocks.forEach(block => {
                if (block.id === this.value) {
                    block.classList.remove('hidden');
                } else {
                    block.classList.add('hidden');
                }
            });
        });
    });

    



    //код ниже позволяет выбирать конкретный блок кода, при нажатии на соответствующую radiobatton, недостаток - при загрузке страницы видим все 4 блока.

/* let radioButtons2 = document.querySelectorAll('input[type="radio2"][name="choice_galary"]');

radioButtons2.forEach(function(radioButton2) {
    radioButton2.addEventListener("click", function() {
        let selectedBlockId = this.value;
        let allBlocks = document.querySelectorAll(".carousel__wrapper");
        
        allBlocks.forEach(function(block) {
            if (block.id === selectedBlockId) {
                block.style.display = "flex";
            } else {
                block.style.display = "none";
            }
        });
    });
});
 */

//создаем переключение кнопками

const range1Btn = document.getElementById('range1');
const range2Btn = document.getElementById('range2');
const range3Btn = document.getElementById('range3');
const slides = document.querySelector('.carousel__wrapper');
const slideWidth = document.querySelector('.photo').clientWidth;

let currentIndex = 0;

function goToSlide(startIndex, endIndex) {
    slides.style.transform = `translateX(${(-startIndex * slideWidth)-26}px)`; //необходима корректировка на 25px
    currentIndex = startIndex;
}

range1Btn.addEventListener('click', function() {
    goToSlide(0, 2);
});

range2Btn.addEventListener('click', function() {
    goToSlide(1, 3);
});

range3Btn.addEventListener('click', function() {
    goToSlide(2, 4);
});

/* function changeColor() {
    let block = document.getElementById('button');
    block.style.backgroundColor = 'lightgreen';
} */





//создаем бургер меню

function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';

    const burgerIcon = document.querySelector('.burger-icon');
    burgerIcon.classList.toggle('active');
}






