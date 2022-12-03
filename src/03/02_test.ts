import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";
import part2 from "./02.ts";

Deno.test("should return the sum of priorities", () => {
	const input = `vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw`;

	assertEquals(part2(input), 70);
});
