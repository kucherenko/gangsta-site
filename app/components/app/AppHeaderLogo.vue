<script setup lang="ts">
const appConfig = useAppConfig()
const { hasLogo, headerLightUrl, headerDarkUrl, contextMenuItems } = useLogoAssets()
</script>

<template>
  <div class="flex items-center gap-2">
    <UContextMenu
      v-if="hasLogo"
      :items="contextMenuItems"
    >
      <UColorModeImage
        :light="headerLightUrl"
        :dark="headerDarkUrl"
        :alt="appConfig.header?.logo?.alt || 'Gangsta Agents'"
        class="h-7 w-auto shrink-0"
      />
    </UContextMenu>
    <div class="flex flex-col leading-none gap-[3px]">
      <span class="font-black tracking-[0.12em] text-sm uppercase text-amber-500 dark:text-amber-400">
        GANGSTA
      </span>
      <span class="font-semibold tracking-[0.4em] text-[0.6rem] uppercase text-amber-500/55 dark:text-amber-400/55">
        AGENTS
      </span>
    </div>
  </div>
</template>
