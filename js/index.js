const countdownDates = [
    { id: "countdown1", date: new Date("Aug 20, 2025 00:00:00").getTime() },
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

            // Display days only for smaller countdowns
            if (id === "countdown1") {
                element.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
            } else {
                element.innerHTML = `${days}d`;
            }
        }
    });
}

updateClock();
setInterval(updateClock, 1000);
