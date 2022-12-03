import { chunk } from "../shared/array.ts";
import { sum } from "../shared/math.ts";
import { splitNewLines } from "../shared/text.ts";
import { toPriority } from "./shared.ts";

export default function part2(input: string) {
	const lines = splitNewLines(input);
	const groups = chunk(lines, 3);
	const values = groups.map((group) => {
		const match = group[0].split("").find((char) =>
			group[1].includes(char) && group[2].includes(char)
		)!;
		return toPriority(match);
	});
	return sum(values);
}
