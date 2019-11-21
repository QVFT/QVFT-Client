<script>
  export let team;
</script>

<style>
  .imageWrapper {
    height: 6rem;
    width: 6rem;
    border-radius: 50%;
    overflow: hidden;
    margin-bottom: 0.7rem;
  }
  .imageWrapper img.teamMemberImage {
    height: 100%;
    width: 100%;
  }
  div.team {
    display: flex;
    align-items: center;
  }
  div.teamMember {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>

<div class="team">
  {#each team as member}
    <div class="teamMember">
      <div class="imageWrapper">
        <img
          class="teamMemberImage"
          alt={member.name}
          src={`/team/${member.image}`} />
      </div>
      <div>{member.name}</div>
      <div>{member.position}</div>
    </div>
  {/each}
</div>
