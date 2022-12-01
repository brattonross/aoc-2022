import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";
import part1 from "./01.ts";

Deno.test(
	"should return the maximum number of calories that a given elf is carrying",
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

		assertEquals(part1(input), 24000);
	},
);
