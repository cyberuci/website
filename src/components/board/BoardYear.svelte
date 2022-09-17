<script lang="ts">
  import type { BoardMember as BoardMemberType } from "club-org-utils";
  import BoardMember from "./BoardMember.svelte";

  export let year: number;
  export let boardMembers: BoardMemberType[];
</script>

<article>
  <h1>{year}</h1>
  <div class="board-members">
    {#each boardMembers as boardMember}
      <BoardMember {boardMember} />
    {/each}
  </div>
</article>

<style>
  article {
    margin-bottom: 48px;
  }

  h1 {
    margin: 24px 0;
    font-size: 2rem;
    font-weight: 500;
  }

  .board-members {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(256px, 1fr));
    gap: 32px 16px;
  }
</style>
