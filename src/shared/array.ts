/**
 * Creates an array of arrays that are equally sized.
 * If the array cannot be split evenly, the last chunk
 * will contain the remaining elements.
 */
export function chunk<T>(arr: Array<T>, size: number) {
  if (size === 1) {
    return arr.map((x) => [x]);
  }

  const chunks: Array<Array<T>> = [];
  let chunk: Array<T> = [];

  for (let i = 0; i < arr.length; i++) {
    chunk.push(arr[i]);

    if ((i + 1) % size === 0) {
      chunks.push(chunk);
      chunk = [];
      continue;
    }

    if (i === arr.length - 1) {
      chunks.push(chunk);
    }
  }

  return chunks;
}

/**
 * Creates an array consiting of the numbers 0 to `end` (exclusive).
 */
export function range(end: number) {
  return Array(end)
    .fill(0)
    .map((_, i) => i);
}
