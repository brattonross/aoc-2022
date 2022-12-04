function parseRange(range: string) {
	return range.split("-").map(Number);
}

export function parseRanges(line: string) {
	return line.split(",").map(parseRange);
}
