export function max(nums: Array<number>) {
	return nums.reduce((max, cur) => cur > max ? cur : max);
}

export function nLargest(nums: Array<number>, n: number) {
	return nums.sort((a, b) => b - a).slice(0, n);
}

export function sum(nums: Array<number>) {
	return nums.reduce((total, cur) => total + cur, 0);
}

export function sumBy<T>(arr: Array<T>, fn: (arg: T) => number) {
	return arr.reduce((total, cur) => total + fn(cur), 0);
}
