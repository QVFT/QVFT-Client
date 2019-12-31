<script>
  import TimelineItem from "./TimelineItem.svelte";
  export let timeline = [];

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
  div.timelineWrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>

<div class="timelineWrapper">
  <div class="timeline">
    {#each timeline.map(timelineMap) as item, i}
      <TimelineItem {item} {i} timelineLength={timeline.length} />
    {/each}
  </div>
</div>
