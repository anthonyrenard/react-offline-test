import { classNames } from "./classnames";

describe("classnames", () => {
  it("should return empty string if no arguments", () => {
    expect(classNames()).toEqual("");
  });

  it("should return empty string if all arguments are falsy", () => {
    expect(classNames(null, undefined, false, 0, "")).toEqual("");
  });

  it("should return a single class name", () => {
    expect(classNames("foo")).toEqual("foo");
  });

  it("should return multiple class names", () => {
    expect(classNames("foo", "bar")).toEqual("foo bar");
  });
});
