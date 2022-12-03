import { splitNewLines } from "../shared/text.ts";

export function parseElves(input: string) {
	const lines = splitNewLines(input);
	const elves: Array<Array<number>> = [];
	let elf: Array<number> = [];

	for (let i = 0; i < lines.length; i++) {
		const line = lines[i];
		if (!line) {
			elves.push(elf);
			elf = [];
			continue;
		}

		elf.push(Number(line));

		if (i === lines.length - 1) {
			elves.push(elf);
		}
	}

	return elves;
}
