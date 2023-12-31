const body = document.querySelector("body");
const darkBtn = document.getElementById("dark-btn");
const lightBtn = document.getElementById("light-btn");
const localMode = localStorage.getItem("mode");
if (localMode) {
  body.classList.add("dark-mode");
  darkBtn.classList.toggle("hidden");
  lightBtn.classList.toggle("hidden");
}
const toggleMode = function () {
  darkBtn.classList.toggle("hidden");
  lightBtn.classList.toggle("hidden");
  body.classList.toggle("dark-mode");
};
darkBtn.addEventListener("click", () => {
  toggleMode();
  localStorage.setItem("mode", "dark-mode");
});
lightBtn.addEventListener("click", () => {
  toggleMode();
  localStorage.setItem("mode", "");
});
