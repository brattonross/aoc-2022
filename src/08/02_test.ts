import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";
import part2 from "./02.ts";

Deno.test(
  "should return the highest scenic score possible for any tree in the grid",
  () => {
    const input = `30373
25512
65332
33549
35390`;

    assertEquals(part2(input), 8);
  }
);
