import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";
import { max, nLargest, sum } from "./math.ts";

Deno.test("max", async (t) => {
	await t.step("should return the largest number in the array", () => {
		assertEquals(max([10, 6, 2, 70, 52, 13, 1]), 70);
	});
});

Deno.test("nLargest", async (t) => {
	await t.step("should return the n largest numbers in the array", () => {
		assertEquals(nLargest([8, 7, 5, 1, 2, 10], 4), [10, 8, 7, 5]);
	});
});

Deno.test("sum", async (t) => {
	await t.step("should return the sum of given numbers", () => {
		assertEquals(sum([1, 2, 3]), 6);
	});
});
