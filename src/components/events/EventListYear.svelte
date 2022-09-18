<script lang="ts">
  import type { EventListYear } from "club-org-utils";
  import EventListTerm from "./EventListTerm.svelte";

  export let year: number | undefined = undefined;
  export let eventListYear: EventListYear;
</script>

<article>
  {#each [...eventListYear] as [term, eventListTerm]}
    <EventListTerm {year} {term} {eventListTerm} />
  {/each}
</article>

<style>
  article {
    margin-bottom: 64px;
  }
</style>
