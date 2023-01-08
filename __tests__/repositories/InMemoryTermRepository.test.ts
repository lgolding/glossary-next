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
});
