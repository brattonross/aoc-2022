export class TreeNode {
	public children: Array<TreeNode>;
	public parent: TreeNode | null;

	constructor(
		public name: string,
		public type: "directory" | "file",
		parent?: TreeNode | null,
		public size?: number,
	) {
		this.children = [];
		this.parent = parent ?? null;
	}
}

export function buildTree(lines: Array<string>) {
	let tree: TreeNode | null = null;
	let currentNode: TreeNode | null = null;

	for (let i = 0; i < lines.length; i++) {
		const line = lines.at(i)!;
		const [, command, arg] = line.split(" ");

		if (command === "cd") {
			if (arg === "/") {
				tree = new TreeNode(arg, "directory");
				currentNode = tree;
			} else if (arg === "..") {
				currentNode = currentNode!.parent;
			} else {
				if (!currentNode) {
					throw new Error("No current node found!");
				}
				const nextNode: TreeNode | undefined = currentNode.children.find(
					(x) => x.name === arg,
				);
				if (!nextNode) {
					throw new Error(
						`Expected directory ${currentNode.name} to have child directory ${arg}`,
					);
				}
				currentNode = nextNode;
			}
		} else {
			for (let j = i + 1;; j++) {
				const nextLine = lines.at(j);
				if (!nextLine || nextLine.startsWith("$")) {
					i = j - 1;
					break;
				}

				const parts = nextLine.split(" ");
				if (parts.at(0) === "dir") {
					currentNode!.children.push(
						new TreeNode(parts.at(1)!, "directory", currentNode),
					);
				} else {
					currentNode!.children.push(
						new TreeNode(
							parts.at(1)!,
							"file",
							currentNode,
							Number(parts.at(0)),
						),
					);
				}
			}
		}
	}

	return tree!;
}

export function totalSize(node: TreeNode): number {
	if (node.type === "file") {
		return node.size!;
	}

	let total = 0;
	for (const child of node.children) {
		total += totalSize(child);
	}
	return total;
}
