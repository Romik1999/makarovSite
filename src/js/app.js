document.addEventListener('DOMContentLoaded', () => {

    var fullPageInstance = new fullpage('#fullpage', {
        navigation: false,
        menu: '#menu',
    });

    const swiper = new Swiper('.dresscode-slider', {
        slidesPerView: 4,
        loop: false,
        navigation: {
            nextEl: '.dresscode-slider__arrow--next',
            prevEl: '.dresscode-slider__arrow--prev',
        },
        breakpoints: {
            300: {
                slidesPerView: 1,
            },
            576: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            1199: {
                slidesPerView: 4
            }
        }
    });

    let burger = document.querySelector('.hamburger')
    let mobile = document.querySelector('.header__menu')
    let links = document.querySelectorAll('.header-menu__link')

    if (burger) {
        burger.addEventListener('click', function () {
            burger.classList.toggle('active')
            mobile.classList.toggle('active')
        })
    }

    links.forEach(link => {
        link.addEventListener('click', function () {
            burger.classList.toggle('active')
            mobile.classList.toggle('active')
        })
    })


    let addButton = document.querySelector(".form__button--add");
    let backButton = document.querySelector(".form__button--back");
    let secondCard = document.querySelector(".form__card--second");

    if (addButton) {
        addButton.addEventListener('click', () => {
            secondCard.classList.toggle('active')
        })
    }
    if (backButton) {
        backButton.addEventListener('click', () => {
            secondCard.classList.toggle('active')
        })
    }

    let confirmOptions1 = document.getElementById("form-confirm__options1");
    let radioInputs = confirmOptions1.querySelectorAll(".form-confirm__radio");
    let alcoholOptions = document.getElementById("form-alcohol1");

    if (radioInputs) {
        radioInputs.forEach(radioInput => {
            radioInput.addEventListener('input', function () {
                let val = this.value;
                if (val === 'с радостью приду!') {
                    alcoholOptions.classList.add('active')
                    addButton.classList.remove('form__button--disable')
                } else {
                    alcoholOptions.classList.remove('active')
                    addButton.classList.add('form__button--disable')
                }
            });
        })
    }

    let confirmOptions2 = document.getElementById("form-confirm__options2");
    let radioInputs2 = confirmOptions2.querySelectorAll(".form-confirm__radio");
    let alcoholOptions2 = document.getElementById("form-alcohol2");

    if (radioInputs2) {
        radioInputs2.forEach(radioInput2 => {
            radioInput2.addEventListener('input', function () {
                let val = this.value;
                if (val === 'с радостью приду!') {
                    alcoholOptions2.classList.add('active')
                } else {
                    alcoholOptions2.classList.remove('active')
                }
            });
        })
    }


    //ползунок
    let rangeInputs = document.querySelectorAll(".range__input");

    console.log(rangeInputs);
    rangeInputs.forEach(rangeInput => {
        let rangeTrack = rangeInput.parentNode.querySelector(".range__track");
        rangeInput.addEventListener('input', function () {
            let val = +this.value,
                min = +this.getAttribute('min'),
                max = +this.getAttribute('max'),
                step = +this.getAttribute('step'),
                position = 100 / (max - step) * (val - step);

            rangeTrack.style.width = `${position}%`;
        });
    })


    // таймер
    let countDownDate = new Date("August 19, 2023 17:00:00").getTime();

    let x = setInterval(function () {
        let now = new Date().getTime();
        let distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.querySelector('.deadline-number__time--days').innerHTML = days;
        document.querySelector('.deadline-number__time--hours').innerHTML = hours;
        document.querySelector('.deadline-number__time--minutes').innerHTML = minutes;
        document.querySelector('.deadline-number__time--seconds').innerHTML = seconds;

        // If the count down is over, write some text
        if (distance < 0) {
            clearInterval(x);
        }
    }, 1000);
});
