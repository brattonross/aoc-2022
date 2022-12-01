export default function part1(input: string) {
  const lines = input.split(/\r?\n/);
  let max = 0;
  let currentTotal = 0;

  for (const line of lines) {
    if (!line) {
      if (currentTotal > max) {
        max = currentTotal;
      }
      currentTotal = 0;
      continue;
    }

    currentTotal += Number(line);
  }

  return max;
}
