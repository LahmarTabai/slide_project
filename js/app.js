document.addEventListener("DOMContentLoaded", () => {

    const items = document.querySelectorAll('img');
    const nbSlide = items.length;
    const suivant = document.querySelector('.right');
    const precedent = document.querySelector('.left');
    let count = 0;

    const slide = {

        slideSuivante() {
            items[count].classList.remove('active');
            if (count < nbSlide - 1) {
                count++;
            } else {
                count = 0;
            }
            items[count].classList.add('active');
            console.log(count);
        },

        slidePrecedente() {
            items[count].classList.remove('active');
            if (count > 0) {
                count--;
            } else {
                count = nbSlide - 1;
            }

            items[count].classList.add('active');
        },

        keyPress(e) {
            console.log(e);
            if (e.keyCode === 37) {
                slide.slidePrecedente();
            } else if (e.keyCode === 39) {
                slide.slideSuivante();
            }
        }

    };

    suivant.addEventListener("click", e => {
        slide.slideSuivante();
    });

    precedent.addEventListener("click", e => {
        slide.slidePrecedente();
    });

    document.addEventListener("keydown", e => {
        slide.keyPress(e);
    });
});