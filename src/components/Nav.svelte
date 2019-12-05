<script>
  export let segment;
</script>

<style>
  nav {
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

  a.selected {
    color: black;
  }

  a::after {
    position: absolute;
    content: "";
    width: 80%;
    margin-left: 10%;
    height: 4px;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    background-color: var(--themeColor);
    display: block;
    bottom: 0;
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  a.selected::after {
    transform: scaleX(1);
  }

  a {
    position: relative;
    text-decoration: none;
    height: 3rem;
    display: flex;
    align-items: center;
    color: #333;
    transition: color 0.3s ease;
  }

  picture.logo > * {
    height: 2rem;
    width: 2rem;
  }
</style>

<nav>
  <div class="contentWrapper">
    <div class="logo">
      <a class:selected={!segment} href=".">
        <picture class="logo">
          <source srcset="logo.webp" type="image/webp" />
          <source srcset="logo.png" type="image/png" />
          <img src="logo.png" alt="Queen's Vertical Farming Team" />
        </picture>
      </a>
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
