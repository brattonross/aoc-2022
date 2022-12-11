import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";
import part1 from "./01.ts";

Deno.test(
	"should return the number of positions that the tail of the rope visits at least once",
	() => {
		const input = `R 4
U 4
L 3
D 1
R 4
D 1
L 5
R 2`;

		assertEquals(part1(input), 13);
	},
);
