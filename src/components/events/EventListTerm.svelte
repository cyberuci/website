<script lang="ts">
  import type { EventListTerm } from "club-org-utils";
  import Event from "./Event.svelte";

  export let year: number | undefined = undefined;
  export let term: string;
  export let eventListTerm: EventListTerm;

  $: id = term.toLowerCase() + (year ? "-" + year : "");
</script>

<article>
  <a href="#{id}">
    <h1 {id}>{term} {year ?? ""}</h1>
  </a>
  <div class="events">
    {#each [...eventListTerm] as [_slug, event]}
      <Event {event} />
    {/each}
  </div>
</article>

<style>
  a {
    color: var(--gray12);
    text-decoration: none;
  }
  article {
    margin-bottom: 48px;
  }

  h1 {
    margin: 24px 0;
    font-size: 2rem;
    font-weight: 500;
  }

  .events {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
</style>
