function parseRange(range: string) {
	return range.split("-").map(Number);
}

export function parseRanges(line: string) {
	const [first, second] = line.split(",");
	const firstRange = parseRange(first);
	const secondRange = parseRange(second);
	return [firstRange, secondRange];
}
