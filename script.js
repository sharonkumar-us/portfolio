// Simple light/dark theme toggle
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("theme-toggle");
  if (!toggle) return;

  const root = document.documentElement;

  const getPreferredTheme = () => {
    const stored = localStorage.getItem("theme");
    if (stored === "light" || stored === "dark") return stored;

    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  };

  const applyTheme = (theme) => {
    root.classList.remove("theme-light", "theme-dark");
    root.classList.add(`theme-${theme}`);

    if (theme === "dark") {
      toggle.textContent = "🌙";
      toggle.setAttribute("aria-label", "Switch to light theme");
    } else {
      toggle.textContent = "☀️";
      toggle.setAttribute("aria-label", "Switch to dark theme");
    }
  };

  let currentTheme = getPreferredTheme();
  applyTheme(currentTheme);

  toggle.addEventListener("click", () => {
    currentTheme = currentTheme === "dark" ? "light" : "dark";
    applyTheme(currentTheme);
    localStorage.setItem("theme", currentTheme);
  });
});

