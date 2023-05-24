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

    let radioInputs = document.querySelectorAll(".form-confirm__radio");

    if (radioInputs) {
        console.log(radioInputs);
        radioInputs.forEach(radioInput => {
            radioInput.addEventListener('input', function () {
                let val = this.value;
                console.log(val);
                if (val === 'с радостью приду!'){
                    console.log(123);
                    document.querySelector('.form__alcohol').classList.toggle('active')
                    console.log(9999);
                }
            });
        })
    }

    //ползунок
    const rangeInput = document.querySelector(".range__input"),
        rangeTrack = document.querySelector(".range__track");

    rangeInput.addEventListener('input', function () {
        let val = +this.value,
            min = +this.getAttribute('min'),
            max = +this.getAttribute('max'),
            step = +this.getAttribute('step'),
            position = 100 / (max - step) * (val - step);

        rangeTrack.style.width = `${position}%`;
    });


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
