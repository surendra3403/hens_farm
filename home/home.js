// Toggle sidebar visibility
function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("open");
}

// Expand/collapse data tables
document.addEventListener("DOMContentLoaded", function () {
  const boxes = document.querySelectorAll(".total-box");

  boxes.forEach((box) => {
    box.addEventListener("click", function () {
      const table = this.nextElementSibling;
      const arrow = this.querySelector(".arrow");

      const isVisible = table.style.display === "block";
      table.style.display = isVisible ? "none" : "block";
      arrow.classList.toggle("rotate", !isVisible);
    });
  });
});
