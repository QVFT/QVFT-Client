<script>
  import Nav from "../components/Nav.svelte";

  export let segment;
</script>

<style>
  main {
    padding: 3rem 0;
  }
</style>

<Nav {segment} />
<main>
  <slot />
</main>
