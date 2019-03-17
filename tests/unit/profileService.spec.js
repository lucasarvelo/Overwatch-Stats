import profileService from "@/services/profileService";
import httpClient from "../clients/httpClient";

describe("profileService.js", () => {
  test("Check if return an Object type", async () => {
    const response = await profileService(httpClient).get("test");
    expect(response).toBeTruthy();
    expect(typeof response).toBe("object");
  });

  test("Check response content", async () => {
    const response = await profileService(httpClient).get("test");
    expect(response).toEqual(
      expect.objectContaining({
        username: expect.any(String),
        level: expect.any(Number),
        portrait: expect.any(String),
        endorsement: expect.any(Object),
        private: expect.any(Boolean),
        games: expect.any(Object),
        playtime: expect.any(Object),
        levelFrame: expect.any(String),
        competitive: expect.any(Object)
      })
    );
  });
});
