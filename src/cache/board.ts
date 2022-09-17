import type { MarkdownInstance } from "astro";
import type { BoardMemberFrontmatter, BoardList } from "club-org-utils";
import { getBoard } from "club-org-utils";

const titles = [
  "President",
  "External VP",
  "Internal VP",
  "Treasurer",
  "Secretary",
];

let boardCache: BoardList;

export const getBoardCache = (
  boardMembers: MarkdownInstance<BoardMemberFrontmatter>[],
  boardMemberImages: Record<string, any>[]
) => {
  if (!boardCache) {
    boardCache = getBoard(boardMembers, titles, boardMemberImages);
  }

  return boardCache;
};
