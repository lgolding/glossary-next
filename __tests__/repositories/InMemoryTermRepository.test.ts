import GlossaryEntry from "../../models/GlossaryEntry";
import InMemoryTermRepository, {
  NUM_TERMS,
} from "../../repositories/InMemoryTermRepository";

describe("InMemoryTermRepository", () => {
  describe("getAll", () => {
    var repository: InMemoryTermRepository | undefined;

    beforeEach(() => {
      repository = new InMemoryTermRepository();
    });

    it("returns the expected number of terms", () => {
      const entries: GlossaryEntry[] = repository!.getAll();
      expect(entries.length).toBe(NUM_TERMS);
    });

    it("it returns the expected term, definition, and source", () => {
      const entries: GlossaryEntry[] = repository!.getAll();
      expect(entries[1].term).toBe("microservice");
      expect(entries[1].definition).toMatch(/^One of a set/);
      expect(entries[1].source).toBe("https://microservices.io/");
    });

    it("it returns undefined for the source if there is no source", () => {
      const entries: GlossaryEntry[] = repository!.getAll();
      expect(entries[2].term).toBe("patching");
      expect(entries[2].source).toBeUndefined();
    });
  });

  describe("add", () => {
    var repository: InMemoryTermRepository | undefined;

    beforeEach(() => {
      repository = new InMemoryTermRepository();
    });

    it("adds a term with a source", () => {
      repository!.addEntry("t", "d", "s");
      const entries: GlossaryEntry[] = repository!.getAll();
      const newEntry = entries[entries.length - 1];
      expect(newEntry.term).toBe("t");
      expect(newEntry.definition).toBe("d");
      expect(newEntry.source).toBe("s");
    });

    it("adds a term without a source", () => {
      repository!.addEntry("t", "d");
      const entries: GlossaryEntry[] = repository!.getAll();
      const newEntry = entries[entries.length - 1];
      expect(newEntry.term).toBe("t");
      expect(newEntry.definition).toBe("d");
      expect(newEntry.source).toBeUndefined();
    });

    it("requires a non-empty term", () => {
      expect(() => repository!.addEntry("", "d", "s")).toThrow();
    });

    it("requires a non-whitespace term", () => {
      expect(() => repository!.addEntry("\t  \n\r", "d", "s")).toThrow();
    });

    it("requires a non-empty definition", () => {
      expect(() => repository!.addEntry("t", "", "s")).toThrow();
    });

    it("requires a non-whitespace definition", () => {
      expect(() => repository!.addEntry("t", "\t  \n\r", "s")).toThrow();
    });
  });
});
