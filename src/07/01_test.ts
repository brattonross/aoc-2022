import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";
import part1 from "./01.ts";

Deno.test("should return the sum of size of directories that are at most 100_000", () => {
	const input = `$ cd /
$ ls
dir a
14848514 b.txt
8504156 c.dat
dir d
$ cd a
$ ls
dir e
29116 f
2557 g
62596 h.lst
$ cd e
$ ls
584 i
$ cd ..
$ cd ..
$ cd d
$ ls
4060174 j
8033020 d.log
5626152 d.ext
7214296 k`;

	assertEquals(part1(input), 95437);
});
