import { leastCommonMultiple } from "../shared/math.ts";
import { splitNewLines } from "../shared/text.ts";

export type Monkey = {
	/** List of worry levels for each item that the monkey currently holds. */
	items: Array<number>;
	/** Operation that applies to the worry level as the monkey inspects an item. */
	operation: (value: number) => number;
	/** Function that returns the index of the monkey to throw an item next. */
	test: (value: number) => number;
	/** The number that will be the divisor in the test function. */
	testDivisor: number;
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

function parseTestDivisor(line: string) {
	return Number(line.split(" ").at(-1));
}

function parseMonkey(lines: Array<string>) {
	return {
		items: parseStartingItems(lines[1]),
		operation: parseOperation(lines[2]),
		test: parseTest(lines.slice(3)),
		testDivisor: parseTestDivisor(lines[3]),
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

export function calculateMonkeyBusiness(
	input: string,
	{ rounds, worryFn }: {
		rounds: number;
		worryFn: (value: number) => number;
	},
) {
	const monkeys = parseMonkeys(input);
	const inspections = monkeys.map(() => 0);
	const lcm = leastCommonMultiple(...monkeys.map((m) => m.testDivisor));

	for (let round = 0; round < rounds; round++) {
		for (const [monkeyIndex, monkey] of monkeys.entries()) {
			const totalStartingItems = monkey.items.length;
			for (let itemIndex = 0; itemIndex < totalStartingItems; itemIndex++) {
				inspections[monkeyIndex]++;
				const [oldValue] = monkey.items.splice(0, 1);

				let newValue = worryFn(monkey.operation(oldValue));
				// To keep values within a range that js numbers are allowed to be,
				// we can swap the new value with a value that results in an equivalent
				// index when tested. This must be true for any monkey that tests it.
				// Therefore, the swapped value must be divisible by any value that the
				// monkeys could test it with (the least common multiple of them).
				newValue %= lcm;

				const newIndex = monkey.test(newValue);
				monkeys[newIndex].items.push(newValue);
			}
		}
	}

	const inspectionsLowToHigh = inspections.sort((a, b) => a - b);
	return inspectionsLowToHigh.at(-2)! * inspectionsLowToHigh.at(-1)!;
}
