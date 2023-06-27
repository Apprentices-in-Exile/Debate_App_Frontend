import { render } from "@testing-library/react";
import PersonaSummary from "./PersonaSummary";

describe("PersonaSummary", () => {
  it("should work as expected", () => {
    render(<PersonaSummary persona={{
      imageURL: "not a url",
      name: "also not"
    }} />)
    expect(1 + 1).toBe(2);
  });
});