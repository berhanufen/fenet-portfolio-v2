/* ============================================
   EDIT ME: update any project link here and it
   updates everywhere it's used across the site.
   ============================================ */
const projectLinks = {
  puppyLovers: "https://puppyloverr.netlify.app",
  appleClone: "https://appplepagee.netlify.app",
  bookstore: "https://bookstorewebsitee.netlify.app",
  formValidation: "https://formcreationvalidation.netlify.app",
  todoList: "https://dynamictodolists.netlify.app",
};
document.querySelectorAll("[data-link]").forEach((el) => {
  const key = el.getAttribute("data-link");
  if (projectLinks[key]) el.setAttribute("href", projectLinks[key]);
});

const navToggle = document.querySelector(".nav__toggle");
const navLinks = document.querySelector(".nav__links");
if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}
