<script lang="ts">
  import type { BoardMember } from "club-org-utils";

  export let boardMember: BoardMember;
  $: ({ name, image, major, graduation, title } = boardMember);
</script>

<article>
  <div class="image">
    {#if image}
      <img src={image} alt={name} />
    {/if}
  </div>
  <h1>{name}</h1>
  <span> {title}</span>
  <span>{major} '{graduation}</span>
</article>

<style>
  article {
    display: flex;
    flex-direction: column;
  }

  .image {
    width: 100%;
    aspect-ratio: 1;
    background-color: var(--gray2);
    border-radius: 16px;
    overflow: hidden;
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
