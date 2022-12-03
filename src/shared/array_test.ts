import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";
import { chunk } from "./array.ts";

Deno.test("chunk", async (t) => {
	await t.step("should chunk into arrays of correct size", () => {
		assertEquals(chunk(["a", "b", "c"], 1), [["a"], ["b"], ["c"]]);
	});

	await t.step(
		"should chunk correctly with an array that cannot be split evenly",
		() => {
			assertEquals(chunk(["a", "b", "c", "d"], 3), [["a", "b", "c"], ["d"]]);
		},
	);
});
