document.addEventListener('DOMContentLoaded', () => {
    let hrefs = document.querySelectorAll('.js-scroller')
    hrefs.forEach(href => {
        href.addEventListener('click', (e) => {
            e.preventDefault();
            let id = e.target.getAttribute('href').slice(1)
            let scrollTarget = document.getElementById(id);
            let topOffset = document.querySelector('.header').offsetHeight;
            let elementPosition = scrollTarget.getBoundingClientRect().top;
            let offsetPosition = elementPosition;
            window.scrollBy({
                top: offsetPosition,
                behavior: 'smooth'
            });
        })
    });


    let countDownDate = new Date("August 19, 2023 17:00:00").getTime();

    let x = setInterval(function() {
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
