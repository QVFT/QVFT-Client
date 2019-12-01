<script>
  export let segment;
</script>

<style>
  nav {
    border-bottom: 1px solid #eee;
    border-top: 3px solid var(--themeColor);
    font-weight: 300;
    font-size: 0.9rem;
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    background-color: white;
    min-height: 3rem;
    /* overflow: hidden; */
    box-sizing: content-box;
    z-index: 24;
  }

  nav div.contentWrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  /* clearfix */
  ul::after {
    content: "";
    display: block;
    clear: both;
  }

  li {
    display: inline-block;
    padding: 0;
    margin: 0 0.8rem;
  }

  .selected {
    font-weight: bold;
  }

  .selected::after {
    position: absolute;
    content: "";
    width: 80%;
    margin-left: 10%;
    height: 3px;
    background-color: var(--themeColor);
    display: block;
    bottom: -1px;
  }

  a {
    position: relative;
    text-decoration: none;
    height: 3rem;
    display: flex;
    align-items: center;
    color: black;
  }

  img.logo {
    height: 2rem;
    width: 2rem;
  }
</style>

<nav>
  <div class="contentWrapper">
    <div class="logo">
      <li>
        <a class:selected={!segment} href=".">
          <img class="logo" src="logo.png" alt="QVFT" />
        </a>
      </li>
    </div>
    <ul>
      <li>
        <a class:selected={segment === 'team'} href="team">Our Team</a>
      </li>
      <li>
        <a class:selected={segment === 'sponsorship'} href="sponsorship">
          Sponsorship
        </a>
      </li>
      <li>
        <a
          class:selected={segment === 'about-vertical-farming'}
          href="about-vertical-farming">
          About Vertical Farming
        </a>
      </li>
    </ul>
  </div>

</nav>
