import GlossaryEntry from "../../models/GlossaryEntry";

describe("GlossaryEntry", () => {
  describe("constructor", () => {
    it("create a term with a source", () => {
      var newEntry = new GlossaryEntry("t", "d", "s");
      expect(newEntry.term).toBe("t");
      expect(newEntry.definition).toBe("d");
      expect(newEntry.source).toBe("s");
    });

    it("create a term without a source", () => {
      var newEntry = new GlossaryEntry("t", "d");
      expect(newEntry.term).toBe("t");
      expect(newEntry.definition).toBe("d");
      expect(newEntry.source).toBeUndefined();
    });

    it("requires a non-empty term", () => {
      expect(() => new GlossaryEntry("", "d", "s")).toThrow();
    });

    it("requires a non-whitespace term", () => {
      expect(() => new GlossaryEntry("\t  \n\r", "d", "s")).toThrow();
    });

    it("requires a non-empty definition", () => {
      expect(() => new GlossaryEntry("t", "", "s")).toThrow();
    });

    it("requires a non-whitespace definition", () => {
      expect(() => new GlossaryEntry("t", "\t  \n\r", "s")).toThrow();
    });
  });
});
