<script lang="ts">
  import type { BoardMember as BoardMemberType } from "club-org-utils";
  import BoardMember from "./BoardMember.svelte";

  export let year: number;
  export let boardMembers: BoardMemberType[];
</script>

<article>
  <h1>{year}</h1>
  {#each boardMembers as boardMember}
    <BoardMember {boardMember} />
  {/each}
</article>
