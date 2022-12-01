import { parseElves, sum } from "./shared.ts";

function nLargest(nums: Array<number>, n: number) {
  return nums.sort((a, b) => b - a).slice(0, n);
}

export default function part2(input: string) {
  const elves = parseElves(input);
  const sums = elves.map((elf) => sum(elf));
  const top3 = nLargest(sums, 3);
  return sum(top3);
}
