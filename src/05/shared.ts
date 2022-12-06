import { splitNewLines } from "../shared/text.ts";

export function parse(input: string) {
	const lines = splitNewLines(input);
	const blankLineIndex = lines.findIndex((line) => !line);
	// All lines up until a blank line represent the initial state of the crates.
	// We remove the line with the stack numbers as we don't need it.
	const crateLines = lines.slice(0, blankLineIndex - 1);
	// All lines after the blank line represent the moves to make.
	const moveLines = lines.slice(blankLineIndex + 1);

	const crates: Array<Array<string>> = [];
	for (let i = crateLines.length - 1; i >= 0; i--) {
		const line = crateLines[i];
		for (let j = 1; j < line.length; j += 4) {
			if (line[j] === " ") {
				continue;
			}

			const crateIndex = (j - 1) / 4;
			if (!crates[crateIndex]) {
				crates[crateIndex] = [];
			}
			crates[crateIndex].push(line[j]);
		}
	}

	const moves = moveLines.map((line) => {
		const parts = line.split(" ");
		return [parts[1], parts[3], parts[5]].map((x) => Number(x));
	});

	return { crates, moves };
}
