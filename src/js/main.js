import customScrollTo from './smoothScroll';

let position = window.scrollY;

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

const easeBoxes = [];
const cristals = document.querySelectorAll('.main__content');
if (cristals.length) {
	[...cristals].forEach(cristal => {
		easeBoxes.push(
			basicScroll.create({
				elem: cristal,
				from: 'middle-bottom',
				to: 'bottom-top',
				direct: document.querySelector('.main__content'),
				props: {
					'--ty': {
						from: '0',
						to: '150px',
						timing: 'expoIn'
					}
				}
			})
		);
	});
}

//easeBoxes.forEach(easeBox => easeBox.start());

// instance.start();

// const instance2 = basicScroll.create({
// 	elem: document.querySelector('.cristal-2'),
// 	from: 'bottom-top',
// 	to: 'top-bottom',
// 	direct: true,
// 	props: {
// 		'--translateY': {
// 			from: '0',
// 			to: '30%',
// 			timing: 'elasticOut'
// 		}
// 	}
// });
// const instance3 = basicScroll.create({
// 	elem: document.querySelector('.cristal-3'),
// 	from: 'bottom-top',
// 	to: 'top-bottom',
// 	direct: true,
// 	props: {
// 		'--translateY': {
// 			from: '0',
// 			to: '30%',
// 			timing: 'elasticOut'
// 		}
// 	}
// });
// const instance4 = basicScroll.create({
// 	elem: document.querySelector('.cristal-4'),
// 	from: 'bottom-top',
// 	to: 'top-bottom',
// 	direct: true,
// 	props: {
// 		'--translateY': {
// 			from: '0',
// 			to: '30%',
// 			timing: 'elasticOut'
// 		}
// 	}
// });

// instance2.start();
// instance3.start();
// instance4.start();

// document.addEventListener('scroll', () => {
// 	const crictal = document.querySelector('.cristal-1');
// 	const crictal2 = document.querySelector('.cristal-2');
// 	var t = performance.now();
// 	//console.log(position - window.scrollY);
// 	if (Math.abs(position - window.scrollY) < 70) {
// 		crictal.style.marginTop = -((position - window.scrollY) / 2) + 'px';
// 		crictal2.style.marginBottom = (position - window.scrollY) / 2 + 'px';
// 		//crictal2.style.transform = `rotate(${(position - window.scrollY) / 2}deg)`;
// 		(position - window.scrollY) / 2 + 'px';
// 	}
// 	//console.log(window.screenTop / t);
// 	// if (window.scrollY < 150) {
// 	// 	crictal.style.marginTop = -(window.scrollY / 2) + 'px';
// 	// }
// });
