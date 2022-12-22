import { calculateMonkeyBusiness } from "./shared.ts";

export default function part1(input: string) {
	return calculateMonkeyBusiness(input, {
		rounds: 20,
		worryFn: (value) => Math.floor(value / 3),
	});
}
