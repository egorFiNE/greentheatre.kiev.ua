const banner = document.createElement('div');
banner.className = 'museum-banner';
banner.lang = 'ru';
banner.appendChild(document.createTextNode('Этот сайт сохраняется как музей. '));

const link = document.createElement('a');
link.href = '/this-site-is-a-museum.html';
link.textContent = 'Подробнее';
banner.appendChild(link);

const closeButton = document.createElement('button');
closeButton.type = 'button';
closeButton.className = 'museum-banner-close';
closeButton.setAttribute('aria-label', 'Закрыть баннер');
closeButton.textContent = '×';
closeButton.addEventListener('click', () => banner.remove());
banner.appendChild(closeButton);

document.body.insertBefore(banner, document.body.firstChild);
