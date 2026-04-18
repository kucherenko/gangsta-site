<script setup lang="ts">
import type { Collections } from '@nuxt/content'

definePageMeta({
  layout: false,
  header: false,
  footer: false,
})

type BlogPost = Collections['docs'] & { date?: string }

const { data: posts } = await useAsyncData('blog-posts', () =>
  queryCollection('docs')
    .where('path', 'LIKE', '/blog/%')
    .where('extension', '=', 'md')
    .order('path', 'DESC')
    .all() as Promise<BlogPost[]>,
)

const formatDate = (path: string) => {
  const match = path.match(/\/blog\/(\d{4}-\d{2}-\d{2})/)
  if (!match) return ''
  return new Date(match[1]).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

useSeoMeta({
  title: 'Blog — Gangsta',
  description: 'Field notes from the front lines of spec-driven AI development.',
})
</script>

<template>
  <div class="blog-shell">
    <AppHeader />

    <main class="blog-main">
      <div class="blog-container">

        <header class="blog-masthead">
          <p class="blog-masthead__eyebrow">Dispatches</p>
          <h1 class="blog-masthead__title">From the field</h1>
        </header>

        <div
          v-if="posts && posts.length > 0"
          class="blog-list"
        >
          <NuxtLink
            v-for="post in posts"
            :key="post.path"
            :to="post.path"
            class="blog-item"
          >
            <time class="blog-item__date">{{ formatDate(post.path) }}</time>
            <h2 class="blog-item__title">{{ post.title }}</h2>
            <p
              v-if="post.description"
              class="blog-item__description"
            >
              {{ post.description }}
            </p>
            <span class="blog-item__read">Read →</span>
          </NuxtLink>
        </div>

        <div
          v-else
          class="blog-empty"
        >
          <p>No dispatches yet. Check back soon.</p>
        </div>

      </div>
    </main>

    <AppFooter />
  </div>
</template>

<style scoped>
.blog-shell {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: var(--site-bg);
  color: var(--site-fg);
}

.blog-main {
  flex: 1;
  padding: 4rem 1.5rem 6rem;
}

.blog-container {
  max-width: 44rem;
  margin: 0 auto;
}

/* ── Masthead ── */
.blog-masthead {
  margin-bottom: 3.5rem;
  padding-bottom: 3rem;
  border-bottom: 1px solid var(--site-border);
}

.blog-masthead__eyebrow {
  font-size: 0.6875rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-amber-500);
  margin: 0 0 0.75rem;
}

.blog-masthead__title {
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 900;
  letter-spacing: -0.03em;
  line-height: 1.05;
  color: var(--site-heading-h1h2);
  margin: 0;
}

/* ── Post list ── */
.blog-list {
  display: flex;
  flex-direction: column;
}

.blog-item {
  display: block;
  padding: 2.25rem 0;
  border-top: 1px solid var(--site-border);
  text-decoration: none;
  color: inherit;
  transition: none;
}

.blog-item:last-child {
  border-bottom: 1px solid var(--site-border);
}

.blog-item__date {
  display: block;
  font-size: 0.6875rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-amber-500);
  margin-bottom: 0.875rem;
}

.blog-item__title {
  font-size: 1.375rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  line-height: 1.25;
  color: var(--site-heading-h1h2);
  margin: 0 0 0.625rem;
  transition: color 150ms ease;
}

.blog-item:hover .blog-item__title {
  color: var(--color-amber-500);
}

.blog-item__description {
  font-size: 0.9375rem;
  color: var(--site-fg);
  opacity: 0.65;
  line-height: 1.65;
  margin: 0 0 1.25rem;
  max-width: 38rem;
}

.blog-item__read {
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  color: var(--color-amber-500);
  display: inline-block;
  transition: transform 150ms ease;
}

.blog-item:hover .blog-item__read {
  transform: translateX(4px);
}

/* ── Empty state ── */
.blog-empty {
  padding: 5rem 0;
  text-align: center;
  color: var(--site-fg);
  opacity: 0.4;
  font-size: 0.9375rem;
}
</style>
