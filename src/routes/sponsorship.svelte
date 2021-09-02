<script>
  import { onMount } from "svelte";
  import PageHeader from "../components/PageHeader.svelte";

  onMount(async () => {
    gtag("config", "UA-93549235-6", { page_path: "/sponsorship" });
  });
</script>

<style>
  div.pdfWrapper {
    margin-top: 1rem;
    width: 100%;
    height: 100vh;
  }

  a.button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 3rem;
    padding: 0.5rem 1rem;
    font-size: 1.2rem;
    line-height: 1.4rem;
    color: white;
    text-decoration: none;
    background-color: var(--themeColorDark);
    border-radius: 0.5rem;
    box-shadow: 1px 1px 2px 2px #dedededd;
  }

  .contentWrapper {
    margin-top: 2rem;
  }

  .mobile {
    display: none;
    justify-content: center;
  }

  @media (max-width: 700px) {
    .mobile {
      display: flex !important;
    }
    .desktop {
      display: none;
    }
  }
</style>

<svelte:head>
  <title>Queen's Vertical Farming Team</title>
</svelte:head>
<PageHeader>Sponsorship</PageHeader>
<div class="contentWrapper desktop">
  <p>
    <a
      href="QVFT_Sponsorship.pdf"
      download
      on:click={() => gtag('event', 'download sponsorship package')}>
      Download our sponsorship package here
    </a>
  </p>
  <div class="pdfWrapper">
    <object
      width="100%"
      height="100%"
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
</div>
<div class="contentWrapper mobile">
  <a class="button" href="QVFT_Sponsorship.pdf">View Sponsorship Package</a>
</div>
