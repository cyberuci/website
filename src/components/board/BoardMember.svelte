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
  <span> {title}</span>
  <span>{major} '{graduation}</span>
</article>

<style>
  article {
    display: flex;
    flex-direction: column;
  }

  img {
    border-radius: 16px;
  }

  h1 {
    margin-bottom: 6px;
    font-size: 1rem;
    font-weight: 400;
  }

  span {
    margin-bottom: 2px;
    color: var(--gray11);
    font-size: 1rem;
  }
</style>
