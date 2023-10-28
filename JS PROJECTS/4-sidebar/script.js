const toggleSidebarButton = document.getElementById("toggle-sidebar");
const sidebar = document.querySelector(".sidebar");
const content = document.querySelector(".content");

toggleSidebarButton.addEventListener("click", () => {
  sidebar.classList.toggle("open");
  content.classList.toggle("open");
});
