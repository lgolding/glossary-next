import sanitizeHtml from "sanitize-html";

export function sanitize(rawHtml: string): string {
  return sanitizeHtml(rawHtml);
}
