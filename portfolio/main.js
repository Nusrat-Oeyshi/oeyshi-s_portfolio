// Mobile nav toggle
const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show");
  });

  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("show");
    });
  });
}

// Fake contact form (no backend)
const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

if (form && status) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    status.textContent = "Thanks! This demo form does not actually send email.";
    status.style.color = "#4ade80";
  });
}

// Current year in footer
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// Live date & time
const clockEl = document.getElementById("clock");

function updateClock() {
  if (!clockEl) return;

  const now = new Date();
  const options = {
    weekday: "short",
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  };

  clockEl.textContent = now.toLocaleString(undefined, options);
}

updateClock();
setInterval(updateClock, 1000);
