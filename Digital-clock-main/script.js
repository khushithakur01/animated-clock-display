const clock = document.getElementById("clock");
const toggleFormatBtn = document.getElementById("toggle-format");
const toggleThemeBtn = document.getElementById("toggle-theme");

let is24HourFormat = true;
let isDarkTheme = false;

function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");

    if (!is24HourFormat) {
        const amPm = hours >= 12 ? "PM" : "AM";
        hours = hours % 12 || 12;
        clock.textContent = `${hours}:${minutes}:${seconds} ${amPm}`;
    } else {
        clock.textContent = `${String(hours).padStart(
      2,
      "0"
    )}:${minutes}:${seconds}`;
    }
}

toggleFormatBtn.addEventListener("click", () => {
    is24HourFormat = !is24HourFormat;
    toggleFormatBtn.textContent = is24HourFormat ?
        "Switch to 12-Hour" :
        "Switch to 24-Hour";
});

toggleThemeBtn.addEventListener("click", () => {
    isDarkTheme = !isDarkTheme;
    document.body.classList.toggle("dark-theme");
    toggleThemeBtn.textContent = isDarkTheme ? "Light Mode" : "Dark Mode";
});

setInterval(updateClock, 1000);
updateClock();