import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";
import part2 from "./02.ts";

Deno.test(
	"should return the sum of the calories carried by the 3 elves that are carrying the most",
	() => {
		const input = `1000
2000
3000

4000

5000
6000

7000
8000
9000

10000`;

		assertEquals(part2(input), 45000);
	},
);
