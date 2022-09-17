import type { MarkdownInstance } from "astro";
import type { EventFrontmatter, EventList } from "club-org-utils";
import { getEvents } from "club-org-utils";

const terms = ["Spring", "Winter", "Fall", "Summer"];

let eventCache: EventList;

export const getEventCache = (events: MarkdownInstance<EventFrontmatter>[]) => {
  if (!eventCache) {
    eventCache = getEvents(events, terms);
  }

  return eventCache;
};

export const getCapitalizedTerm = (term: string) => {
  const normalTerm = term.normalize().toLowerCase().trim();
  const normalTerms = terms.map((term) =>
    term.normalize().toLowerCase().trim()
  );
  const index = normalTerms.indexOf(normalTerm);
  return terms[index];
};
