import statsService from "@/services/statsService";
import httpClient from "../clients/httpClient";

describe("statsService.js", () => {
  test("Check if return an Object type", async () => {
    const response = await statsService(httpClient).get("test");
    expect(response).toBeTruthy();
    expect(typeof response).toBe("object");
  });

  test("Check response content", async () => {
    const response = await statsService(httpClient).get("test");
    expect(response).toEqual(
      expect.objectContaining({
        username: expect.any(String),
        level: expect.any(Number),
        portrait: expect.any(String),
        endorsement: expect.any(Object),
        private: expect.any(Boolean),
        stats: expect.any(Object)
      })
    );
  });
});
