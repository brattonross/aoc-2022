import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";
import part1 from "./01.ts";

Deno.test("should return the sum of priorities", () => {
	const input = `vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw`;

	assertEquals(part1(input), 157);
});
