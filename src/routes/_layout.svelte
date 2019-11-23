<script>
  import Nav from "../components/Nav.svelte";

  export let segment;
</script>

<style>
  main {
    padding-bottom: 3rem;
  }
</style>

<Nav {segment} />
<main class="contentWrapper">
  <slot />
</main>
