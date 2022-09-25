<script lang="ts">
  import { onMount } from "svelte";

  export let message: string;
  export let href: string;

  let red = false;

  onMount(() => {
    red = true;
  });
</script>

<a class:red {href}>{message}</a>

<style lang="scss">
  a {
    padding: 6px 8px;
    border-radius: 8px;
    color: var(--gray12);
    background-color: var(--gray3);
    font-size: 0.875rem;
    font-weight: 400;
    text-decoration: none;
    transition: all 400ms ease-out 1s;
    &:hover {
      background-color: var(--gray4);
    }
    &:active {
      background-color: var(--gray5);
    }

    &.red {
      color: var(--red12);
      background-color: var(--red3);
      &:hover {
        background-color: var(--red4);
      }
      &:active {
        background-color: var(--red5);
      }
    }
  }
</style>
