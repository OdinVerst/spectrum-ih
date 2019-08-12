import customScrollTo from './smoothScroll';

const allLinks = document.querySelectorAll('.nav__item-link');
if (allLinks.length) {
	[...allLinks].forEach(link => {
		link.addEventListener('click', e => {
			e.preventDefault();
			const href = link.getAttribute('href').slice(1);
			if (href && document.querySelector(`#${href}`)) {
				customScrollTo(document.querySelector(`#${href}`).offsetTop);
			}
		});
	});
}
