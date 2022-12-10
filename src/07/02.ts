import { splitNewLines } from "../shared/text.ts";
import { buildTree, totalSize, TreeNode } from "./shared.ts";

const totalDiskSpace = 70_000_000;
const minDiskSpaceRequired = 30_000_000;

export default function part2(input: string) {
  const lines = splitNewLines(input);
  const tree = buildTree(lines);

  const totalTreeSize = totalSize(tree);
  const diskSpaceRemaining = totalDiskSpace - totalTreeSize;
  const minSizeToDelete = minDiskSpaceRequired - diskSpaceRemaining;

  let smallestSize = 0;

  function processNode(node: TreeNode) {
    if (node.type === "file") {
      return;
    }

    const size = totalSize(node);
    if (
      smallestSize === 0 ||
      (size < smallestSize && size >= minSizeToDelete)
    ) {
      smallestSize = size;
    }

    for (const child of node.children) {
      processNode(child);
    }
  }

  processNode(tree);

  return smallestSize;
}
