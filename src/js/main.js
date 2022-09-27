import "../css/index.css";

var themeToggleLightIcon = document.getElementById("theme-toggle-light-icon");
var themeToggleDarkIcon = document.getElementById("theme-toggle-dark-icon");

// change the icons inside the button based on previous settings
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  themeToggleLightIcon.classList.remove("hidden");
} else {
  themeToggleDarkIcon.classList.remove("hidden");
}

// theme toggle button
var themeToggleBtn = document.getElementById("theme-toggle");

themeToggleBtn.addEventListener("click", () => {
  // toggle icons inside button
  themeToggleLightIcon.classList.toggle("hidden");
  themeToggleDarkIcon.classList.toggle("hidden");

  // if set via local storage previously
  if (localStorage.theme === "light") {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
});
