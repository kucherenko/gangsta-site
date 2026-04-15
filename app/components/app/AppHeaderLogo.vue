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
        :alt="appConfig.header?.logo?.alt || 'Gangsta'"
        class="h-7 w-auto shrink-0"
      />
    </UContextMenu>
    <span class="font-black tracking-widest text-base uppercase text-amber-500 dark:text-amber-400">
      GANGSTA
    </span>
  </div>
</template>
