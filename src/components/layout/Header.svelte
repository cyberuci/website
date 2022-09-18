<script lang="ts">
  import logo from "./logo_monochrome.svg";

  export let pathname: string;
</script>

<header>
  <a href="/">
    <img src={logo} alt="monochrome Cyber logo" />
  </a>
  <nav>
    <a class:active={pathname.startsWith("/events")} href="/events">Events</a>
    <a class:active={pathname.startsWith("/board")} href="/board">Board</a>
    <a class:active={pathname.startsWith("/sponsors")} href="/sponsors"
      >Sponsors</a
    >
  </nav>
</header>

<style lang="scss">
  header {
    position: sticky;
    top: 0;
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 16px;
  }

  img {
    width: 40px;
    height: 40px;
  }

  nav {
    display: flex;
    align-items: baseline;
    gap: 12px;
  }

  nav a {
    padding: 6px 8px;
    border-radius: 8px;
    color: var(--gray12);
    background-color: var(--gray3);
    font-size: 0.875rem;
    font-weight: 400;
    text-decoration: none;

    &:hover {
      background-color: var(--gray4);
    }

    &:active {
      background-color: var(--gray5);
    }

    &::before {
      content: "~ $ ";
      color: var(--gray11);
    }
  }

  .active {
    color: var(--blue12);
    background-color: var(--blue3);

    &:hover {
      background-color: var(--blue4);
    }

    &:active {
      background-color: var(--blue5);
    }

    &::before {
      color: var(--blue11);
    }
  }
</style>
