export function greatestCommonDivisor(a: number, b: number): number {
	// Implementation of Euclidean algorithm
	return !b ? a : greatestCommonDivisor(b, a % b);
}

export function leastCommonMultiple(...nums: Array<number>): number;
export function leastCommonMultiple(...nums: Array<number>) {
	const lcm = (a: number, b: number) => (a * b) / greatestCommonDivisor(a, b);

	let result = nums[0];
	for (const num of nums) {
		result = lcm(result, num);
	}
	return result;
}

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
