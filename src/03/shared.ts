function isLowerCase(str: string) {
	return str === str.toLowerCase();
}

export function toPriority(char: string) {
	if (isLowerCase(char)) {
		return char.charCodeAt(0) - 96;
	} else {
		return char.charCodeAt(0) - 38;
	}
}
