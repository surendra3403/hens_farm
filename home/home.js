function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("open");
  }
  
  // Toggle functionality for each box
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


// function for date pick for data to display
function formatDate(date) {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

function isTodayString(yyyyMmDd) {
  const today = new Date();
  const todayString = today.toISOString().split('T')[0];
  return yyyyMmDd === todayString;
}

function updateDateInput(dateStr) {
  const datePicker = document.getElementById('date-picker');
  if (isTodayString(dateStr)) {
    datePicker.setAttribute('data-label', "Today's");
  } else {
    const dateObj = new Date(dateStr);
    datePicker.setAttribute('data-label', formatDate(dateObj));
  }
  overrideDisplayValue();
}

function overrideDisplayValue() {
  const datePicker = document.getElementById('date-picker');
  const label = datePicker.getAttribute('data-label') || '';
  if (label) {
    datePicker.classList.add('fake-date');
    datePicker.setAttribute('title', label);
  } else {
    datePicker.classList.remove('fake-date');
    datePicker.removeAttribute('title');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const datePicker = document.getElementById('date-picker');

  // Set today as default
  const todayISO = new Date().toISOString().split('T')[0];
  datePicker.value = todayISO;

  updateDateInput(todayISO);

  datePicker.addEventListener('change', () => {
    const selectedISO = datePicker.value;
    updateDateInput(selectedISO);
  });
});


  