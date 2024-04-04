describe("Testing asynchronous code", () => {
  const fetchData = jest.fn().mockResolvedValue("async data");
  const fetchDataError = jest.fn().mockRejectedValue(new Error("error"));

  test("should test async", () => {
    return fetchData().then((data) => {
      expect(data).toEqual("async data");
    });
  });

  test("should test async with an error", async () => {
    expect.assertions(2);
    try {
      await fetchDataError();
    } catch (error) {
      expect(error).toEqual(new Error("error"));
      expect(error.message).toBe("error");
    }
  });

  test("should test async with resolve", async () => {
    await expect(fetchData()).resolves.toBe("async data");
  });

  test("should test async with resolve using return", () => {
    return expect(fetchData()).resolves.toBe("async data");
  });

  test("should test async with reject", async () => {
    await expect(fetchDataError()).rejects.toEqual(new Error("error"));
  });

  test("should test async with reject using return", async () => {
    return expect(fetchDataError()).rejects.toEqual(new Error("error"));
  });

  test("should test async with reject using catch", () => {
    // use expect.assertions to check with catch is reached
    expect.assertions(1);
    return fetchDataError().catch((error) =>
      expect(error).toEqual(new Error("error"))
    );
  });

});
