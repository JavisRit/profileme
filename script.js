const header = document.querySelector("header")

window.addEventListener ("scroll", function() {
    header.classList.toggle ("sticky", window.scrollY > 120);
});

const menuIcon = document.getElementById('menu-icon');
const navList = document.querySelector('.navlist');

menuIcon.addEventListener('click', function() {
    navList.classList.toggle('show');
});

const submitBtn = document.getElementById('submit-btn');

submitBtn.addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default form submission behavior

  // Display the SweetAlert popup
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Something went wrong!",
    footer: '<a href="#">Why do I have this issue?</a>'
  });
});