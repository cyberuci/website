<script lang="ts">
  export let pathname: string;
</script>

<nav>
  <a class:active={pathname.startsWith("/events")} href="/events">Events</a>
  <a class:active={pathname.startsWith("/board")} href="/board">Board</a>
  <!-- <a class:active={pathname.startsWith("/sponsors")} href="/sponsors"
    >Sponsors</a
  > -->
</nav>

<style lang="scss">
  nav {
    display: flex;
    align-items: baseline;
    gap: 12px;

    & a {
      padding: 6px 8px;
      border-radius: 8px;
      color: var(--gray12);
      background-color: var(--gray3);
      font-size: 0.875rem;
      font-weight: 400;
      text-decoration: none;

      &::before {
        content: "~ $ ";
        color: var(--gray11);
      }

      &:hover {
        background-color: var(--gray4);
      }

      &:active {
        background-color: var(--gray5);
      }

      &.active {
        color: var(--blue12);
        background-color: var(--blue3);

        &::before {
          color: var(--blue11);
        }

        &:hover {
          background-color: var(--blue4);
        }

        &:active {
          background-color: var(--blue5);
        }
      }
    }
  }
</style>
