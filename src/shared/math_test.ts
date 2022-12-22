import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";
import {
	greatestCommonDivisor,
	leastCommonMultiple,
	max,
	nLargest,
	sum,
	sumBy,
} from "./math.ts";

Deno.test("greatestCommonDivisor", () => {
	assertEquals(greatestCommonDivisor(8, 12), 4);
});

Deno.test("leastCommonMultiple", () => {
	assertEquals(leastCommonMultiple(8, 9, 21), 504);
});

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

Deno.test("sumBy", async (t) => {
	await t.step(
		"should return the sum of values returned from the given function",
		() => {
			const objects = [{ "n": 4 }, { "n": 2 }, { "n": 8 }, { n: 6 }];
			assertEquals(sumBy(objects, (o) => o.n), 20);
		},
	);
});
