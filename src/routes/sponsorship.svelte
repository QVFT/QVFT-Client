<script>
  import PageHeader from "../components/PageHeader.svelte";
</script>

<style>
  iframe {
    margin-top: 2rem;
  }

  .contentWrapper {
    margin-top: 2rem;
  }
</style>

<svelte:head>
  <title>Queen's Vertical Farming Team</title>
</svelte:head>
<PageHeader>Sponsorship</PageHeader>
<div class="contentWrapper">
  <p>
    <a href="QVFT_Sponsorship.pdf" download>
      Download our sponsorship package here
    </a>
  </p>
  <iframe
    title="Sponsorship"
    src="QVFT_Sponsorship.pdf"
    style="height: 100vh"
    width="100%" />
</div>
