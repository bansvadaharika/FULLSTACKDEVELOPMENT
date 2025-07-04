function showCategory(category) {
  const container = document.getElementById("container-box");
  container.style.display = "block";
 
}


function scrollToFooter() {
  document.querySelector("footer").scrollIntoView({ behavior: "smooth" });
}
function showSubMenu() {
  document.getElementById("submenu").style.display = "block";
}

function hideSubMenu() {
  document.getElementById("submenu").style.display = "none";
}