const countdownDates = [
    { id: "countdown1", date: new Date("Jan 12, 2026 00:00:00").getTime() },
];

function calculateTime(distance) {
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    return { days, hours, minutes, seconds };
}

function updateClock() {
    const now = new Date().getTime();

    countdownDates.forEach(({ id, date }) => {
        const distance = date - now;
        const element = document.getElementById(id);

        if (distance < 0) {
            element.innerHTML = "It's Over.";
        } else {
            const { days, hours, minutes, seconds } = calculateTime(distance);
            element.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        }
    });
}

updateClock();
setInterval(updateClock, 1000);
