<script lang="ts">
  import { resolve } from '$app/paths';

  let { data } = $props();
</script>

<svelte:head>
  <title>Blog | Instituto Dr. Carlos Seguías</title>
</svelte:head>

<section class="blog-container container">
  <h1>Blog</h1>
  
  <div class="posts-grid">
    {#each data.posts as post (post.slug)}
      <article class="post-card card">
        {#if post.image}
          <img src={post.image} alt={post.title} />
        {/if}
        <div class="post-content">
          <span class="date">{post.date} • {post.author}</span>
          <h2><a href={resolve('/blog/[slug]', { slug: post.slug })}>{post.title}</a></h2>
          
        </div>
      </article>
    {/each}
  </div>
</section>

<style>
  .blog-container {
    max-width: 1100px;
    margin: 40px auto;
    padding: 0 20px;
  }
  .posts-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    margin-top: 30px;
  }
  .post-card {
    color: var(--color-text);
  }
  .post-card img {
    width: 100%;
    height: 180px;
    object-fit: cover;
  }
  .post-content {
    padding: 20px;
  }
  .date {
    font-size: 0.85rem;
    color: var(--color-muted);
  }
  h1 {
    font-size: 2rem;
    font-weight: bold;
    color: var(--color-heading);
    text-align: center;
  }
  h2 a {
    color: var(--color-heading);
    text-decoration: none;
  }
  h2 a:hover {
    color: var(--color-primary-hover);
  }
  h2 a{
    font-weight: bold;
  }
</style>