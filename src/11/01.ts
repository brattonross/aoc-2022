import { splitNewLines } from "../shared/text.ts";

type Monkey = {
	/** List of worry levels for each item that the monkey currently holds. */
	items: Array<number>;
	/** Operation that applies to the worry level as the monkey inspects an item. */
	operation: (value: number) => number;
	/** Function that returns the index of the monkey to throw an item next. */
	test: (value: number) => number;
};

function parseStartingItems(line: string) {
	const parts = line.split(":");
	return parts[1].split(",").map((s) => Number(s.trim()));
}

function parseOperation(line: string) {
	const [operation, numStr] = line.split("=")[1].trim().split(" ").slice(1);
	return (value: number) => {
		const num = numStr === "old" ? value : Number(numStr);
		return operation === "+" ? value + num : value * num;
	};
}

function parseTest(lines: Array<string>) {
	const divisor = Number(lines[0].split(" ").at(-1));
	const trueIndex = Number(lines[1].split(" ").at(-1));
	const falseIndex = Number(lines[2].split(" ").at(-1));
	return (value: number) => {
		return value % divisor === 0 ? trueIndex : falseIndex;
	};
}

function parseMonkey(lines: Array<string>) {
	return {
		items: parseStartingItems(lines[1]),
		operation: parseOperation(lines[2]),
		test: parseTest(lines.slice(3)),
	};
}

function parseMonkeys(input: string) {
	const lines = splitNewLines(input);
	const monkeys: Array<Monkey> = [];

	let monkeyLines: Array<string> = [];
	for (const [index, line] of lines.entries()) {
		if (!line) {
			monkeys.push(parseMonkey(monkeyLines));
			monkeyLines = [];
			continue;
		}

		monkeyLines.push(line);

		if (index === lines.length - 1) {
			monkeys.push(parseMonkey(monkeyLines));
		}
	}

	return monkeys;
}

export default function part1(input: string) {
	const monkeys = parseMonkeys(input);
	const inspections = monkeys.map(() => 0);

	for (let round = 0; round < 20; round++) {
		for (const [monkeyIndex, monkey] of monkeys.entries()) {
			const totalStartingItems = monkey.items.length;
			for (let itemIndex = 0; itemIndex < totalStartingItems; itemIndex++) {
				inspections[monkeyIndex]++;
				const [oldValue] = monkey.items.splice(0, 1);
				const newValue = Math.floor(monkey.operation(oldValue) / 3);
				const newIndex = monkey.test(newValue);
				monkeys[newIndex].items.push(newValue);
			}
		}
	}

	const inspectionsLowToHigh = inspections.sort((a, b) => a - b);
	return inspectionsLowToHigh.at(-2)! * inspectionsLowToHigh.at(-1)!;
}
