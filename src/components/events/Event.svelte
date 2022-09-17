<script lang="ts">
  import type { Event } from "club-org-utils";

  export let event: Event;
  $: ({ title, description, date } = event);
  $: localeString = date.toLocaleString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
</script>

<article>
  <h1>{title}</h1>
  {#if description}
    <p>{description}</p>
  {/if}
  <span>{localeString}</span>
</article>
