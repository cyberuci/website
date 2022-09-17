<script lang="ts">
  import type { BoardMember } from "club-org-utils";

  export let boardMember: BoardMember;
  $: ({ name, image, major, graduation, title } = boardMember);
</script>

<article>
  {#if image}
    <img src={image} alt={name} />
  {/if}
  <h1>{name}</h1>
  <span>{major} '{graduation}</span>
  <span>{title}</span>
</article>
