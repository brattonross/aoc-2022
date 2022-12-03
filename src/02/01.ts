import { sum } from "../shared/math.ts";
import { splitNewLines } from "../shared/text.ts";

const results = [3, 0, 6];
const moveMap: Record<string, number> = {
	A: 1,
	B: 2,
	C: 3,
	X: 1,
	Y: 2,
	Z: 3,
};

export default function part1(input: string) {
	const lines = splitNewLines(input);
	const scores = lines.map((line) => {
		const [opponentMove, myMove] = line.split(" ").map((x) => moveMap[x]);
		const resultScore = results.at(opponentMove - myMove)!;
		return resultScore + myMove;
	});
	return sum(scores);
}
