import { sum } from "../shared/math.ts";
import { splitNewLines } from "../shared/text.ts";

const moveMap: Record<string, number> = {
	A: 1,
	B: 2,
	C: 3,
};

const desiredResults = [3, 0, 6];
const desiredResultMap: Record<string, number> = {
	X: 1,
	Y: 0,
	Z: 2,
};

const desiredMoves = [3, 1, 2];

export default function part2(input: string) {
	const lines = splitNewLines(input);
	const scores = lines.map((line) => {
		const chars = line.split(" ");
		const opponentMove = moveMap[chars[0]];
		const desiredResultIndex = desiredResultMap[chars[1]];
		const diff = opponentMove - desiredResultIndex;
		const desriedMove = desiredMoves.at(diff % desiredMoves.length)!;
		return desriedMove + desiredResults.at(desiredResultIndex)!;
	});
	return sum(scores);
}
