import { assertEquals } from "https://deno.land/std@0.97.0/testing/asserts.ts";
import { fromDate, now } from "./internet_time.ts";

Deno.test("fromDate", () => {
  // returns the correct beats for noon
  const noon = new Date(2000, 11, 21, 12, 0);
  assertEquals(fromDate(noon), "@500");

  // returns the correct number of beats for noon in long format
  const justAfterNoon = new Date(2000, 11, 21, 12, 0, 43);
  assertEquals(fromDate(justAfterNoon, true), "@500.50");

  // prepends zeroes to smaller beat numbers
  const midnight = new Date(2000, 11, 21, 0, 0);
  assertEquals(fromDate(midnight), "@000");

  const earlyMorning = new Date(2000, 11, 21, 1, 0);
  assertEquals(fromDate(earlyMorning), "@041");

  // handles midnight properly
  const nearlyMidnight = new Date(2000, 11, 21, 23, 59);
  assertEquals(fromDate(nearlyMidnight), "@999");

  const halfwayThroughABeat = new Date(2000, 11, 21, 0, 0, 45);

  // doesn't round up beats when using short formatting
  assertEquals(fromDate(halfwayThroughABeat, true), "@000.52");
  assertEquals(fromDate(halfwayThroughABeat), "@000");
});
