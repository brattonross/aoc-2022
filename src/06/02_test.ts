import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";
import part2 from "./02.ts";

Deno.test("should return the number of characters that need to be processed before the first start-of-packet marker", () => {
	const data = [
		["mjqjpqmgbljsphdztnvjfqwrcgsmlb", 19],
		["bvwbjplbgvbhsrlpgdmjqwftvncz", 23],
		["nppdvjthqldpwncqszvftbrmjlhg", 23],
		["nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg", 29],
		["zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw", 26],
	] as const;

	for (const [input, expected] of data) {
		assertEquals(part2(input), expected);
	}
});
