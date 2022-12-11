import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";
import part2 from "./02.ts";

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

		assertEquals(part2(input), 1);
	},
);

Deno.test(
	"should return the number of positions the tail of the rope visits at least once, complex",
	() => {
		const input = `R 5
U 8
L 8
D 3
R 17
D 10
L 25
U 20`;

		assertEquals(part2(input), 36);
	},
);
