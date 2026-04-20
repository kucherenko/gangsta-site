<script setup>
const route = useRoute()
const isDocsActive = computed(() => !route.path.startsWith('/blog') && route.path.length > 1)
const isBlogActive = computed(() => route.path.startsWith('/blog'))
</script>

<template>
  <nav class="header-nav">
    <NuxtLink
      to="/getting-started"
      :class="['header-nav__link', { 'header-nav__link--active': isDocsActive }]"
      title="Docs"
    >
      <Icon name="i-lucide-book-open" class="header-nav__icon" />
      <span class="header-nav__label">Docs</span>
    </NuxtLink>
    <NuxtLink
      to="/blog"
      :class="['header-nav__link', { 'header-nav__link--active': isBlogActive }]"
      title="Blog"
    >
      <Icon name="i-lucide-newspaper" class="header-nav__icon" />
      <span class="header-nav__label">Blog</span>
    </NuxtLink>
  </nav>
</template>

<style scoped>
.header-nav {
  display: flex;
  align-items: center;
  gap: 0.125rem;
}

.header-nav__link {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.3125rem 0.625rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--site-fg);
  opacity: 0.6;
  text-decoration: none;
  border-radius: 0.375rem;
  letter-spacing: 0.01em;
  transition: opacity 150ms ease, color 150ms ease, background 150ms ease;
}

.header-nav__link:hover {
  opacity: 1;
  color: var(--site-fg);
  background: color-mix(in oklch, var(--site-fg) 6%, transparent);
}

.header-nav__link--active {
  opacity: 1;
  color: var(--color-amber-500);
  font-weight: 600;
}

.header-nav__link--active:hover {
  color: var(--color-amber-500);
  background: color-mix(in oklch, var(--color-amber-500) 8%, transparent);
}

.header-nav__icon {
  width: 1.125rem;
  height: 1.125rem;
  flex-shrink: 0;
}

.header-nav__label {
  display: none;
}

@media (min-width: 640px) {
  .header-nav__label {
    display: inline;
  }
}
</style>
