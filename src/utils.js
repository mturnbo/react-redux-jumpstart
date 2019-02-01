export function generateNumArray(n) {
	return Array.from({length: n}, (v, k) => k + 1);
}

export function getRandomIntegerSet(size, max) {
	const randomSet = new Set([]);
	while (randomSet.size < size) {
		randomSet.add(Math.floor(Math.random() * max));
	}
	return randomSet;
}

export function getRandomSample(arr, n) {
	const randomKeys = getRandomIntegerSet(n, arr.length);
	const sample = [];
	for (let key of randomKeys) {
		sample.push(arr[key]);
	}
	return sample;
}

function addEasing(a) {
	if (flag === 1) { //check flag
		a.style.cssText = "transition: height 500ms; -webkit-transition: height 500ms; -moz-transition: height 500ms; -o-transition: height 500ms";
	} else {
		a.style.cssText = "transition: none; -webkit-transition: none; -moz-transition: none; -o-transition: none";
	}

}

export function fadeOut(e, containerClass, intervalTimeout = 30) {
	const target = e.target.closest(containerClass);
	return new Promise((resolve, reject) => {
		const effect = setInterval(() => {
			if (!target.style.opacity) {
				target.style.opacity = 1;
			}
			if (target.style.opacity > 0) {
				target.style.opacity -= 0.1;
			} else {
				clearInterval(effect);
				resolve('faded');
			}
		}, intervalTimeout);
	});
}

export function slideUp(e, containerClass, intervalTimeout = 10) {
	const target = e.target.closest(containerClass);
	return new Promise((resolve, reject) => {
		let newHeight = target.offsetHeight;
		const effect = setInterval( () => {
			if (newHeight > 0) {
				newHeight -= 5;
				target.style.height = `${newHeight}px`;
			} else {
				clearInterval(effect);
				resolve('slid-up');
			}
		}, intervalTimeout);
	});
}
