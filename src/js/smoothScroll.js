const customScrollTo = (position, duration = false) => {
	const stepTime = 1; //update frequency
	const quantityPixelPerSetep = 30; //optmal value
	const minimalStep = 80; //short click not quick

	let distance = window.pageYOffset - position;
	if (distance === 0) {
		return;
	}

	let steps = duration
		? Math.abs(Math.ceil(duration / stepTime))
		: Math.abs(Math.ceil(distance / quantityPixelPerSetep));
	if (steps < minimalStep) {
		steps = minimalStep;
	}

	let distanceInSteps = distance / steps;
	let currentDistance = window.pageYOffset;

	const intervalHandler = () => {
		steps--;
		currentDistance = currentDistance - distanceInSteps;
		window.scroll(0, Math.ceil(currentDistance));
		if (!steps) {
			clearInterval(intervalScroll);
		}
	};

	const intervalScroll = setInterval(intervalHandler, stepTime);
};

export default customScrollTo;
