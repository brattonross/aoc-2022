import { parse } from "./shared.ts";

export default function part1(input: string) {
	const { crates, moves } = parse(input);

	for (const [amount, from, to] of moves) {
		const fromIndex = from - 1;
		const toIndex = to - 1;

		const cratesToMove = crates[fromIndex].splice(
			crates[fromIndex].length - amount,
		);
		crates[toIndex].push(...cratesToMove.reverse());
	}

	return crates.reduce((message, crate) => message + crate.at(-1), "");
}
