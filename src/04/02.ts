import { sumBy } from "../shared/math.ts";
import { splitNewLines } from "../shared/text.ts";
import { parseRanges } from "./shared.ts";

function isOverlap(
	[firstStart, firstEnd]: Array<number>,
	[secondStart, secondEnd]: Array<number>,
) {
	return !(firstEnd < secondStart || secondEnd < firstStart);
}

export default function part2(input: string) {
	const lines = splitNewLines(input);
	return sumBy(lines, (line) => {
		const [first, second] = parseRanges(line);
		return isOverlap(first, second) ? 1 : 0;
	});
}
