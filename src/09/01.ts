import { numPositionsTouchedByTail, parseMoves } from "./shared.ts";

export default function part1(input: string) {
	const moves = parseMoves(input);
	return numPositionsTouchedByTail(moves);
}
