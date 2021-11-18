<script>
    import { onMount } from "svelte";
    import PageHeader from "../components/PageHeader.svelte";
</script>
  
<PageHeader>Dashboard</PageHeader>
<div class="contentWrapper">
    <!-- Embedded Dashboard Page-->
    <iframe src="https://directorqvft.pythonanywhere.com/" style="position: fixed; top: 0px; bottom: 0px; right: 0px; width: 100%; border: none; margin: 0; padding: 0; overflow: hidden; z-index: 999999; height: 100%;" title="Dashboard"></iframe>
</div>
  