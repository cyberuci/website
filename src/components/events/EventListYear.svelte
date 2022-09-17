<script lang="ts">
  import type { EventListYear } from "club-org-utils";
  import EventListTerm from "./EventListTerm.svelte";

  export let year: number;
  export let eventListYear: EventListYear;
</script>

<h1>{year}</h1>
{#each [...eventListYear] as [term, eventListTerm]}
  <EventListTerm {term} {eventListTerm} />
{/each}
