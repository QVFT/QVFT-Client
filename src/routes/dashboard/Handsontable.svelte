<!-- FROM https://github.com/handsontable/handsontable/issues/6008-->

<svelte:head>
    <script src="https://cdn.jsdelivr.net/npm/handsontable/dist/handsontable.full.min.js" 
        on:load={scriptLoaded}></script>
    <link href="https://cdn.jsdelivr.net/npm/handsontable/dist/handsontable.full.min.css" rel="stylesheet" 
        on:load={styleLoaded}>
</svelte:head>

<script>
    import { onMount } from 'svelte';

    export let data;

    let gridElement;

    let gridStatus = {
        isScriptLoaded: false,
        isStyleLoaded: false,
        isMounted: false,
        isInited: false
    }
    
    onMount(() => {
        gridStatus.isMounted = true;
        if (gridStatus.isScriptLoaded && gridStatus.isStyleLoaded) gridInit()
    })

    function scriptLoaded() {
        gridStatus.isScriptLoaded = true;
        if (gridStatus.isMounted && gridStatus.isStyleLoaded) gridInit()
    }

    function styleLoaded() {
        gridStatus.isStyleLoaded = true;
        if (gridStatus.isScriptLoaded && gridStatus.isMounted) gridInit()
    }

    function gridInit() {
        if (!gridStatus.isInited) {
            gridStatus.isInited = true;
            new Handsontable(gridElement,{
                data:data,
                rowHeaders:true,
                colHeaders:true,
                stretchH: 'all',
                preventOverflow: 'horizontal',
                licenseKey: 'non-commercial-and-evaluation'
            });
        } 
    }
</script>

<div bind:this={gridElement}></div>