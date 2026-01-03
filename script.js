document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = form.querySelector('input[type="text"]').value.trim();
    const email = form.querySelector('input[type="email"]').value.trim();
    const message = form.querySelector('textarea').value.trim();

    // Simple front-end validation
    if (!name || !email || !message) {
      alert("Please fill in all fields before sending.");
      return;
    }

    // Here you would integrate with your backend or email service.
    // For now, show a friendly confirmation and reset the form.
    alert("Thanks, " + name + "! Your message has been received.");
    form.reset();
  });
});
