<script>
  import PageHeader from "../components/PageHeader.svelte";
</script>

<style>
  object {
    margin-top: 2rem;
    width: 100%;
    height: 95vh;
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
  <object
    width="100%"
    title="Sponsorship"
    data="QVFT_Sponsorship.pdf"
    type="application/pdf">
    <embed
      title="Sponsorship"
      width="100%"
      src="QVFT_Sponsorship.pdf"
      type="application/pdf" />
  </object>
</div>
