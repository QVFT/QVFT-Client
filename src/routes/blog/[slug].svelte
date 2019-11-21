<script context="module">
  export async function preload({ params, query }) {
    // the `slug` parameter is available because
    // this file is called [slug].svelte
    const res = await this.fetch(`blog/${params.slug}.json`);
    const data = await res.json();

    if (res.status === 200) {
      return { post: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  export let post;
</script>

<style>
  div.subtitle {
    margin: 0.6rem 0 1rem;
    color: #222;
  }

  div.subtitle,
  div.back {
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
    display: block;
    border: 1px solid #ccc;
  }

  h1 {
    margin-top: 2rem;
  }

  div.back {
    margin-top: 2rem;
  }
</style>

<svelte:head>
  <title>{post.title}</title>
</svelte:head>
<div class="back">
  <a href="/blog">Back to blog</a>
</div>
<h1>{post.title}</h1>
<div class="subtitle">{post.author} &bullet; {post.date}</div>
{#if post.image}
  <div class="imageWrapper">
    <img src={`blog/${post.image}`} alt={post.imageAlt} />
  </div>
{/if}
<div class="content">
  {@html post.content}
</div>
