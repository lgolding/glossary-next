import { sanitize } from "../htmlUtilities";

describe("sanitize", () => {
  it("removes <script> tags", () => {
    const input = `<p>hello world</p>
<script type='text/javascript' src='./evil.js></script>
<script type='text/javascript' src='./bad.js></script>`;

    const output = sanitize(input);

    expect(output).toBe(`<p>hello world</p>
`);
  });

  it("removes 'on' attributes", () => {
    const input = "<p onClick={clickHandler}>hello world</p>";

    const output = sanitize(input);

    expect(output).toBe("<p>hello world</p>");
  });
});
