import { buildTrees } from "./shared.ts";

export default function part1(input: string) {
  const trees = buildTrees(input);
  const width = trees[0].length;
  const height = trees.length;

  const visibleState = trees.map((row, rowIndex) =>
    row.map(
      (_, colIndex) =>
        rowIndex === 0 ||
        colIndex === 0 ||
        rowIndex === height - 1 ||
        colIndex === width - 1
    )
  );

  // View from left
  for (let row = 1; row < height - 1; row++) {
    let tallestTree = trees[row][0];
    for (let col = 1; col < width - 1; col++) {
      const tree = trees[row][col];
      if (tree > tallestTree) {
        tallestTree = tree;
        visibleState[row][col] = true;
      }
    }
  }

  // View from right
  for (let row = 1; row < height - 1; row++) {
    let tallestTree = trees[row][width - 1];
    for (let col = width - 2; col > 0; col--) {
      const tree = trees[row][col];
      if (tree > tallestTree) {
        tallestTree = tree;
        visibleState[row][col] = true;
      }
    }
  }

  // View from top
  for (let col = 1; col < width - 1; col++) {
    let tallestTree = trees[0][col];
    for (let row = 1; row < height - 1; row++) {
      const tree = trees[row][col];
      if (tree > tallestTree) {
        tallestTree = tree;
        visibleState[row][col] = true;
      }
    }
  }

  // View from bottom
  for (let col = 1; col < width - 1; col++) {
    let tallestTree = trees[height - 1][col];
    for (let row = height - 2; row > 0; row--) {
      const tree = trees[row][col];
      if (tree > tallestTree) {
        tallestTree = tree;
        visibleState[row][col] = true;
      }
    }
  }

  return visibleState.reduce(
    (sum, row) =>
      sum + row.reduce((rowSum, isVisible) => rowSum + (isVisible ? 1 : 0), 0),
    0
  );
}
