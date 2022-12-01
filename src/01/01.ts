import { max, parseElves, sum } from "./shared.ts";

export default function part1(input: string) {
  const elves = parseElves(input);
  const sums = elves.map((elf) => sum(elf));
  return max(sums);
}
