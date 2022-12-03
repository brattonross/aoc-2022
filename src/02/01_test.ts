import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";
import part1 from "./01.ts";

Deno.test("should return the total score", () => {
	const input = `A Y
B X
C Z`;

	assertEquals(part1(input), 15);
});
