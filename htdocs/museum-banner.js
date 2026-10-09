/* Museum banner */
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

/* `/random` handler */
const pages = [
  '/misc/serpcom.html',
  '/misc/gazeta.html',
  '/misc/otchet.html',
  '/misc/beltane.html',
  '/legends/index.html',
  '/legends/musor.html',
  '/obitateli/index.html',
  '/underground/index.html',
  '/underground/our.html',
  '/underground/120699.html',
  '/underground/080599.html',
  '/underground/090599.html',
  '/underground/links/index.html',
  '/underground/refs/index.html',
  '/underground/maillist.html',
  '/info/index.html',
  '/news/index.html',

  '/photos/jan07/index.html',
  '/photos/index.html',
  '/photos/egor/index.html',
  '/photos/max.html',

  // Those are not part of the random link rotation:
  // '/news/old0799.html',
  // '/news/old0599.html',
  // '/news/old06082000.html'
];

const linkToRandom = document.querySelector('a[href="/random"]');
if (linkToRandom) {
  linkToRandom.addEventListener('click', event => {
    event.preventDefault();
    const randomPage = pages[Math.floor(Math.random() * pages.length)];
    window.location.href = randomPage;
  });
}
