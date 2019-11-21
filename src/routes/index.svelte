<script context="module">
  export async function preload() {
    const result = await this.fetch("index.json");
    const { team, blog } = await result.json();
    return {
      team,
      blog
    };
  }
</script>

<script>
  import TeamImages from "../components/TeamImages.svelte";
  import BlogPreview from "../components/BlogPreview.svelte";

  export let team = [];
  export let blog = [];
</script>

<style>

</style>

<svelte:head>
  <title>Queen's Vertical Farming Team</title>
</svelte:head>

<h1>Queen's Vertical Farming Team</h1>
<p>
  QVFT is a brand new design team which aims to develop a functional,
  small-scale vertical farm at Queen's University. Lorem ipsum dolor sit amet,
  consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
  dolore magna aliqua.
</p>
<h2>Our Team</h2>
<TeamImages {team} />
<h2>Progress</h2>
<BlogPreview {blog} />
