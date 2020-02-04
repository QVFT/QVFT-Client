<script>
  import { onMount } from "svelte";
  import PageHeader from "../components/PageHeader.svelte";
  onMount(async () => {
    gtag("config", "UA-93549235-6", { page_path: "/ceec" });
  });
</script>

<style>
  div.pdfWrapper {
    margin-top: 2rem;
    width: 100%;
    height: 70vh;
  }
  .contentWrapper {
    margin-top: 2rem;
  }
  
  iframe {
    margin-bottom: 2rem;
  }
  .mobile {
    display: none;
    justify-content: center;
  }
  div.buttonWrapper {
    text-align: center;
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
  .mobile {
    display: none;
  }
  div#infoPackageSection {
    margin-bottom: 5rem;
  }
  @media (max-width: 700px) {
    .mobile {
      display: block !important;
    }
    .desktop {
      display: none;
    }
  }
</style>

<svelte:head>
  <title>Queen's Vertical Farming Team</title>
</svelte:head>

<PageHeader>CEEC</PageHeader>
<div class="contentWrapper">
  <div id="infoPackageSection">
    <h2>Information Package</h2>
    <div class="pdfWrapper desktop">
      <object
        width="100%"
        height="100%"
        title="Information"
        data="QVFT_Information.pdf"
        type="application/pdf">
        <embed
          title="Information"
          width="100%"
          src="QVFT_Information.pdf"
          type="application/pdf" />
      </object>
    </div>
    <div class="buttonWrapper mobile">
      <a class="button" href="QVFT_Information.pdf">View Information Package</a>
    </div>
  </div>
  <iframe 
    src="https://docs.google.com/forms/d/e/1FAIpQLScNUqCycnsKIWjNFad4DiHPWmsiJ-eqbMDS3HqOxbTdMmAfeQ/viewform?embedded=true" 
    width="100%" 
    height="1900" 
    frameborder="0" 
    marginheight="0" 
    marginwidth="0"
    title="Questionnaire">
    Loading…
  </iframe>
</div>
