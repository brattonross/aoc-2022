const [dayArg] = Deno.args;
const day = dayArg.padStart(2, "0");

const decoder = new TextDecoder("utf-8");
const data = await Deno.readFile(`./data/${day}.txt`);
const input = decoder.decode(data);
const parts = await Promise.all([
  import(`./src/${day}/01.ts`).catch(() => ({ default: null })),
  import(`./src/${day}/02.ts`).catch(() => ({ default: null })),
]);

for (const [index, { default: fn }] of parts.entries()) {
  if (typeof fn !== "function") {
    continue;
  }

  const result = fn(input);
  console.log(`Day ${day}, Part ${index + 1}: ${result}`);
}
