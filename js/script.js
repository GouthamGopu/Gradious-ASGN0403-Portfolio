document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll("nav ul li a");
  let currentPage = window.location.pathname.split("/").pop();

  if (currentPage === "" || currentPage === "index.html") {
    currentPage = "index"; 
  }

  links.forEach((link) => {
    const linkPage = link.getAttribute("href").split("/").pop() || "index";

    if (linkPage === currentPage) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});
