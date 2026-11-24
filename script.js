const themeToggle = document.querySelector(".theme-toggle");
const root = document.documentElement;

try {
  if (localStorage.getItem("theme") === "dark") {
    root.dataset.theme = "dark";
    themeToggle.setAttribute("aria-pressed", "true");
  }
} catch {
  // Theme changes still work when the browser blocks storage.
}

themeToggle.addEventListener("click", () => {
  const dark = root.dataset.theme !== "dark";
  const theme = dark ? "dark" : "light";
  root.dataset.theme = theme;
  themeToggle.setAttribute("aria-pressed", String(dark));

  try {
    localStorage.setItem("theme", theme);
  } catch {
    // Keep the current theme for this page view.
  }
});

themeToggle.hidden = false;
