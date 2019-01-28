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
