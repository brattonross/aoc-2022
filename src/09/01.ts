import { splitNewLines } from "../shared/text.ts";

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

export default function part1(input: string) {
  const lines = splitNewLines(input);
  const moves: Array<[string, number]> = lines.map((line) => {
    const parts = line.split(" ");
    return [parts[0], Number(parts[1])];
  });
  const currentHeadPos = [0, 0];
  const currentTailPos = [0, 0];

  const visitedState = new Map<string, boolean>([
    // We have automatically visited our start pos
    [stringifyCoords(currentTailPos), true],
  ]);

  for (const [dir, magnitude] of moves) {
    for (let i = 0; i < magnitude; i++) {
      const move = dirMap[dir];
      if (dir === "U" || dir === "D") {
        currentHeadPos[0] += move;
      } else {
        currentHeadPos[1] += move;
      }

      // If the head and tail are touching, there's no need to move
      // the tail, and it also can't have touched any new positions.
      if (areTouching(currentHeadPos, currentTailPos)) {
        continue;
      }

      // If the head and tail are part of the same row or column,
      // then the tail just needs to move in the same direction.
      if (
        currentHeadPos[0] === currentTailPos[0] ||
        currentHeadPos[1] === currentTailPos[1]
      ) {
        if (dir === "U" || dir === "D") {
          currentTailPos[0] += move;
        } else {
          currentTailPos[1] += move;
        }
      } else {
        // The head and tail are at diagonals, figure out how to move the
        // tail such that it ends up in the correct position touching the head.
        // This move will include the same move that the head made, plus a move
        // to align the row/col of the head and tail.
        if (dir === "U" || dir === "D") {
          currentTailPos[0] += move;
          currentTailPos[1] = currentHeadPos[1];
        } else {
          currentTailPos[1] += move;
          currentTailPos[0] = currentHeadPos[0];
        }
      }

      visitedState.set(stringifyCoords(currentTailPos), true);
    }
  }

  return visitedState.size;
}
