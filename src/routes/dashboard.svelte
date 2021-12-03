<script>
    import { onMount } from "svelte";
    import PageHeader from "../components/PageHeader.svelte";
</script>

<style>
    .dashboard {
        position: fixed; 
        overflow: visible; 
        top: 50px; 
        bottom: 0px; 
        right: 0px; 
        width: 100%; 
        border: none; margin: 0; 
        padding: 0; overflow: hidden; 
        z-index: 999999; 
        height: 100%;
    }

    @media only screen and (max-width: 600px) {
        .dashboard {
            top: 100px; 
        }
    }
</style>
  
<div>
    <!-- Embedded Dashboard Page-->
    <iframe src="https://directorqvft.pythonanywhere.com/" class="dashboard" title="Dashboard"></iframe>
</div>
  