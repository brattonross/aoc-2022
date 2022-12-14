import { sumBy } from "../shared/math.ts";
import { splitNewLines } from "../shared/text.ts";
import { parseRanges } from "./shared.ts";

function isCompleteOverlap(
	[firstStart, firstEnd]: Array<number>,
	[secondStart, secondEnd]: Array<number>,
) {
	return (firstStart <= secondStart && firstEnd >= secondEnd) || // first range fully contains second
		(firstStart >= secondStart && firstEnd <= secondEnd); // second range fully contains first
}

export default function part1(input: string) {
	const lines = splitNewLines(input);
	return sumBy(lines, (line) => {
		const [first, second] = parseRanges(line);
		return isCompleteOverlap(first, second) ? 1 : 0;
	});
}
