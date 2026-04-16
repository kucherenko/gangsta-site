<template>
  <div class="text-sm text-muted flex items-center gap-1">
    <span>Copyright © 2026</span>
    <button class="author-trigger" @click="open = true">Andrey Kucherenko</button>
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
              The Don behind the Borgata. Built Gangsta to bring order to AI
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
              <a
                href="https://www.npmjs.com/~kucherenko"
                target="_blank"
                rel="noopener noreferrer"
                class="author-modal__social-pill"
              >
                <Icon name="i-simple-icons-npm" />
                <span>npm</span>
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
.author-trigger {
  font-weight: 500;
  color: var(--color-amber-500);
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;
  font-size: inherit;
  text-decoration: none;
}

.author-trigger:hover {
  text-decoration: underline;
}

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
  border: 3px solid var(--color-amber-500);
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
  font-size: 1.125rem;
  font-weight: 700;
  margin: 0;
}

.author-modal__bio {
  font-size: 0.875rem;
  line-height: 1.6;
  opacity: 0.8;
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
  padding: 0.375rem 0.75rem;
  border: 1px solid oklch(0.32 0.008 250);
  border-radius: 9999px;
  font-size: 0.8125rem;
  font-weight: 500;
  text-decoration: none;
  transition:
    background 150ms ease,
    border-color 150ms ease,
    box-shadow 150ms ease;
  cursor: pointer;
}

.author-modal__social-pill:hover {
  border-color: var(--color-amber-500);
  box-shadow: 0 0 12px oklch(0.780 0.188 70 / 0.2);
}

.author-modal__social-pill :deep(.icon) {
  width: 1rem;
  height: 1rem;
  flex-shrink: 0;
}
</style>