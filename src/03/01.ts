import { sum } from "../shared/math.ts";
import { splitNewLines } from "../shared/text.ts";
import { toPriority } from "./shared.ts";

export default function part1(input: string) {
	const lines = splitNewLines(input);
	const values = lines.map((line) => {
		const halfwayIndex = line.length / 2;
		const firstHalf = line.slice(0, halfwayIndex).split("");
		const lastHalf = line.slice(halfwayIndex).split("");
		const match = firstHalf.find((char) => lastHalf.includes(char))!;
		return toPriority(match);
	});
	return sum(values);
}
