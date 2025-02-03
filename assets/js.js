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
    const navLinks = document.querySelectorAll("#header .nav-link");
    const nav1 = document.querySelectorAll(".hhh");
   
    // Loop through each link
    navLinks.forEach(link => {
      link.addEventListener("click", function () {
        // Remove 'd-none' from all elements with class 'hhh'
        nav1.forEach(el => el.classList.remove("d-none"));

        // Remove 'gradient-text' from the previously active link
        document.querySelector(".gradient-text")?.classList.remove("gradient-text");

        // Add 'gradient-text' to the clicked link
        this.classList.add("gradient-text");
      });
    });
});