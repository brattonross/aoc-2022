import { sum } from "../shared/math.ts";
import { process } from "./shared.ts";

const START_CYCLE = 20;
const CYCLE_GAP = 40;

export default function part1(input: string) {
	const signals: Array<number> = [];

	for (const { cycle, x } of process(input)) {
		if (cycle % CYCLE_GAP === START_CYCLE) {
			signals.push(cycle * x);
		}
	}

	return sum(signals);
}
