function openTab(tabName) {
  var i;
  var tabContent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }
  document.getElementById(tabName).style.display = "block";
}
document.addEventListener("DOMContentLoaded", function () {
  var tabButtons = document.getElementsByClassName("tab-button");
  for (var i = 0; i < tabButtons.length; i++) {
    tabButtons[i].addEventListener("click", function (event) {
      var tabName = event.target.getAttribute("onclick").match(/'([^']+)'/)[1];
      openTab(tabName);
    });
  }
});
