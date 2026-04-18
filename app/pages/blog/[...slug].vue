<script setup lang="ts">
import type { Collections } from '@nuxt/content'

definePageMeta({
  layout: false,
  header: false,
  footer: false,
})

const route = useRoute()
const path = computed(() => `/blog/${(route.params.slug as string[]).join('/')}`)

const { data: post } = await useAsyncData(
  `blog-${route.params.slug}`,
  () => queryCollection('docs').path(path.value).first() as Promise<Collections['docs'] | null>,
)

if (!post.value) {
  throw createError({ statusCode: 404, statusMessage: 'Dispatch not found', fatal: true })
}

const formatDate = (path: string) => {
  const match = path.match(/\/blog\/(\d{4}-\d{2}-\d{2})/)
  if (!match) return ''
  return new Date(match[1]).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

const postDate = computed(() => formatDate(path.value))

useSeoMeta({
  title: `${post.value?.title} — Gangsta Blog`,
  description: post.value?.description,
})
</script>

<template>
  <div class="post-shell">
    <AppHeader />

    <main class="post-main">
      <div class="post-container">

        <nav class="post-nav">
          <NuxtLink
            to="/blog"
            class="post-back"
          >
            ← All dispatches
          </NuxtLink>
        </nav>

        <article
          v-if="post"
          class="post-article"
        >
          <header class="post-header">
            <time
              v-if="postDate"
              class="post-header__date"
            >
              {{ postDate }}
            </time>
            <h1 class="post-header__title">
              {{ post.title }}
            </h1>
            <p
              v-if="post.description"
              class="post-header__description"
            >
              {{ post.description }}
            </p>
          </header>

          <div class="post-rule" />

          <div class="post-body">
            <ContentRenderer :value="post" />
          </div>
        </article>

      </div>
    </main>

    <AppFooter />
  </div>
</template>

<style scoped>
.post-shell {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: var(--site-bg);
  color: var(--site-fg);
}

.post-main {
  flex: 1;
  padding: 3rem 1.5rem 7rem;
}

.post-container {
  max-width: 44rem;
  margin: 0 auto;
}

/* ── Back navigation ── */
.post-nav {
  margin-bottom: 3rem;
}

.post-back {
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--site-fg);
  opacity: 0.5;
  text-decoration: none;
  transition: opacity 150ms ease, color 150ms ease;
}

.post-back:hover {
  opacity: 1;
  color: var(--color-amber-500);
}

/* ── Article header ── */
.post-header {
  margin-bottom: 0;
}

.post-header__date {
  display: block;
  font-size: 0.6875rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-amber-500);
  margin-bottom: 1.25rem;
}

.post-header__title {
  font-size: clamp(1.875rem, 5vw, 2.75rem);
  font-weight: 900;
  letter-spacing: -0.03em;
  line-height: 1.1;
  color: var(--site-heading-h1h2);
  margin: 0 0 1.25rem;
}

.post-header__description {
  font-size: 1.1875rem;
  color: var(--site-fg);
  opacity: 0.65;
  margin: 0;
  line-height: 1.7;
  font-weight: 400;
}

/* ── Rule ── */
.post-rule {
  height: 1px;
  background: var(--site-border);
  margin: 2.5rem 0;
}

/* ── Body ── */
.post-body {
  font-size: 1.0625rem;
  line-height: 1.8;
  color: var(--site-fg);
}

.post-body :deep(h1),
.post-body :deep(h2) {
  font-size: 1.5rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  color: var(--site-heading-h1h2);
  margin: 2.5rem 0 0.875rem;
  line-height: 1.2;
}

.post-body :deep(h3),
.post-body :deep(h4) {
  font-size: 1.125rem;
  font-weight: 700;
  color: var(--site-heading-h3h4);
  margin: 2rem 0 0.625rem;
}

.post-body :deep(p) {
  margin-bottom: 1.5rem;
}

.post-body :deep(a) {
  color: var(--site-link);
  text-decoration: underline;
  text-decoration-color: color-mix(in oklch, var(--site-link) 40%, transparent);
  text-underline-offset: 3px;
  transition: text-decoration-color 150ms ease;
}

.post-body :deep(a:hover) {
  color: var(--site-link-hover);
  text-decoration-color: var(--site-link-hover);
}

.post-body :deep(ul),
.post-body :deep(ol) {
  padding-left: 1.5rem;
  margin-bottom: 1.5rem;
}

.post-body :deep(li) {
  margin-bottom: 0.5rem;
  line-height: 1.7;
}

.post-body :deep(blockquote) {
  border-left: 2px solid var(--color-amber-500);
  padding: 0.125rem 0 0.125rem 1.5rem;
  margin: 2rem 0;
  font-size: 1.125rem;
  font-style: italic;
  color: var(--site-fg);
  opacity: 0.8;
}

.post-body :deep(code) {
  background: var(--site-code-bg);
  color: var(--site-code-text);
  padding: 0.15em 0.4em;
  border-radius: 0.3rem;
  font-size: 0.875em;
  font-family: var(--font-mono);
}

.post-body :deep(pre) {
  background: var(--site-surface);
  border: 1px solid var(--site-border);
  border-radius: 0.5rem;
  padding: 1.375rem 1.5rem;
  overflow-x: auto;
  margin-bottom: 1.75rem;
  font-size: 0.9rem;
}

.post-body :deep(pre code) {
  background: none;
  padding: 0;
  font-size: inherit;
  color: var(--site-fg);
}

.post-body :deep(strong) {
  color: var(--site-heading-h3h4);
  font-weight: 700;
}

.post-body :deep(hr) {
  border: none;
  border-top: 1px solid var(--site-border);
  margin: 3rem 0;
}

.post-body :deep(table) {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 1.75rem;
  font-size: 0.9375rem;
}

.post-body :deep(th) {
  font-weight: 700;
  color: var(--site-heading-h3h4);
  padding: 0.625rem 0.875rem;
  border-bottom: 2px solid var(--site-border);
  text-align: left;
}

.post-body :deep(td) {
  padding: 0.625rem 0.875rem;
  border-bottom: 1px solid var(--site-border);
  vertical-align: top;
}
</style>
