// ==================== MENÚ PARA CELULARES ====================
const menuButton = document.querySelector(".menu-button");
const navLinks = document.querySelector(".nav-links");

menuButton.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
});

navLinks.querySelectorAll("a").forEach((link) =>
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  }),
);

// ==================== ANIMACIONES AL DESPLAZARSE ====================
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 },
);

document
  .querySelectorAll(".reveal")
  .forEach((element) => observer.observe(element));
// Año automático del pie de página
document.querySelector("#year").textContent = new Date().getFullYear();

// ==================== FORMULARIO DE CONTACTO ====================
document
  .querySelector("#contact-form")
  .addEventListener("submit", async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = `Solicitud para Phoenix Engineering Services México\n\nNombre: ${data.get("nombre")}\nEmpresa: ${data.get("empresa")}\nContacto: ${data.get("contacto")}\n\nReto:\n${data.get("reto")}`;
    const status = event.currentTarget.querySelector(".form-status");
    try {
      await navigator.clipboard.writeText(message);
      status.textContent =
        "Tu solicitud quedó lista y se copió al portapapeles. Puedes compartirla por el canal de contacto de Phoenix.";
    } catch {
      status.textContent =
        "Tu solicitud quedó preparada. Copia tus datos y compártelos por el canal de contacto de Phoenix.";
    }
    status.classList.add("show");
  });
