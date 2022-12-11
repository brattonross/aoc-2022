import { splitNewLines } from "../shared/text.ts";
import { buildTree, totalSize, TreeNode } from "./shared.ts";

const maxSize = 100_000;

export default function part1(input: string) {
	const lines = splitNewLines(input);
	const tree = buildTree(lines);

	let total = 0;

	function processNode(node: TreeNode) {
		if (node.type === "file") {
			return;
		}

		const size = totalSize(node);
		if (size <= maxSize) {
			total += size;
		}

		for (const child of node.children) {
			processNode(child);
		}
	}

	processNode(tree);

	return total;
}
