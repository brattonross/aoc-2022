import { numPositionsTouchedByTail, parseMoves } from "./shared.ts";

export default function part2(input: string) {
  const moves = parseMoves(input);
  return numPositionsTouchedByTail(moves, 10);
}
