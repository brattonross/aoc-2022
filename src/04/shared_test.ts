import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";
import { parseRanges } from "./shared.ts";

Deno.test("parseRanges", async (t) => {
	await t.step("should return the ranges found in the given line", () => {
		assertEquals(parseRanges("2-4,6-8"), [[2, 4], [6, 8]]);
	});
});
