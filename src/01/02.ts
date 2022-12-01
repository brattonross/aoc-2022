import { nLargest, sum } from "../shared/math.ts";
import { parseElves } from "./shared.ts";

export default function part2(input: string) {
	const elves = parseElves(input);
	const sums = elves.map((elf) => sum(elf));
	const top3 = nLargest(sums, 3);
	return sum(top3);
}
