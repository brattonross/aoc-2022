import { splitNewLines } from "../shared/text.ts";

function parseRange(range: string) {
	return range.split("-").map(Number);
}

function parseRanges(line: string) {
	const [first, second] = line.split(",");
	const firstRange = parseRange(first);
	const secondRange = parseRange(second);
	return [firstRange, secondRange];
}

function isCompleteOverlap(
	[firstStart, firstEnd]: Array<number>,
	[secondStart, secondEnd]: Array<number>,
) {
	return (firstStart <= secondStart && firstEnd >= secondEnd) || // first range fully contains second
		(firstStart >= secondStart && firstEnd <= secondEnd); // second range fully contains first
}

export default function part1(input: string) {
	const lines = splitNewLines(input);
	return lines.reduce((total, line) => {
		const [first, second] = parseRanges(line);
		return isCompleteOverlap(first, second) ? total + 1 : total;
	}, 0);
}
