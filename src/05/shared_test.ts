import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";
import { parse } from "./shared.ts";

Deno.test("should return the correct crates and moves", () => {
	const input = `    [D]    
[N] [C]    
[Z] [M] [P]
 1   2   3 

move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2`;

	assertEquals(parse(input), {
		crates: [["Z", "N"], ["M", "C", "D"], ["P"]],
		moves: [[1, 2, 1], [3, 1, 3], [2, 2, 1], [1, 1, 2]],
	});
});
