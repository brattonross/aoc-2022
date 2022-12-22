import { calculateMonkeyBusiness } from "./shared.ts";

export default function part2(input: string) {
	return calculateMonkeyBusiness(input, {
		rounds: 10_000,
		worryFn: (value) => value,
	});
}
