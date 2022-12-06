import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";
import part1 from "./01.ts";

Deno.test("should return the number of characters that need to be processed before the first start-of-packet marker", () => {
	const data = [
		["mjqjpqmgbljsphdztnvjfqwrcgsmlb", 7],
		["bvwbjplbgvbhsrlpgdmjqwftvncz", 5],
		["nppdvjthqldpwncqszvftbrmjlhg", 6],
		["nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg", 10],
		["zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw", 11],
	] as const;

	for (const [input, expected] of data) {
		assertEquals(part1(input), expected);
	}
});
