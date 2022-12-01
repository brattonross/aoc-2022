export function sum(nums: Array<number>) {
	return nums.reduce((sum, cur) => sum + cur, 0);
}

export function max(nums: Array<number>) {
	let max = 0;

	for (const num of nums) {
		if (num > max) {
			max = num;
		}
	}

	return max;
}

export function nLargest(nums: Array<number>, n: number) {
	return nums.sort((a, b) => b - a).slice(0, n);
}
