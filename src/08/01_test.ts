import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";
import part1 from "./01.ts";

Deno.test(
	"should return the number of trees visible from outside the grid",
	() => {
		const input = `30373
25512
65332
33549
35390`;

		assertEquals(part1(input), 21);
	},
);
