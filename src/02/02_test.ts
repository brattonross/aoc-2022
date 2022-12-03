import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";
import part2 from "./02.ts";

Deno.test("should return the correct total score", () => {
	const input = `A Y
B X
C Z`;

	assertEquals(part2(input), 12);
});
