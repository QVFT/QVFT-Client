<script>
  export let timeline = [];
  import FaCheck from "svelte-icons/fa/FaCheck.svelte";

  const timelineMap = (item, i, timelineArray) => {
    const date = item.prettyDate;
    const prevDate = i === 0 ? 0 : timelineArray[i - 1].prettyDate;
    if (date !== prevDate) {
      item.showDateLabel = true;
    } else {
      item.showDateLabel = false;
    }
    return item;
  };
</script>

<style>
  div.monthLabel {
    padding: 0.3rem 0.5rem;
    border: 1px solid green;
    border-bottom: 2px solid green;
    background-color: #fefefe;
    border-radius: 0.3rem;
    display: inline-block;
    margin-left: -1rem;
  }
  div.item {
    padding: 0.7rem 0.5rem 0.7rem 1.4rem;
    border-left: 2px solid #222;
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

  div.timelineWrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  div.item {
    position: relative;
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
    color: green;
  }

  .itemMarker.complete {
    border: 2px solid green;
  }
</style>

<div class="timelineWrapper">

  <div class="timeline">
    {#each timeline.map(timelineMap) as item, i}
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
        <div>{item.title}</div>
      </div>
      {#if i === timeline.length - 1}
        <div aria-hidden="true" class="spacer last" />
      {/if}
    {/each}
  </div>
</div>
