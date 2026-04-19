<script setup lang="ts">
defineProps<{ vertical?: boolean }>()

const colorMode = useColorMode()

const c = computed(() => {
  const dark = colorMode.value === 'dark'
  return {
    bg1: dark ? '#0a0a0a' : '#f8f9fc',
    bg2: dark ? '#111111' : '#eef0f8',
    cardBg: dark ? '#0d0d0d' : '#ffffff',
    cardStroke: dark ? '#222222' : '#e2e8f0',
    glowStart: dark ? '#e8a020' : '#b45309',
    glowMid: dark ? '#f0be50' : '#d97706',
    arrow: dark ? '#c47a18' : '#b45309',
    arrowLine: dark ? '#a05c10' : '#b45309',
    numText: dark ? '#e8a020' : '#b45309',
    titleText: dark ? '#e8e8e8' : '#1e293b',
    skillText: dark ? '#555555' : '#64748b',
    divider: dark ? '#1e1e1e' : '#e2e8f0',
    gateLabel: dark ? '#444444' : '#94a3b8',
    gateValue: dark ? '#e8a020' : '#b45309',
    dot: dark ? '#e8a020' : '#d97706',
  }
})
</script>

<template>
  <div class="pipeline-flow" role="img" aria-label="The Heist Pipeline — 6 phases from Reconnaissance to The Delivery">

    <!-- ── VERTICAL (the-heist page) ── -->
    <svg v-if="vertical" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 1088" width="100%" style="display:block;max-width:560px;margin:0 auto">
      <defs>
        <linearGradient id="pf-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" :stop-color="c.bg1"/>
          <stop offset="100%" :stop-color="c.bg2"/>
        </linearGradient>
        <linearGradient id="pf-gl" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"   :stop-color="c.glowStart" stop-opacity="0"/>
          <stop offset="30%"  :stop-color="c.glowStart" stop-opacity="0.9"/>
          <stop offset="50%"  :stop-color="c.glowMid" stop-opacity="1"/>
          <stop offset="70%"  :stop-color="c.glowStart" stop-opacity="0.9"/>
          <stop offset="100%" :stop-color="c.glowStart" stop-opacity="0"/>
        </linearGradient>
        <marker id="pf-arr" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" :fill="c.arrow"/>
        </marker>
      </defs>

      <rect width="480" height="1088" fill="url(#pf-bg)"/>

      <!-- Phase 01: Reconnaissance (y=20) -->
      <rect x="40" y="20" width="400" height="148" :fill="c.cardBg" :stroke="c.cardStroke" stroke-width="0.5"/>
      <rect x="40" y="20" width="400" height="2.5" fill="url(#pf-gl)"/>
      <circle cx="55" cy="42" r="5" :fill="c.dot" opacity="0.9"/>
      <text x="70" y="47" font-size="12" :fill="c.numText" font-weight="700" letter-spacing="0.1em">01</text>
      <text x="52" y="75" font-size="16" :fill="c.titleText" font-weight="700" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif">Reconnaissance</text>
      <text x="52" y="100" font-size="11" :fill="c.skillText">gangsta:</text>
      <text x="52" y="113" font-size="11" :fill="c.skillText">:reconnaissance</text>
      <line x1="50" y1="136" x2="430" y2="136" :stroke="c.divider" stroke-width="1"/>
      <text x="52" y="147" font-size="9" :fill="c.gateLabel" letter-spacing="0.12em">GATE</text>
      <text x="52" y="163" font-size="14" :fill="c.gateValue" font-weight="600" letter-spacing="0.04em">Dossier</text>
      <line x1="240" y1="171" x2="240" y2="197" :stroke="c.arrowLine" stroke-width="1.5" marker-end="url(#pf-arr)"/>

      <!-- Phase 02: The Grilling (y=200) -->
      <rect x="40" y="200" width="400" height="148" :fill="c.cardBg" :stroke="c.cardStroke" stroke-width="0.5"/>
      <rect x="40" y="200" width="400" height="2.5" fill="url(#pf-gl)"/>
      <circle cx="55" cy="222" r="5" :fill="c.dot" opacity="0.9"/>
      <text x="70" y="227" font-size="12" :fill="c.numText" font-weight="700" letter-spacing="0.1em">02</text>
      <text x="52" y="255" font-size="16" :fill="c.titleText" font-weight="700" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif">The Grilling</text>
      <text x="52" y="280" font-size="11" :fill="c.skillText">gangsta:</text>
      <text x="52" y="293" font-size="11" :fill="c.skillText">:the-grilling</text>
      <line x1="50" y1="316" x2="430" y2="316" :stroke="c.divider" stroke-width="1"/>
      <text x="52" y="327" font-size="9" :fill="c.gateLabel" letter-spacing="0.12em">GATE</text>
      <text x="52" y="343" font-size="14" :fill="c.gateValue" font-weight="600" letter-spacing="0.04em">Consensus</text>
      <line x1="240" y1="351" x2="240" y2="377" :stroke="c.arrowLine" stroke-width="1.5" marker-end="url(#pf-arr)"/>

      <!-- Phase 03: The Sit-Down (y=380) -->
      <rect x="40" y="380" width="400" height="148" :fill="c.cardBg" :stroke="c.cardStroke" stroke-width="0.5"/>
      <rect x="40" y="380" width="400" height="2.5" fill="url(#pf-gl)"/>
      <circle cx="55" cy="402" r="5" :fill="c.dot" opacity="0.9"/>
      <text x="70" y="407" font-size="12" :fill="c.numText" font-weight="700" letter-spacing="0.1em">03</text>
      <text x="52" y="435" font-size="16" :fill="c.titleText" font-weight="700" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif">The Sit-Down</text>
      <text x="52" y="460" font-size="11" :fill="c.skillText">gangsta:</text>
      <text x="52" y="473" font-size="11" :fill="c.skillText">:the-sit-down</text>
      <line x1="50" y1="496" x2="430" y2="496" :stroke="c.divider" stroke-width="1"/>
      <text x="52" y="507" font-size="9" :fill="c.gateLabel" letter-spacing="0.12em">GATE</text>
      <text x="52" y="523" font-size="14" :fill="c.gateValue" font-weight="600" letter-spacing="0.04em">Contract</text>
      <line x1="240" y1="531" x2="240" y2="557" :stroke="c.arrowLine" stroke-width="1.5" marker-end="url(#pf-arr)"/>

      <!-- Phase 04: Resource Development (y=560) -->
      <rect x="40" y="560" width="400" height="148" :fill="c.cardBg" :stroke="c.cardStroke" stroke-width="0.5"/>
      <rect x="40" y="560" width="400" height="2.5" fill="url(#pf-gl)"/>
      <circle cx="55" cy="582" r="5" :fill="c.dot" opacity="0.9"/>
      <text x="70" y="587" font-size="12" :fill="c.numText" font-weight="700" letter-spacing="0.1em">04</text>
      <text x="52" y="608" font-size="16" :fill="c.titleText" font-weight="700" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif">Resource</text>
      <text x="52" y="626" font-size="16" :fill="c.titleText" font-weight="700" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif">Development</text>
      <text x="52" y="648" font-size="11" :fill="c.skillText">gangsta:</text>
      <text x="52" y="661" font-size="11" :fill="c.skillText">:resource-dev</text>
      <line x1="50" y1="676" x2="430" y2="676" :stroke="c.divider" stroke-width="1"/>
      <text x="52" y="687" font-size="9" :fill="c.gateLabel" letter-spacing="0.12em">GATE</text>
      <text x="52" y="703" font-size="14" :fill="c.gateValue" font-weight="600" letter-spacing="0.04em">Exec. Plan</text>
      <line x1="240" y1="711" x2="240" y2="737" :stroke="c.arrowLine" stroke-width="1.5" marker-end="url(#pf-arr)"/>

      <!-- Phase 05: Execution (y=740) -->
      <rect x="40" y="740" width="400" height="148" :fill="c.cardBg" :stroke="c.cardStroke" stroke-width="0.5"/>
      <rect x="40" y="740" width="400" height="2.5" fill="url(#pf-gl)"/>
      <circle cx="55" cy="762" r="5" :fill="c.dot" opacity="0.9"/>
      <text x="70" y="767" font-size="12" :fill="c.numText" font-weight="700" letter-spacing="0.1em">05</text>
      <text x="52" y="795" font-size="16" :fill="c.titleText" font-weight="700" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif">Execution</text>
      <text x="52" y="820" font-size="11" :fill="c.skillText">gangsta:</text>
      <text x="52" y="833" font-size="11" :fill="c.skillText">:the-hit</text>
      <line x1="50" y1="856" x2="430" y2="856" :stroke="c.divider" stroke-width="1"/>
      <text x="52" y="867" font-size="9" :fill="c.gateLabel" letter-spacing="0.12em">GATE</text>
      <text x="52" y="883" font-size="14" :fill="c.gateValue" font-weight="600" letter-spacing="0.04em">Completion</text>
      <line x1="240" y1="891" x2="240" y2="917" :stroke="c.arrowLine" stroke-width="1.5" marker-end="url(#pf-arr)"/>

      <!-- Phase 06: The Delivery (y=920) -->
      <rect x="40" y="920" width="400" height="148" :fill="c.cardBg" :stroke="c.cardStroke" stroke-width="0.5"/>
      <rect x="40" y="920" width="400" height="2.5" fill="url(#pf-gl)"/>
      <circle cx="55" cy="942" r="5" :fill="c.dot" opacity="0.9"/>
      <text x="70" y="947" font-size="12" :fill="c.numText" font-weight="700" letter-spacing="0.1em">06</text>
      <text x="52" y="975" font-size="16" :fill="c.titleText" font-weight="700" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif">The Delivery</text>
      <text x="52" y="1000" font-size="11" :fill="c.skillText">gangsta:</text>
      <text x="52" y="1013" font-size="11" :fill="c.skillText">:laundering</text>
      <line x1="50" y1="1036" x2="430" y2="1036" :stroke="c.divider" stroke-width="1"/>
      <text x="52" y="1047" font-size="9" :fill="c.gateLabel" letter-spacing="0.12em">GATE</text>
      <text x="52" y="1063" font-size="14" :fill="c.gateValue" font-weight="600" letter-spacing="0.04em">Ledger</text>
    </svg>

    <!-- ── HORIZONTAL (default, all other pages) ── -->
    <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 200" width="100%" style="display:block;max-width:100%">
      <defs>
        <linearGradient id="pf-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" :stop-color="c.bg1"/>
          <stop offset="100%" :stop-color="c.bg2"/>
        </linearGradient>
        <linearGradient id="pf-gl" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"   :stop-color="c.glowStart" stop-opacity="0"/>
          <stop offset="30%"  :stop-color="c.glowStart" stop-opacity="0.9"/>
          <stop offset="50%"  :stop-color="c.glowMid" stop-opacity="1"/>
          <stop offset="70%"  :stop-color="c.glowStart" stop-opacity="0.9"/>
          <stop offset="100%" :stop-color="c.glowStart" stop-opacity="0"/>
        </linearGradient>
        <marker id="pf-arr" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" :fill="c.arrow"/>
        </marker>
      </defs>

      <!-- Background -->
      <rect width="960" height="200" fill="url(#pf-bg)"/>

      <!-- Phase 01: Reconnaissance -->
      <rect x="42" y="18" width="126" height="164" :fill="c.cardBg" :stroke="c.cardStroke" stroke-width="0.5"/>
      <rect x="42" y="18" width="126" height="2" fill="url(#pf-gl)"/>
      <circle cx="53" cy="33" r="3.5" :fill="c.dot" opacity="0.9"/>
      <text x="62" y="37" font-size="9" :fill="c.numText" font-weight="700" letter-spacing="0.1em">01</text>
      <text x="52" y="61" font-size="12" :fill="c.titleText" font-weight="700" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif">Reconnaissance</text>
      <text x="52" y="81" font-size="8.5" :fill="c.skillText">gangsta:</text>
      <text x="52" y="92" font-size="8.5" :fill="c.skillText">:reconnaissance</text>
      <line x1="50" y1="148" x2="160" y2="148" :stroke="c.divider" stroke-width="1"/>
      <text x="52" y="158" font-size="7" :fill="c.gateLabel" letter-spacing="0.12em">GATE</text>
      <text x="52" y="171" font-size="11" :fill="c.gateValue" font-weight="600" letter-spacing="0.04em">Dossier</text>
      <line x1="169" y1="100" x2="191" y2="100" :stroke="c.arrowLine" stroke-width="1.5" marker-end="url(#pf-arr)"/>

      <!-- Phase 02: The Grilling -->
      <rect x="192" y="18" width="126" height="164" :fill="c.cardBg" :stroke="c.cardStroke" stroke-width="0.5"/>
      <rect x="192" y="18" width="126" height="2" fill="url(#pf-gl)"/>
      <circle cx="203" cy="33" r="3.5" :fill="c.dot" opacity="0.9"/>
      <text x="212" y="37" font-size="9" :fill="c.numText" font-weight="700" letter-spacing="0.1em">02</text>
      <text x="202" y="61" font-size="12" :fill="c.titleText" font-weight="700" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif">The Grilling</text>
      <text x="202" y="81" font-size="8.5" :fill="c.skillText">gangsta:</text>
      <text x="202" y="92" font-size="8.5" :fill="c.skillText">:the-grilling</text>
      <line x1="200" y1="148" x2="310" y2="148" :stroke="c.divider" stroke-width="1"/>
      <text x="202" y="158" font-size="7" :fill="c.gateLabel" letter-spacing="0.12em">GATE</text>
      <text x="202" y="171" font-size="11" :fill="c.gateValue" font-weight="600" letter-spacing="0.04em">Consensus</text>
      <line x1="319" y1="100" x2="341" y2="100" :stroke="c.arrowLine" stroke-width="1.5" marker-end="url(#pf-arr)"/>

      <!-- Phase 03: The Sit-Down -->
      <rect x="342" y="18" width="126" height="164" :fill="c.cardBg" :stroke="c.cardStroke" stroke-width="0.5"/>
      <rect x="342" y="18" width="126" height="2" fill="url(#pf-gl)"/>
      <circle cx="353" cy="33" r="3.5" :fill="c.dot" opacity="0.9"/>
      <text x="362" y="37" font-size="9" :fill="c.numText" font-weight="700" letter-spacing="0.1em">03</text>
      <text x="352" y="61" font-size="12" :fill="c.titleText" font-weight="700" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif">The Sit-Down</text>
      <text x="352" y="81" font-size="8.5" :fill="c.skillText">gangsta:</text>
      <text x="352" y="92" font-size="8.5" :fill="c.skillText">:the-sit-down</text>
      <line x1="350" y1="148" x2="460" y2="148" :stroke="c.divider" stroke-width="1"/>
      <text x="352" y="158" font-size="7" :fill="c.gateLabel" letter-spacing="0.12em">GATE</text>
      <text x="352" y="171" font-size="11" :fill="c.gateValue" font-weight="600" letter-spacing="0.04em">Contract</text>
      <line x1="469" y1="100" x2="491" y2="100" :stroke="c.arrowLine" stroke-width="1.5" marker-end="url(#pf-arr)"/>

      <!-- Phase 04: Resource Development -->
      <rect x="492" y="18" width="126" height="164" :fill="c.cardBg" :stroke="c.cardStroke" stroke-width="0.5"/>
      <rect x="492" y="18" width="126" height="2" fill="url(#pf-gl)"/>
      <circle cx="503" cy="33" r="3.5" :fill="c.dot" opacity="0.9"/>
      <text x="512" y="37" font-size="9" :fill="c.numText" font-weight="700" letter-spacing="0.1em">04</text>
      <text x="502" y="58" font-size="12" :fill="c.titleText" font-weight="700" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif">Resource</text>
      <text x="502" y="72" font-size="12" :fill="c.titleText" font-weight="700" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif">Development</text>
      <text x="502" y="92" font-size="8.5" :fill="c.skillText">gangsta:</text>
      <text x="502" y="103" font-size="8.5" :fill="c.skillText">:resource-dev</text>
      <line x1="500" y1="148" x2="610" y2="148" :stroke="c.divider" stroke-width="1"/>
      <text x="502" y="158" font-size="7" :fill="c.gateLabel" letter-spacing="0.12em">GATE</text>
      <text x="502" y="171" font-size="11" :fill="c.gateValue" font-weight="600" letter-spacing="0.04em">Exec. Plan</text>
      <line x1="619" y1="100" x2="641" y2="100" :stroke="c.arrowLine" stroke-width="1.5" marker-end="url(#pf-arr)"/>

      <!-- Phase 05: Execution -->
      <rect x="642" y="18" width="126" height="164" :fill="c.cardBg" :stroke="c.cardStroke" stroke-width="0.5"/>
      <rect x="642" y="18" width="126" height="2" fill="url(#pf-gl)"/>
      <circle cx="653" cy="33" r="3.5" :fill="c.dot" opacity="0.9"/>
      <text x="662" y="37" font-size="9" :fill="c.numText" font-weight="700" letter-spacing="0.1em">05</text>
      <text x="652" y="61" font-size="12" :fill="c.titleText" font-weight="700" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif">Execution</text>
      <text x="652" y="81" font-size="8.5" :fill="c.skillText">gangsta:</text>
      <text x="652" y="92" font-size="8.5" :fill="c.skillText">:the-hit</text>
      <line x1="650" y1="148" x2="760" y2="148" :stroke="c.divider" stroke-width="1"/>
      <text x="652" y="158" font-size="7" :fill="c.gateLabel" letter-spacing="0.12em">GATE</text>
      <text x="652" y="171" font-size="11" :fill="c.gateValue" font-weight="600" letter-spacing="0.04em">Completion</text>
      <line x1="769" y1="100" x2="791" y2="100" :stroke="c.arrowLine" stroke-width="1.5" marker-end="url(#pf-arr)"/>

      <!-- Phase 06: The Delivery -->
      <rect x="792" y="18" width="126" height="164" :fill="c.cardBg" :stroke="c.cardStroke" stroke-width="0.5"/>
      <rect x="792" y="18" width="126" height="2" fill="url(#pf-gl)"/>
      <circle cx="803" cy="33" r="3.5" :fill="c.dot" opacity="0.9"/>
      <text x="812" y="37" font-size="9" :fill="c.numText" font-weight="700" letter-spacing="0.1em">06</text>
      <text x="802" y="61" font-size="12" :fill="c.titleText" font-weight="700" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif">The Delivery</text>
      <text x="802" y="81" font-size="8.5" :fill="c.skillText">gangsta:</text>
      <text x="802" y="92" font-size="8.5" :fill="c.skillText">:laundering</text>
      <line x1="800" y1="148" x2="910" y2="148" :stroke="c.divider" stroke-width="1"/>
      <text x="802" y="158" font-size="7" :fill="c.gateLabel" letter-spacing="0.12em">GATE</text>
      <text x="802" y="171" font-size="11" :fill="c.gateValue" font-weight="600" letter-spacing="0.04em">Ledger</text>
    </svg>

  </div>
</template>

<style scoped>
.pipeline-flow {
  width: 100%;
  margin: 2.5rem 0;
  border-radius: 4px;
  overflow: hidden;
}
.pipeline-flow svg text {
  font-family: "SF Mono", "Fira Code", Menlo, "Courier New", monospace;
}
</style>
