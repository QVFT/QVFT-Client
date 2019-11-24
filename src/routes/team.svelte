<script context="module">
  export async function preload() {
    const result = await this.fetch("index.json");
    const { team } = await result.json();
    return {
      team
    };
  }
</script>

<script>
  import TeamImages from "../components/TeamImages.svelte";

  export let team = [];
</script>

<style>

</style>

<svelte:head>
  <title>Our Team | Queen's Vertical Farming Team</title>
</svelte:head>
<div class="contentWrapper">
  <h1>Our Team</h1>
  <TeamImages {team} />
</div>
