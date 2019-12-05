<script>
  import { fade } from "svelte/transition";
  import FaEnvelope from "svelte-icons/fa/FaEnvelope.svelte";
  import FaLinkedin from "svelte-icons/fa/FaLinkedin.svelte";
  import FaGithub from "svelte-icons/fa/FaGithub.svelte";
  export let team;

  let selectedMember;

  const showMember = member => {
    selectedMember = member;
    if (selectedMember) {
      document.body.style.overflow = "hidden";
      gtag("event", "view team member", { label: selectedMember.name });
    } else {
      document.body.style.overflow = "visible";
    }
  };

  const stopPropagation = e => e.stopPropagation();
</script>

<style>
  .imageWrapper {
    height: 320px;
    width: 320px;
    overflow: hidden;
    margin-bottom: 0.7rem;
    position: relative;
  }

  .teamMember.clickable {
    cursor: pointer;
  }
  .imageWrapper .teamMemberImage > * {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }

  .imageWrapper div.caption {
    /* display: none; */
    position: absolute;
    left: 0;
    bottom: 0;
    background-color: rgba(255, 255, 255, 0.8);
    width: 100%;
    padding: 0.3rem 0.5rem;
    font-size: 0.9rem;
    line-height: 1rem;
    box-sizing: border-box;
    position: absolute;
    height: 4rem;
    bottom: -4rem;
    transition: bottom 0.3s ease;
  }

  .imageWrapper:hover div.caption {
    bottom: 0;
  }

  @media (hover: none) {
    .imageWrapper div.caption {
      bottom: 0 !important;
    }
  }

  div.team {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin: 3rem auto 0;
    max-width: calc(330px * 3);
  }
  div.teamMember {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 0.2rem;
  }
  div.name {
    font-weight: bold;
  }

  div.position {
    color: #333;
  }
  div.position,
  div.contact {
    font-size: 0.8rem;
  }
  div.contact {
    margin-top: 0.3rem;
    height: 0.9rem;
    width: 100%;
    display: flex;
    justify-content: flex-start;
  }

  div.contact > div {
    width: 0.8rem;
    margin: 0 0.2rem;
  }

  div.contact,
  div.contact a {
    color: rgb(114, 114, 114);
  }

  div.contact a:hover {
    color: #444 !important;
  }

  div.contact > div:first-child {
    margin-left: 0;
  }

  div.modal {
    position: fixed;
    top: 0;
    bottom: 0;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.95);
    z-index: 48;
    display: flex;
    overflow-y: auto;
    overflow-x: hidden;
  }

  .modal div.modalHead {
    display: flex;
    align-items: center;
  }

  .modal div.modalContent {
    min-width: 60%;
    min-height: 60%;
    margin: auto;
    padding: 1rem;
  }

  .modal div.nameAndPosition > * {
    padding: 0;
    margin: 0;
  }

  div.modalHead > div.modalImageWrapper {
    height: 4rem;
    width: 4rem;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 1.2rem;
  }

  .modal div.modalImageWrapper picture > * {
    height: 100%;
    width: 100%;
  }

  .modal div.modalContact {
    font-size: 0.9rem;
    display: flex;
    margin-bottom: 1rem;
  }

  .modal div.modalPosition {
    font-size: 0.9rem;
  }
  .modal div.modalContact > a {
    height: 1rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-right: 1.5rem;
    color: #666;
    text-decoration: none;
  }

  .modal .iconWrapper {
    width: 0.9rem;
    height: 0.9rem;
  }

  .modal div.modalContact > a:hover {
    color: #444 !important;
  }

  .modal div.modalContact > a > span {
    margin-left: 0.4rem;
    line-height: 1rem;
  }

  .modal p.blurb {
    margin: 1.5rem 0;
    line-height: 1.8rem;
  }

  .modal h3 {
    font-size: 1.5rem;
  }
</style>

{#if selectedMember}
  <div
    class="modal"
    in:fade={{ duration: 100 }}
    on:click={() => showMember(null)}>
    <div class="modalContent contentWrapper">
      <div class="modalHead">
        <div class="modalImageWrapper">
          <picture class="teamMemberImage">
            <source
              srcset="{`/team/${selectedMember.image}`}.webp"
              type="image/webp" />
            <source
              srcset="{`/team/${selectedMember.image}`}.jpeg"
              type="image/jpg" />
            <img
              src="{`/team/${selectedMember.image}`}.jpeg"
              alt={selectedMember.name} />
          </picture>
        </div>
        <div class="nameAndPosition">
          <h3>{selectedMember.name}</h3>
          <div class="modalPosition">{selectedMember.position}</div>
        </div>
      </div>
      <p class="blurb">{selectedMember.blurb}</p>
      <div class="modalContact">
        {#if selectedMember.email}
          <a
            target="_blank"
            rel="noopener noreferrer"
            on:click={stopPropagation}
            href="mailto:{selectedMember.email}">
            <span class="iconWrapper">
              <FaEnvelope />
            </span>
            <span>Email</span>
          </a>
        {/if}
        {#if selectedMember.linkedIn}
          <a
            target="_blank"
            rel="noopener noreferrer"
            on:click={stopPropagation}
            href="https://www.linkedin.com/in/{selectedMember.linkedIn}/">
            <span class="iconWrapper">
              <FaLinkedin />
            </span>
            <span>LinkedIn</span>
          </a>
        {/if}
        {#if selectedMember.gitHub}
          <a
            target="_blank"
            rel="noopener noreferrer"
            on:click={stopPropagation}
            href="https://github.com/{selectedMember.gitHub}">
            <span class="iconWrapper">
              <FaGithub />
            </span>
            <span>GitHub</span>
          </a>
        {/if}
      </div>
    </div>
  </div>
{/if}
<div class="team {selectedMember ? 'noScroll' : ''}">
  {#each team as member}
    <div
      class="teamMember {member.blurb ? 'clickable' : ''}"
      on:click={() => {
        if (member.blurb) {
          showMember(member);
        }
      }}>
      <div class="imageWrapper">
        <picture class="teamMemberImage">
          <source srcset="{`/team/${member.image}`}.webp" type="image/webp" />
          <source srcset="{`/team/${member.image}`}.jpeg" type="image/jpg" />
          <img src="{`/team/${member.image}`}.jpeg" alt={member.name} />
        </picture>
        <div class="caption">
          <div class="name">{member.name}</div>
          <div class="position">{member.position}</div>
          <div class="contact">
            {#if member.email}
              <div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  on:click={stopPropagation}
                  href="mailto:{member.email}">
                  <FaEnvelope />
                </a>
              </div>
            {/if}
            {#if member.linkedIn}
              <div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  on:click={stopPropagation}
                  href="https://www.linkedin.com/in/{member.linkedIn}">
                  <FaLinkedin />
                </a>
              </div>
            {/if}
            {#if member.gitHub}
              <div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  on:click={stopPropagation}
                  href="https://github.com/{member.gitHub}">
                  <FaGithub />
                </a>
              </div>
            {/if}
          </div>
        </div>
      </div>
    </div>
  {/each}
</div>
