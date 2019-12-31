<script>
  import FaCheck from "svelte-icons/fa/FaCheck.svelte";
  import PostArrow from "./PostArrow.svelte";

  export let item;
  export let i;
  export let timelineLength;
</script>

<style>
  div.monthLabel {
    padding: 0.3rem 0.5rem;
    border: 1px solid var(--themeColorDark);
    border-bottom: 2px solid var(--themeColorDark);
    background-color: #fefefe;
    border-radius: 0.3rem;
    display: inline-block;
    margin-left: -1rem;
  }
  div.item {
    padding: 0.7rem 0.5rem 0.7rem 1.4rem;
    border-left: 2px solid #222;
    position: relative;
  }

  div.spacer {
    height: 2rem;
    border-left: 2px solid #222;
  }

  div.spacer.top {
    height: 0.7rem;
  }

  div.spacer.last {
    height: 1.5rem;
    position: relative;
  }

  div.spacer.last::after {
    width: 0.6rem;
    height: 2px;
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    display: block;
    background-color: #222;
    margin-left: calc(-0.3rem - 1px);
    /* transform: translate(-50%, 50%); */
  }

  div.spacer:first-of-type {
    display: none;
  }

  div.itemMarker {
    border: 1px solid #222;
    border-radius: 50%;
    height: 1.4rem;
    width: 1.4rem;
    padding: 0.2rem;
    box-sizing: border-box;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(-50%, -50%);
    background-color: white;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--themeColorDark);
  }

  div.itemMarker.complete {
    border: 2px solid var(--themeColorDark);
  }

  div.itemContent {
    z-index: 4;
    padding: 1rem;
    background-color: white;
    border: 1px solid #cdcdcd;
    border-radius: 5px;
    margin: 0.75rem 0.2rem;
    position: relative;
  }
  div.title {
    font-size: 1rem;
    font-weight: 500;
  }

  ul.points {
    font-size: 0.9rem;
    line-height: 1.7rem;
    margin: 0.2rem 0;
    padding-left: 1.5rem;
    list-style-type: circle;
  }
</style>

{#if item.showDateLabel}
  <div aria-hidden="true" class="spacer" />
  <div class="monthLabel">{item.prettyDate}</div>
  <div aria-hidden="true" class="spacer top" />
{/if}
<div class="item">
  <div class="itemMarker {item.complete ? 'complete' : ''}">
    {#if item.complete}
      <FaCheck />
    {/if}
  </div>
  <PostArrow />
  <div class="itemContent">
    <div class="title">{item.title}</div>
    {#if item.subpoints}
      <ul class="points">
        {#each item.subpoints as point}
          <li key={point}>{point}</li>
        {/each}
      </ul>
    {/if}
  </div>
</div>
{#if i === timelineLength - 1}
  <div aria-hidden="true" class="spacer last" />
{/if}
