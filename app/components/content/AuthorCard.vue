<template>
  <div class="author-card">
    <div class="author-card__avatar">
      <img
        src="https://avatars.githubusercontent.com/kucherenko?v=4&size=128"
        alt="Andrey Kucherenko"
        class="author-card__avatar-img"
      />
    </div>
    <div class="author-card__info">
      <h3 class="author-card__name">Andrey Kucherenko</h3>
      <p class="author-card__bio">
        The Don behind the Borgata. Built Gangsta to bring order to AI agentic
        chaos — because cowboy coding is how you end up sleeping with the
        fishes.
      </p>
      <div class="author-card__socials">
        <a
          href="https://github.com/kucherenko"
          target="_blank"
          rel="noopener noreferrer"
          class="author-card__social-pill"
        >
          <Icon name="i-simple-icons-github" />
          <span>GitHub</span>
        </a>
        <a
          href="https://twitter.com/a_kucherenko"
          target="_blank"
          rel="noopener noreferrer"
          class="author-card__social-pill"
        >
          <Icon name="i-simple-icons-x" />
          <span>Twitter</span>
        </a>
        <a
          href="https://www.npmjs.com/~kucherenko"
          target="_blank"
          rel="noopener noreferrer"
          class="author-card__social-pill"
        >
          <Icon name="i-simple-icons-npm" />
          <span>npm</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  name: {
    type: String,
    default: 'Andrey Kucherenko',
  },
  bio: {
    type: String,
    default:
      'The Don behind the Borgata. Built Gangsta to bring order to AI agentic chaos — because cowboy coding is how you end up sleeping with the fishes.',
  },
  avatarUrl: {
    type: String,
    default: 'https://avatars.githubusercontent.com/kucherenko?v=4&size=128',
  },
})
</script>

<style scoped>
.author-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
  padding: 2rem;
  background: var(--site-surface);
  border: 1px solid var(--site-border);
  border-radius: 1rem;
  box-shadow:
    0 0 0 1px oklch(0.780 0.188 70 / 0.15),
    0 4px 24px oklch(0.780 0.188 70 / 0.08);
  max-width: 480px;
  margin: 0 auto;
}

@media (min-width: 640px) {
  .author-card {
    flex-direction: row;
    align-items: flex-start;
  }
}

.author-card__avatar {
  flex-shrink: 0;
}

.author-card__avatar-img {
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  border: 3px solid var(--color-amber-500);
  box-shadow:
    0 0 0 4px oklch(0.780 0.188 70 / 0.2),
    0 0 20px oklch(0.780 0.188 70 / 0.3),
    0 8px 32px oklch(0.780 0.188 70 / 0.15);
  object-fit: cover;
}

.author-card__info {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  text-align: center;
}

@media (min-width: 640px) {
  .author-card__info {
    text-align: left;
  }
}

.author-card__name {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--site-fg);
  margin: 0;
}

.author-card__bio {
  font-size: 0.875rem;
  line-height: 1.6;
  color: var(--site-fg);
  opacity: 0.8;
  margin: 0;
}

.author-card__socials {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
}

@media (min-width: 640px) {
  .author-card__socials {
    justify-content: flex-start;
  }
}

.author-card__social-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: var(--site-surface);
  border: 1px solid var(--site-border);
  border-radius: 9999px;
  color: var(--site-fg);
  font-size: 0.875rem;
  font-weight: 500;
  text-decoration: none;
  transition:
    background 150ms ease,
    border-color 150ms ease,
    box-shadow 150ms ease;
  cursor: pointer;
}

.author-card__social-pill:hover {
  background: oklch(0.780 0.188 70 / 0.1);
  border-color: var(--color-amber-500);
  box-shadow: 0 0 12px oklch(0.780 0.188 70 / 0.2);
}

.author-card__social-pill :deep(.icon) {
  width: 1rem;
  height: 1rem;
  flex-shrink: 0;
}
</style>
