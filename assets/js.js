window.addEventListener("scroll", function () {
    var header = document.getElementById("header");
    if (window.scrollY > 50) {
      header.classList.add("sticky-header");
    } else {
      header.classList.remove("sticky-header");
    }
  });
  document.addEventListener("DOMContentLoaded", function () {
    // Select all nav links
    const navLinks = document.querySelectorAll(".nav-link");
    const nav1 = document.querySelectorAll(".hhh");
   
    // Loop through each link
    navLinks.forEach(link => {
      link.addEventListener("click", function () {
        nav1.classList.remove("d-none");
        // Remove 'gradient-text' from Home link
        document.querySelector(".gradient-text")?.classList.remove("gradient-text");
  
        // Add 'gradient-text' to the clicked link
        this.classList.add("gradient-text");
      });
    });
  });