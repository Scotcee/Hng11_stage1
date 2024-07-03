// Get the current date

const present = new Date();
const presentDay = present.toDateString();
function updateDay() {

    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDayOfWeek = daysOfWeek[present.getDay()];
    document.querySelector('[data-testid="currentDay"]').textContent = currentDayOfWeek

};

function updateTime() {
    const presentTime = new Date().toLocaleTimeString()
    document.querySelector('[data-testid="currentTimeUTC"]').textContent = presentTime;
}

updateDay();
updateTime();

setInterval(updateTime, 1000);

