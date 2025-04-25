import { Redis } from "ioredis";
import { afterEach, beforeAll, describe, it } from "vitest";

let client: Redis;

beforeAll(() => {
  client = new Redis({
    host: "127.0.0.1",
    port: 6389,
    db: 14
  });
});

afterEach(async () => {
  await client.flushdb();
});

describe("Onceheard", () => {
  it("", async () => {
    const x = await client.get("x");
  });
});
