import { firstUniqueSubstring } from "./shared.ts";

const length = 14;

export default function part2(input: string) {
	return firstUniqueSubstring(input, length)! + length;
}
