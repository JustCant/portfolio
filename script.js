function toggleMenu() {
  const menu = document.getElementById('page-heading-menu-btn');
  const links = document.getElementById('page-heading-links');

  links.style.display = 'block';
  menu.classList.toggle('open');
  links.classList.toggle('hidden');
}

document.addEventListener('click', (e) => {
  const targetId = e.target.id;
  const idsToIgnore = [
    'page-heading-menu-btn', 
    'about-nav-item', 
    'projects-nav-item', 
    'contact-nav-item',
    'page-heading-menu-btn-span-1',
    'page-heading-menu-btn-span-2',
    'page-heading-menu-btn-span-3',
    'page-heading-menu-btn-span-4'
  ];
  const ignoreId = idsToIgnore.some(id => id === targetId);

  if (ignoreId) {
    return;
  }

  const links = document.getElementById('page-heading-links');
  const menu = document.getElementById('page-heading-menu-btn');

  menu.classList.remove('open');
  links.classList.add('hidden');
});