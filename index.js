const dayscomp = document.getElementById("days");
const hourscomp = document.getElementById("hours");
const minutescomp = document.getElementById("minutes");
const secondscomp = document.getElementById("seconds");
const newYearTime = new Date("Jan 1,2023 00:00:00").getTime();
updateCountdown();
function updateCountdown() {
  const now = new Date().getTime();
  const gap = newYearTime - now;
  const seconds = 1000;
  const minutes = seconds * 60;
  const hours = minutes * 60;
  const days = hours * 24;

  const d = Math.floor(gap / days);
  const h = Math.floor((gap % days) / hours);
  const m = Math.floor((gap % hours) / minutes);
  const s = Math.floor((gap % minutes) / seconds);
  dayscomp.innerText = d;
  hourscomp.innerText = h;
  minutescomp.innerText = m;
  secondscomp.innerText = s;
  setTimeout(updateCountdown, 1000);
}
