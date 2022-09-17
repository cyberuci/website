import type { MarkdownInstance } from "astro";
import type { SponsorFrontmatter, SponsorList } from "club-org-utils";
import { getSponsors } from "club-org-utils";

const tiers = ["Default"];

let sponsorCache: SponsorList;

export const getSponsorCache = (
  sponsors: MarkdownInstance<SponsorFrontmatter>[],
  sponsorLogos?: Record<string, any>[]
) => {
  if (!sponsorCache) {
    sponsorCache = getSponsors(sponsors, tiers, sponsorLogos);
  }

  return sponsorCache;
};
