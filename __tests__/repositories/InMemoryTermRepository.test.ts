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
  });
});
