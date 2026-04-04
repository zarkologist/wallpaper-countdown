const countdown = { date: new Date("Jan 1, 2030 00:00:00").getTime(), title: "CHANGE ME VIA INDEX.JS" }
const element = document.getElementById("countdown");
const title = document.getElementById("title");

function calculateTime(distance) {
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    return { days, hours, minutes, seconds };
}

function updateClock() {
    const now = new Date().getTime();
    const distance = countdown.date - now;
    if (distance < 0) {
        element.innerHTML = "It's Over.";
    } else {
        const { days, hours, minutes, seconds } = calculateTime(distance);
        element.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
}

title.innerHTML = countdown.title;
updateClock();
setInterval(updateClock, 1000);