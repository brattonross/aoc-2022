import { process } from "./shared.ts";

const ROW_SIZE = 40;

export default function part2(input: string) {
	const rows: Array<string> = [];

	for (const { cycle, x } of process(input)) {
		const rowIndex = Math.floor((cycle - 1) / ROW_SIZE);
		const currentPixelPos = (cycle - 1) % ROW_SIZE;
		const spritePositions = [x - 1, x, x + 1];

		const isDrawingSprite = spritePositions.includes(currentPixelPos);
		if (!rows[rowIndex]) {
			rows[rowIndex] = "";
		}
		rows[rowIndex] += isDrawingSprite ? "#" : ".";
	}

	return rows.join("\n");
}
