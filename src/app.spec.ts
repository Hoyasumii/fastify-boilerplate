import { describe, expect, it } from "vitest";
import app from "./app";

describe("🧪 Fastify Server Testing", () => {
  it(`should request [GET] /hello-world and returns "Hello World"`, async () => {
    const { payload } = await app.inject({
      method: "GET",
      url: "/hello-world",
    });

    expect(payload).toBe("Hello World");
  });
});
