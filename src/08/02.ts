import { buildTrees } from "./shared.ts";

function getScenicDirectionalScore(
	trees: ReturnType<typeof buildTrees>,
	rowStart: number,
	colStart: number,
	direction: string,
) {
	const treeHeight = trees[rowStart][colStart];
	let score = 0;

	if (direction === "up") {
		for (let row = rowStart - 1; row >= 0; row--) {
			score++;
			if (trees[row][colStart] >= treeHeight) {
				return score;
			}
		}
	} else if (direction === "left") {
		for (let col = colStart - 1; col >= 0; col--) {
			score++;
			if (trees[rowStart][col] >= treeHeight) {
				return score;
			}
		}
	} else if (direction === "right") {
		for (let col = colStart + 1; col < trees[rowStart].length; col++) {
			score++;
			if (trees[rowStart][col] >= treeHeight) {
				return score;
			}
		}
	} else if (direction === "down") {
		for (let row = rowStart + 1; row < trees.length; row++) {
			score++;
			if (trees[row][colStart] >= treeHeight) {
				return score;
			}
		}
	}

	return score;
}

function getScenicScore(
	trees: ReturnType<typeof buildTrees>,
	row: number,
	col: number,
) {
	// Trees on the edge have at least one distance of 0, meaning the score will be 0.
	if (
		row === 0 ||
		row === trees.length - 1 ||
		col === 0 ||
		col === trees[row].length - 1
	) {
		return 0;
	}

	return ["up", "left", "right", "down"].reduce(
		(product, dir) => product * getScenicDirectionalScore(trees, row, col, dir),
		1,
	);
}

export default function part2(input: string) {
	const trees = buildTrees(input);

	let highestScore = 0;

	for (let row = 0; row < trees.length; row++) {
		for (let col = 0; col < trees[row].length; col++) {
			const score = getScenicScore(trees, row, col);
			if (score > highestScore) {
				highestScore = score;
			}
		}
	}

	return highestScore;
}
