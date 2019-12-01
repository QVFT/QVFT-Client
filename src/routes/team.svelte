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
  import PageHeader from "../components/PageHeader.svelte";
  export let team = [];
</script>

<style>

</style>

<svelte:head>
  <title>Our Team | Queen's Vertical Farming Team</title>
</svelte:head>
<PageHeader>Our Team</PageHeader>
<TeamImages {team} />
