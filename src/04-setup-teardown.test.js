let database = [];
const initializeCityDatabase = () => {
  database.push(
    {
      name: "Vienna",
    },
    {
      name: "San Juan",
    }
  );
  console.log("city database initialized");
};
const clearCityDatabase = () => {
  database = [];
  console.log("city databse cleared");
};
const isCity = (cityName) => {
  return !!database.find((d) => d.name === cityName);
};

describe("Setup and Teardown", () => {
  describe("Repeating Setup", () => {
    // if initializeCityDatabase is a Promise use return
    beforeEach(() => {
      initializeCityDatabase();
    });

    afterEach(() => {
      clearCityDatabase();
    });

    test("should check if database has Vienna", () => {
      expect(isCity("Vienna")).toBeTruthy();
    });

    test("should check if database has San Juan", () => {
      expect(isCity("San Juan")).toBeTruthy();
    });
  });

  describe("One-Time Setup", () => {
    beforeAll(() => {
      return initializeCityDatabase();
    });

    afterAll(() => {
      return clearCityDatabase();
    });

    test("should check if database has Vienna", () => {
      expect(isCity("Vienna")).toBeTruthy();
    });

    test("should check if database has San Juan", () => {
      expect(isCity("San Juan")).toBeTruthy();
    });
  });

  describe("Scoping", () => {
    beforeAll(() => console.log("1 - beforeAll"));
    afterAll(() => console.log("1 - afterAll"));
    beforeEach(() => console.log("1 - beforeEach"));
    afterEach(() => console.log("1 - afterEach"));

    test("", () => console.log("1 - test"));

    describe("Scoped / Nested block", () => {
      beforeAll(() => console.log("2 - beforeAll"));
      afterAll(() => console.log("2 - afterAll"));
      beforeEach(() => console.log("2 - beforeEach"));
      afterEach(() => console.log("2 - afterEach"));

      test("", () => console.log("2 - test"));
    });
  });

  describe("Order of Execution", () => {
    describe("describe outer", () => {
      console.log("describe outer-a");

      describe("describe inner 1", () => {
        console.log("describe inner 1");

        test("test 1", () => console.log("test 1"));
      });

      console.log("describe outer-b");

      test("test 2", () => console.log("test 2"));

      describe("describe inner 2", () => {
        console.log("describe inner 2");

        test("test 3", () => console.log("test 3"));
      });

      console.log("describe outer-c");
    });

    describe("Setup and teardown that depends on each other", () => {
      beforeEach(() => console.log("connection setup"));
      beforeEach(() => console.log("database setup"));

      afterEach(() => console.log("database teardown"));
      afterEach(() => console.log("connection teardown"));

      test("test 1", () => console.log("test 1"));

      describe("extra", () => {
        beforeEach(() => console.log("extra database setup"));
        afterEach(() => console.log("extra database teardown"));

        test("test 2", () => console.log("test 2"));
      });
    });
  });
});
