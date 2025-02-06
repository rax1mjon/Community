document.addEventListener("DOMContentLoaded", () => {
  const navMenu = document.getElementById("humburger"); // Tugma
  const navLink = document.getElementById("navbar"); // Navbar menyu

  navMenu.addEventListener("click", () => {
    console.log("Hamburger clicked!"); // Tekshirish uchun konsolga chiqaramiz
    navLink.classList.toggle("navbarActive");
  });
});
