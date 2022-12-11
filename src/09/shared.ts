import { range } from "../shared/array.ts";
import { splitNewLines } from "../shared/text.ts";

export function parseMoves(input: string) {
  const lines = splitNewLines(input);
  const moves: Array<[string, number]> = lines.map((line) => {
    const parts = line.split(" ");
    return [parts[0], Number(parts[1])];
  });
  return moves;
}

function stringifyCoords(coords: Array<number>) {
  return JSON.stringify(coords);
}

const dirMap: Record<string, number> = {
  U: -1,
  L: -1,
  R: 1,
  D: 1,
};

function areTouching([aX, aY]: Array<number>, [bX, bY]: Array<number>) {
  const xDelta = Math.abs(aX - bX);
  const yDelta = Math.abs(aY - bY);
  return xDelta <= 1 && yDelta <= 1;
}

export function numPositionsTouchedByTail(
  moves: ReturnType<typeof parseMoves>,
  size = 2
) {
  const currentPositions = range(size).map(() => [0, 0]);

  const tailVisitedState = new Map<string, boolean>([
    [stringifyCoords([0, 0]), true],
  ]);

  for (const [dir, magnitude] of moves) {
    const move = dirMap[dir];

    for (let i = 0; i < magnitude; i++) {
      for (let j = 0; j < currentPositions.length; j++) {
        const prevKnot = currentPositions[j - 1];
        const currentKnot = currentPositions[j];

        if (j === 0) {
          currentKnot[0] += dir === "L" || dir === "R" ? move : 0;
          currentKnot[1] += dir === "U" || dir === "D" ? move : 0;
        } else if (!areTouching(prevKnot, currentKnot)) {
          if (prevKnot[0] === currentKnot[0]) {
            currentKnot[1] += prevKnot[1] > currentKnot[1] ? 1 : -1;
          } else if (prevKnot[1] === currentKnot[1]) {
            currentKnot[0] += prevKnot[0] > currentKnot[0] ? 1 : -1;
          } else {
            // At a diagonal -- we must always move one step diagonally to keep up
            currentKnot[0] += prevKnot[0] > currentKnot[0] ? 1 : -1;
            currentKnot[1] += prevKnot[1] > currentKnot[1] ? 1 : -1;
          }
        }
      }

      tailVisitedState.set(
        stringifyCoords(currentPositions[currentPositions.length - 1]),
        true
      );
    }
  }

  return tailVisitedState.size;
}
