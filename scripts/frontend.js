const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.section-active');

const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.6
};

const handleSectionIntersection = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const currentSectionId = entry.target.getAttribute('id');

      sections.forEach((section) => section.classList.remove('active'));
      navItems.forEach((item) => item.classList.remove('active'));

      entry.target.classList.add('active');

      navItems.forEach((item) => {
        const itemHref = item.getAttribute('section-id');

        const matchesHref = itemHref === `#${currentSectionId}`;

        if (matchesHref) {
          item.classList.add('active');
          item.classList.add('active-once');
        }
      });
    }
  });
};

const sectionObserver = new IntersectionObserver(handleSectionIntersection, observerOptions);

sections.forEach((section) => sectionObserver.observe(section));



function toggleMenu() {
  document.getElementById("menuList").classList.toggle("open");
  document.getElementById("menuListButton").classList.toggle("open");
}