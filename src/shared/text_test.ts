import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";
import { splitNewLines } from "./text.ts";

Deno.test("splitNewLines", async (t) => {
	await t.step("should split on new lines", () => {
		const input = `line 1\nline 2\r\nline 3`;
		assertEquals(splitNewLines(input), ["line 1", "line 2", "line 3"]);
	});
});
