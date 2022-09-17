<script lang="ts">
  import type { Sponsor as SponsorType } from "club-org-utils";
  import Sponsor from "./Sponsor.svelte";

  export let year: number;
  export let sponsors: SponsorType[];
</script>

<article>
  <h1>{year}</h1>
  {#each sponsors as sponsor}
    <Sponsor {sponsor} />
  {/each}
</article>
