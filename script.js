function toggleMenu() {
  const menu = document.getElementById('hamburger-menu');
  const links = document.getElementById('page-heading-links');

 if (links.style.display === 'block') {
    links.style.display = 'none';
    menu.classList.remove('open');
  } else {
    links.style.display = 'block';
    menu.classList.add('open');
  }
}

document.addEventListener('click', (e) => {
  const targetId = e.target.id;
  const idsToIgnore = [
    'hamburger-menu', 
    'about-nav-item', 
    'projects-nav-item', 
    'contact-nav-item',
    'hamburger-menu-span-1',
    'hamburger-menu-span-2',
    'hamburger-menu-span-3',
    'hamburger-menu-span-4'
  ];
  const ignoreId = idsToIgnore.some(id => id === targetId);

  if (ignoreId) {
    return;
  }

  const links = document.getElementById('page-heading-links');
  const menu = document.getElementById('hamburger-menu');

  menu.classList.remove('open');
  links.style.display = 'none';
});