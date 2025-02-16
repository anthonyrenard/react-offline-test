import { request } from "./request";

describe("request", () => {
  it("should return the response", async () => {
    const response = await request(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    expect(response).toEqual({
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      completed: false,
    });
  });

  it("should return an error", async () => {
    try {
      await request("https://example.com/api");
    } catch (error) {
      expect(error).toEqual(
        new Error("Network response was not ok. Status: 404 Not Found")
      );
    }
  });
});
