export function parseElves(input: string) {
  const lines = input.split(/\r?\n/);
  const elves: Array<Array<number>> = [];
  let elf: Array<number> = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (!line) {
      elves.push(elf);
      elf = [];
      continue;
    }

    elf.push(Number(line));

    if (i === lines.length - 1) {
      elves.push(elf);
    }
  }

  return elves;
}

export function sum(nums: Array<number>) {
  return nums.reduce((sum, cur) => sum + cur, 0);
}

export function max(nums: Array<number>) {
  let max = 0;

  for (const num of nums) {
    if (num > max) {
      max = num;
    }
  }

  return max;
}
