AOS.init();

document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contact-form");

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const service = document.getElementById("service").value;
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !phone || !service || !message) {
      alert("Mohon lengkapi semua field sebelum mengirim pesan.");
      return;
    }

    console.log({
      nama: name,
      email: email,
      telepon: phone,
      layanan: service,
      pesan: message,
    });

    alert("Pesan Anda berhasil dikirim!");

    contactForm.reset();
  });
});
