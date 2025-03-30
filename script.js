document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll("nav ul li a");
  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  links.forEach((link) => {
    if (link.getAttribute("href").split("/").pop() === currentPage) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});
