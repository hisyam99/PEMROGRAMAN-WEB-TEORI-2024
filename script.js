AOS.init();

function validateForm() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let service = document.getElementById("service").value.trim();
    let message = document.getElementById("message").value.trim();
  
    if (
      name === "" ||
      email === "" ||
      phone === "" ||
      service === "" ||
      message === ""
    ) {
      window.alert("Semua data harus diisi.");
    } else {
      window.alert("Form terkirim!");
    }
  }

// const mobileMenu = document.querySelector(".mobile-menu");
// const openMenuBtn = document.getElementById("openMenu");
// const closeMenuBtn = document.getElementById("closeMenu");

// openMenuBtn.addEventListener("click", () => {
//   mobileMenu.classList.remove("-translate-x-full");
// });

// closeMenuBtn.addEventListener("click", () => {
//   mobileMenu.classList.add("-translate-x-full");
// });

// const mobileMenuItems = mobileMenu.querySelectorAll("a");
// mobileMenuItems.forEach((item) => {
//   item.addEventListener("click", () => {
//     mobileMenu.classList.add("-translate-x-full");
//   });
// });

// document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
//   anchor.addEventListener("click", function (e) {
//     e.preventDefault();
//     document.querySelector(this.getAttribute("href")).scrollIntoView({
//       behavior: "smooth",
//     });
//   });
// });
