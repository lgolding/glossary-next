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

    // These two tests exercise the happy path and the error path for adding valid
    // and invalid terms. For coverage of what makes a valid or invalid term, see
    // GlossaryEntry.test.ts.
    it("adds a valid term", () => {
      repository!.addEntry("t", "d", "s");
      const entries: GlossaryEntry[] = repository!.getAll();
      const newEntry = entries[entries.length - 1];
      expect(newEntry.term).toBe("t");
      expect(newEntry.definition).toBe("d");
      expect(newEntry.source).toBe("s");
    });

    it("throws when attempting to add an invalid term", () => {
      expect(() => repository!.addEntry("", "d", "s")).toThrow();
    });
  });
});
