/**
 * Returns the start index of the first unique substring of the given length
 * present in the input string, or null if none was found.
 */
export function firstUniqueSubstring(input: string, length: number) {
	for (let i = 0; i <= input.length - length; i++) {
		const slice = input.slice(i, i + length);
		const set = new Set(slice);
		if (set.size === slice.length) {
			return i;
		}
	}
	return null;
}
