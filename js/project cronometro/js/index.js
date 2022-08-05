const timer = (() => {
    const createTimeOfSeconds = (seconds) => {
        const date = new Date(seconds * 1000);
        return date.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC'
        });
    }

    const clock = document.querySelector(".clock");
    let timer;
    let seconds = 0;
    const startClock = () => {
        timer = setInterval(() => {
            seconds++
            clock.innerHTML = createTimeOfSeconds(seconds);
        }, 1000);
    }

    document.addEventListener('click', (e) => {
        const el = e.target;
        if (el.classList.contains('init')) {
            clock.classList.remove('pause')
            clearInterval(timer);
            startClock();
        }
        if (el.classList.contains('stop')) {
            clock.classList.add('pause')
            clearInterval(timer);
        }
        if (el.classList.contains('resetTime')) {
            clock.classList.remove('pause')
            clearInterval(timer);
            clock.innerHTML = '00:00:00';
            seconds = 0;
        }
    })
})()

