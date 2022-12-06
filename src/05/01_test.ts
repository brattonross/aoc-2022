import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";
import part1 from "./01.ts";

Deno.test("should return a string representing the crate on the top of each stack", () => {
	const input = `    [D]    
[N] [C]    
[Z] [M] [P]
 1   2   3 

move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2`;

	assertEquals(part1(input), "CMZ");
});
