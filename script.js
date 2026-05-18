function updateClock() {
  const now = new Date();

  let hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const period = hours >= 12 ? "PM" : "AM";

  hours = hours % 12 || 12;

  document.getElementById("hours").textContent   = String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
  document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
  document.getElementById("period").textContent  = period;

  const days   = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

  const dayName   = days[now.getDay()];
  const day       = now.getDate();
  const monthName = months[now.getMonth()];
  const year      = now.getFullYear();

  document.getElementById("date").textContent = `${dayName}, ${day} ${monthName} ${year}`;
}

updateClock();
setInterval(updateClock, 1000);
