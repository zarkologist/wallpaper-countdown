const countdown = { date: new Date("Aug 19, 2026 00:00:00").getTime(), title: "SEMESTER BEGIN" }
const element = document.getElementById("countdown");
const title = document.getElementById("title");

function calculateTime(distance) {
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);    
    const millis = distance % 1000;
    return { days, hours, minutes, seconds, millis };
}

function updateClock() {
    const now = new Date().getTime();
    const distance = countdown.date - now;
    if (distance < 0) {
        element.innerHTML = "It's Over.";
    } else {
        const { days, hours, minutes, seconds, millis } = calculateTime(distance);
        element.innerHTML = `${pad(days, 2)}:${pad(hours, 2)}:${pad(minutes, 2)}:${pad(seconds, 2)}:${pad(millis, 3)}`;
    }
}

function pad(num, size) {
  return String(num).padStart(size, '0');
}

title.innerHTML = countdown.title;
updateClock();
setInterval(updateClock, 1);