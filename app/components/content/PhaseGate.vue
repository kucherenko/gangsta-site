<template>
  <div class="phase-gate" role="alert">
    <div class="phase-gate__glow"></div>
    <div class="phase-gate__inner">
      <div class="phase-gate__icon">
        <Icon name="i-lucide-lock" />
      </div>
      <div class="phase-gate__content">
        <div class="phase-gate__title">{{ title }}</div>
        <div class="phase-gate__description">
          <slot>
            {{ description }}
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: 'PHASE GATE',
  },
  description: {
    type: String,
    default: 'This phase requires explicit Don approval before proceeding. Never auto-advance to the next phase.',
  },
})
</script>

<style scoped>
.phase-gate {
  background: linear-gradient(
    90deg,
    oklch(0.780 0.188 70 / 0.06) 0%,
    var(--site-surface) 30%,
    var(--site-surface) 100%
  );
  border-left: 3px solid var(--color-amber-500);
  padding: 1.25rem 1.5rem;
  display: flex;
  gap: 0;
  align-items: stretch;
  margin: 1.5rem 0;
  border-radius: 0 0.5rem 0.5rem 0;
  position: relative;
  overflow: hidden;
}

/* Amber glow emanating from left border */
.phase-gate__glow {
  position: absolute;
  top: 0;
  left: 0;
  width: 3px;
  height: 100%;
  background: linear-gradient(
    180deg,
    var(--color-amber-400) 0%,
    var(--color-amber-500) 50%,
    var(--color-amber-400) 100%
  );
  box-shadow: 0 0 20px var(--color-amber-500), 0 0 40px oklch(0.780 0.188 70 / 0.4);
}

.phase-gate__inner {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  position: relative;
  z-index: 1;
}

.phase-gate__icon {
  color: var(--color-amber-500);
  font-size: 1rem;
  flex-shrink: 0;
  margin-top: 0.125rem;
  filter: drop-shadow(0 0 4px var(--color-amber-500));
}

.phase-gate__content {
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
}

.phase-gate__title {
  color: var(--color-amber-500);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  font-variant: small-caps;
}

.phase-gate__description {
  color: var(--site-fg);
  font-size: 0.8125rem;
  line-height: 1.6;
}
</style>