import { firstUniqueSubstring } from "./shared.ts";

const length = 4;

export default function part1(input: string) {
	return firstUniqueSubstring(input, length)! + length;
}
