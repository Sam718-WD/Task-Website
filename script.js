const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

  document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menu-icon');
    const sidebar = document.getElementById('sidebar');
    const sidebarLinks = sidebar.querySelectorAll('a');
    
    // Toggle sidebar visibility when the menu icon is clicked
    menuIcon.addEventListener('click', function () {
      sidebar.classList.toggle('open');
    });

    // Close sidebar when a link is clicked
    sidebarLinks.forEach(link => {
      link.addEventListener('click', function () {
        sidebar.classList.remove('open');
      });
    });
  });


gsap.from(".Navbar a", {
    x: 80,
    duration: 1,
    stagger: ".2",
})

