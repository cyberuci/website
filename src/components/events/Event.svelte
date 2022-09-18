<script lang="ts">
  import type { Event } from "club-org-utils";

  export let event: Event;
  $: ({ title, slug, description, date, year, term } = event);
  $: localeString = date.toLocaleString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
</script>

<a href="/events/{year}/{term.toLowerCase()}/{slug}">
  <article>
    <span>{localeString}</span>
    <h1>{title}</h1>
    {#if description}
      <p>{description}</p>
    {/if}
  </article>
</a>

<style lang="scss">
  a {
    color: var(--gray12);
    text-decoration: none;
  }

  article {
    display: flex;
    flex-direction: column;
    padding: 16px;
    border-radius: 16px;
    background-color: var(--gray3);

    &:hover {
      background-color: var(--gray4);
    }

    &:active {
      background-color: var(--gray5);
    }
  }

  span {
    color: var(--gray11);
    font-size: 0.875rem;
  }

  h1 {
    margin: 16px 0;
    font-size: 1.5rem;
    font-weight: 400;
  }

  p {
    margin: 0 0 8px 0;
    color: var(--gray11);
  }
</style>
