import heroesService from "@/services/heroesService";
import httpClient from "../clients/httpClient";

describe("heroesService.js", () => {
  test("Return an Array type", async () => {
    const response = await heroesService(httpClient).get();
    expect(Array.isArray(response)).toBe(true);
  });

  test("Check response content", async () => {
    const response = await heroesService(httpClient).get();
    expect(response[0]).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        name: expect.any(String),
        description: expect.any(String),
        health: expect.any(Number),
        armour: expect.any(Number),
        shield: expect.any(Number),
        difficulty: expect.any(Number),
        url: expect.any(String)
      })
    );
  });
});
