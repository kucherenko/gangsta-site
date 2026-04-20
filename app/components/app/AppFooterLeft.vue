<template>
  <div class="footer-left">
    <nav class="footer-nav">
      <NuxtLink to="/getting-started" class="footer-nav__link">Docs</NuxtLink>
      <span class="footer-nav__sep" aria-hidden="true" />
      <NuxtLink to="/blog" class="footer-nav__link">Blog</NuxtLink>
      <span class="footer-nav__sep" aria-hidden="true" />
      <a
        href="https://github.com/kucherenko/gangsta"
        target="_blank"
        rel="noopener noreferrer"
        class="footer-nav__link"
      >GitHub</a>
    </nav>

    <p class="footer-copy">
      © 2026
      <button
        class="footer-author"
        @click="open = true"
      >Andrey Kucherenko</button>
      <span class="footer-copy__sep" aria-hidden="true" />
      Omerta, or else.
    </p>

    <UModal v-model:open="open">
      <template #content>
        <div class="author-modal">
          <div class="author-modal__avatar">
            <img
              src="https://avatars.githubusercontent.com/kucherenko?v=4&size=128"
              alt="Andrey Kucherenko"
              class="author-modal__avatar-img"
            />
          </div>
          <div class="author-modal__info">
            <h3 class="author-modal__name">Andrey Kucherenko</h3>
            <p class="author-modal__bio">
              The Don behind the Gangsta Agents Family. Built Gangsta Agents to bring order to AI
              agentic chaos — because cowboy coding is how you end up sleeping
              with the fishes.
            </p>
            <div class="author-modal__socials">
              <a
                href="https://github.com/kucherenko"
                target="_blank"
                rel="noopener noreferrer"
                class="author-modal__social-pill"
              >
                <Icon name="i-simple-icons-github" />
                <span>GitHub</span>
              </a>
              <a
                href="https://twitter.com/a_kucherenko"
                target="_blank"
                rel="noopener noreferrer"
                class="author-modal__social-pill"
              >
                <Icon name="i-simple-icons-x" />
                <span>Twitter</span>
              </a>
            </div>
          </div>
        </div>
      </template>
    </UModal>
  </div>
</template>

<script setup>
const open = ref(false)
</script>

<style scoped>
.footer-left {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

/* ── Navigation row ── */
.footer-nav {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.footer-nav__link {
  font-size: 0.8125rem;
  font-weight: 500;
  color: var(--site-fg);
  opacity: 0.6;
  text-decoration: none;
  transition: opacity 150ms ease, color 150ms ease;
}

.footer-nav__link:hover {
  opacity: 1;
  color: var(--color-amber-500);
}

.footer-nav__sep {
  display: block;
  width: 1px;
  height: 0.75rem;
  background: var(--site-border);
}

/* ── Copyright row ── */
.footer-copy {
  font-size: 0.75rem;
  color: var(--site-fg);
  opacity: 0.4;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.footer-copy__sep {
  display: block;
  width: 1px;
  height: 0.625rem;
  background: currentColor;
  opacity: 0.4;
}

.footer-author {
  font-size: inherit;
  font-weight: 500;
  color: inherit;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  transition: opacity 150ms ease;
}

.footer-author:hover {
  opacity: 0.7;
  text-decoration: underline;
}

/* ── Author modal ── */
.author-modal {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
  padding: 1.5rem;
}

@media (min-width: 640px) {
  .author-modal {
    flex-direction: row;
    align-items: flex-start;
  }
}

.author-modal__avatar {
  flex-shrink: 0;
}

.author-modal__avatar-img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 2px solid var(--color-amber-500);
  object-fit: cover;
}

.author-modal__info {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  text-align: center;
}

@media (min-width: 640px) {
  .author-modal__info {
    text-align: left;
  }
}

.author-modal__name {
  font-size: 1.0625rem;
  font-weight: 700;
  margin: 0;
}

.author-modal__bio {
  font-size: 0.875rem;
  line-height: 1.65;
  opacity: 0.75;
  margin: 0;
}

.author-modal__socials {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
}

@media (min-width: 640px) {
  .author-modal__socials {
    justify-content: flex-start;
  }
}

.author-modal__social-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.375rem 0.875rem;
  border: 1px solid var(--site-border);
  border-radius: 9999px;
  font-size: 0.8125rem;
  font-weight: 500;
  text-decoration: none;
  color: var(--site-fg);
  transition:
    border-color 150ms ease,
    color 150ms ease;
}

.author-modal__social-pill:hover {
  border-color: var(--color-amber-500);
  color: var(--color-amber-500);
}

.author-modal__social-pill :deep(.icon) {
  width: 1rem;
  height: 1rem;
  flex-shrink: 0;
}
</style>
