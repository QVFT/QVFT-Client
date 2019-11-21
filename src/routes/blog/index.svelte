<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`blog.json`)
      .then(r => r.json())
      .then(posts => {
        return { posts };
      });
  }
</script>

<script>
  export let posts;
</script>

<style>
  h2 a {
    text-decoration: none;
    color: black;
  }

  h2 a:hover {
    text-decoration: underline;
  }

  div.post {
    padding-bottom: 3rem;
    border-bottom: 1px solid #eee;
  }
  div.subtitle {
    margin: 0.6rem 0 1rem;
    color: #222;
  }

  div.subtitle,
  div.readMore {
    font-size: 0.85rem;
  }

  div.imageWrapper {
    height: 10rem;
    width: 80%;
    margin-bottom: 1.5rem;
    margin-left: 0.8rem;
  }

  div.imageWrapper img {
    max-height: 100%;
    max-width: 100%;
    border: 1px solid #ccc;
    display: block;
  }
</style>

<svelte:head>
  <title>Blog</title>
</svelte:head>
<h1>Build Progress</h1>

<div class="blog">
  {#each posts as post}
    <!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
    <div class="post">
      <h2>
        <a rel="prefetch" href="blog/{post.slug}">{post.title}</a>
      </h2>
      <div class="subtitle">{post.author} &bullet; {post.date}</div>
      {#if post.image}
        <div class="imageWrapper">
          <img src={`blog/${post.image}`} alt={post.imageAlt} />
        </div>
      {/if}
      <p class="blurb">{post.blurb}</p>
      <div class="readMore">
        <a rel="prefetch" href="blog/{post.slug}">Read more</a>
      </div>
    </div>
  {/each}
</div>
