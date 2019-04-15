import {mockPermissions} from "../../dummies/mockPermissions";
import {findLabel} from "../../src/utils/findLabel";

describe("findLabel spec", () => {
  it("should return `label A`", () => {
    const result = findLabel("code A", mockPermissions);
    expect(result).toBe("label A");
  });

  it("should return `label B`", () => {
    const result = findLabel("code B", mockPermissions);
    expect(result).toBe("label B");
  });

  it("should return `label B-1`", () => {
    const result = findLabel("code B-1", mockPermissions);
    expect(result).toBe("label B-1");
  });

  it("should return `label B-2`", () => {
    const result = findLabel("code B-2", mockPermissions);
    expect(result).toBe("label B-2");
  });

  it("should return `label B-1-1`", () => {
    const result = findLabel("code B-1-1", mockPermissions);
    expect(result).toBe("label B-1-1");
  });

  it("should return `label C`", () => {
    const result = findLabel("code C", mockPermissions);
    expect(result).toBe("label C");
  });

  it("should return `label C-1`", () => {
    const result = findLabel("code C-1", mockPermissions);
    expect(result).toBe("label C-1");
  });

  it("should return null", () => {
    const result = findLabel("code D-1", mockPermissions);
    expect(result).toBe(null);
  });

  it("when undefined should return null", () => {
    const result = findLabel(undefined, mockPermissions);
    expect(result).toBe(null);
  });

  it("when null should return null", () => {
    const result = findLabel(null, mockPermissions);
    expect(result).toBe(null);
  });
});
