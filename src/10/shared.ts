import { splitNewLines } from "../shared/text.ts";

const durations: Record<string, number> = {
	"noop": 1,
	"addx": 2,
};

export function* process(input: string) {
	const lines = splitNewLines(input);
	const instructions: Array<[string, number]> = lines.map((x) => {
		const parts = x.split(" ");
		return [parts[0], Number(parts[1])];
	});

	let x = 1;
	// Tuple containing the cycle that the instruction ends on, and the value to add to x.
	let currentInstruction: [number, number] | null = null;
	let instructionPointer = 0;

	for (let cycle = 1;; cycle++) {
		if (instructionPointer >= instructions.length) {
			break;
		}

		if (!currentInstruction) {
			const [instruction, arg] = instructions.at(instructionPointer++)!;
			currentInstruction = [cycle + durations[instruction] - 1, arg || 0];
		}

		yield { cycle, x };

		if (cycle === currentInstruction[0]) {
			x += currentInstruction[1];
			currentInstruction = null;
		}
	}
}
