var typed = new Typed("#typed", {
  strings: ["HTML", "CSS", "JavaScript", "Bootstrap", "Tailwind", "WordPress"],
  typeSpeed: 80,
  backSpeed: 50,
  backDelay: 750,
  loop: true,
});

function toggleMenu() {
  document.getElementById("nav-links").classList.toggle("show");
}

const form = document.getElementById("contact-form");
form.addEventListener("submit", async function (e) {
  e.preventDefault();
  const formData = new FormData(form);
  try {
    const response = await fetch(form.action, {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });
    if (response.ok) {
      alert("✅ Your message has been sent successfully!");
      form.reset();
    } else {
      alert("❌ Oops! Something went wrong. Try again later.");
    }
  } catch (error) {
    alert("❌ Network error. Please try later.");
  }
});
