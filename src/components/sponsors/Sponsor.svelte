<script lang="ts">
  import type { Sponsor } from "club-org-utils";

  export let sponsor: Sponsor;
  $: ({ name, description, logo, website, tier } = sponsor);
</script>

<article>
  {#if logo}
    <img src={logo} alt="{name}'s Logo" />
  {/if}
  <h1>{name}</h1>
  <p>{description}</p>
  <a href={website}>{website}</a>
  <span>{tier}</span>
</article>
