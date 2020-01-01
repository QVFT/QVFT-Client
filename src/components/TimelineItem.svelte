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
    background-color: var(--themeColorDark);
    color: white;
    font-weight: 500;
    border-radius: 0.3rem;
    display: inline-block;
    margin-left: 50%;
    transform: translateX(-50%);
    display: inline-block;
  }
  div.item {
    position: relative;
    box-sizing: border-box;
  }

  div.item.right {
    border-left: 2px solid #222;
    padding: 0.7rem 0.5rem 0.7rem 1.4rem;
    margin-left: 50%;
  }

  div.item.left {
    border-right: 2px solid #222;
    padding: 0.7rem 1.4rem 0.7rem 0.5rem;
    margin-right: calc(50% - 2px);
  }

  div.spacer {
    height: 3rem;
    border-right: 2px solid #222;
    width: 50%;
  }

  div.spacer.top {
    height: 1.5rem;
  }

  div.spacer.last {
    height: 1.5rem;
    position: relative;
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
    background-color: white;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--themeColorDark);
  }

  div.item.right div.itemMarker {
    left: 0;
    transform: translate(-52%, -50%);
  }

  div.item.left div.itemMarker {
    right: 0;
    transform: translate(52%, -50%);
  }

  div.itemMarker.complete {
    border: 2px solid var(--themeColorDark);
  }

  div.itemContent {
    z-index: 4;
    padding: 0.8rem;
    background-color: white;
    border: 1px solid #cdcdcd;
    border-radius: 5px;
    margin: -1rem 0.2rem;
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
<div class="item {i % 2 ? 'right' : 'left'}">
  <div class="itemMarker {item.complete ? 'complete' : ''}">
    {#if item.complete}
      <FaCheck />
    {/if}
  </div>
  <PostArrow left={i % 2} />
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
