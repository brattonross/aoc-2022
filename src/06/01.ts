const width = 4;

export default function part1(input: string) {
	for (let i = 0; i <= input.length - width; i++) {
		const slice = input.slice(i, i + width);
		const set = new Set(slice);
		if (set.size === slice.length) {
			return i + width;
		}
	}
}
