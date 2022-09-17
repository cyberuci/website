<script lang="ts">
  import type { EventListTerm } from "club-org-utils";
  import Event from "./Event.svelte";

  export let term: string;
  export let eventListTerm: EventListTerm;
</script>

<h1>{term}</h1>
{#each [...eventListTerm] as [_slug, event]}
  <Event {event} />
{/each}
