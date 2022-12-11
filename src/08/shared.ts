import { splitNewLines } from "../shared/text.ts";

export function buildTrees(input: string) {
	const lines = splitNewLines(input);

	const trees: Array<Array<number>> = [];
	for (let row = 0; row < lines.length; row++) {
		const chars = lines[row].split("");
		for (let col = 0; col < chars.length; col++) {
			if (!trees.at(row)) {
				trees[row] = [];
			}
			trees[row].push(Number(chars[col]));
		}
	}

	return trees;
}
