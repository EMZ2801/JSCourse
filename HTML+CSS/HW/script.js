const carouselWrapper = document.querySelector('.carousel__wrapper')

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
})


