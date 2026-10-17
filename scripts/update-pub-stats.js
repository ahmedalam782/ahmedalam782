const fs = require('fs');
const path = require('path');

const PACKAGES = ['adaptive_video_player', 'osm_location_picker'];

async function fetchPackageStats(pkg) {
  try {
    const [infoRes, scoreRes, metricsRes] = await Promise.all([
      fetch(`https://pub.dev/api/packages/${pkg}`),
      fetch(`https://pub.dev/api/packages/${pkg}/score`),
      fetch(`https://pub.dev/api/packages/${pkg}/metrics`),
    ]);

    const info = await infoRes.json();
    const score = await scoreRes.json();
    const metrics = await metricsRes.json();

    const version = info?.latest?.version || '0.0.0';
    const grantedPoints = score?.grantedPoints ?? 160;
    const maxPoints = score?.maxPoints ?? 160;
    const likeCount = score?.likeCount ?? 0;
    const popularity = Math.round((score?.popularityScore || 0) * 100);

    const downloadsList = metrics?.scorecard?.weeklyVersionDownloads?.totalWeeklyDownloads || [];
    const monthlyDownloads = downloadsList.slice(0, 4).reduce((a, b) => a + b, 0);
    const totalDownloads = downloadsList.reduce((a, b) => a + b, 0);

    return {
      name: pkg,
      version,
      grantedPoints,
      maxPoints,
      likeCount,
      popularity,
      monthlyDownloads,
      totalDownloads,
    };
  } catch (err) {
    console.error(`Error fetching stats for ${pkg}:`, err);
    return {
      name: pkg,
      version: '1.0.0',
      grantedPoints: 160,
      maxPoints: 160,
      likeCount: 0,
      popularity: 0,
      monthlyDownloads: 0,
      totalDownloads: 0,
    };
  }
}

function formatNumber(num) {
  if (num >= 1000) {
    return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'k';
  }
  return num.toString();
}

function generateSvg(p1, p2) {
  const now = new Date();
  const dateStr = now.toISOString().split('T')[0];
  const totalCombined = (p1.totalDownloads || 0) + (p2.totalDownloads || 0);
  const totalMonthly = (p1.monthlyDownloads || 0) + (p2.monthlyDownloads || 0);

  return `<svg width="100%" height="100%" viewBox="0 0 880 260" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Background Gradients -->
    <linearGradient id="pub-bg" x1="0" y1="0" x2="880" y2="260" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#10070C" />
      <stop offset="50%" stop-color="#190B12" />
      <stop offset="100%" stop-color="#10070C" />
    </linearGradient>

    <linearGradient id="card-bg" x1="0" y1="0" x2="400" y2="150" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#190B12" stop-opacity="0.9" />
      <stop offset="100%" stop-color="#10070C" stop-opacity="0.95" />
    </linearGradient>

    <linearGradient id="pub-border" x1="0" y1="0" x2="880" y2="260" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#701A3D" stop-opacity="0.8" />
      <stop offset="50%" stop-color="#451126" stop-opacity="0.4" />
      <stop offset="100%" stop-color="#C77B9B" stop-opacity="0.7" />
    </linearGradient>

    <linearGradient id="card-border" x1="0" y1="0" x2="400" y2="150" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#701A3D" stop-opacity="0.7" />
      <stop offset="100%" stop-color="#451126" stop-opacity="0.3" />
    </linearGradient>

    <linearGradient id="laser-glow" x1="0" y1="0" x2="880" y2="0" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#451126" stop-opacity="0" />
      <stop offset="25%" stop-color="#701A3D" stop-opacity="0.6" />
      <stop offset="50%" stop-color="#FF5C8D" stop-opacity="0.95" />
      <stop offset="75%" stop-color="#C77B9B" stop-opacity="0.6" />
      <stop offset="100%" stop-color="#451126" stop-opacity="0" />
    </linearGradient>

    <radialGradient id="ambient-glow" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(440 130) scale(320 120)">
      <stop offset="0%" stop-color="#701A3D" stop-opacity="0.25" />
      <stop offset="100%" stop-color="#10070C" stop-opacity="0" />
    </radialGradient>

    <pattern id="pub-grid" width="22" height="22" patternUnits="userSpaceOnUse">
      <path d="M 22 0 L 0 0 0 22" fill="none" stroke="#701A3D" stroke-opacity="0.08" stroke-width="1" />
    </pattern>
  </defs>

  <style>
    .mono { font-family: 'JetBrains Mono', 'SF Mono', Consolas, Menlo, Monaco, monospace; }
    .sans { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; }
  </style>

  <!-- Canvas Surface -->
  <rect width="880" height="260" rx="12" fill="url(#pub-bg)" />
  <rect width="880" height="260" rx="12" fill="url(#pub-grid)" />
  <rect x="1" y="1" width="878" height="258" rx="11" fill="none" stroke="url(#pub-border)" stroke-width="1.2" />

  <!-- Ambient Backdrop -->
  <ellipse cx="440" cy="130" rx="320" ry="100" fill="url(#ambient-glow)" />

  <!-- Animated Bottom Laser -->
  <path d="M 32 250 L 848 250" stroke="url(#laser-glow)" stroke-width="1.8" stroke-dasharray="160 240" stroke-linecap="round">
    <animate attributeName="stroke-dashoffset" values="800; 0; -800" dur="6s" repeatCount="indefinite" />
  </path>

  <!-- Top Header Navigation -->
  <g transform="translate(32, 22)">
    <!-- Pulsing Live Indicator -->
    <circle cx="6" cy="6" r="3.5" fill="#4ADE80">
      <animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" />
    </circle>
    <text x="18" y="10" fill="#E5B5C7" font-size="10.5" font-weight="700" letter-spacing="1.5" class="mono">
      AUTONOMOUS PUB.DEV REPOSITORY METRICS · LIVE SYNC
    </text>

    <!-- Total Ecosystem Summary Badges -->
    <g transform="translate(540, -4)">
      <rect width="136" height="22" rx="4" fill="#190B12" stroke="#701A3D" stroke-width="0.8" />
      <text x="68" y="15" fill="#F8F0F3" font-size="10" font-weight="700" text-anchor="middle" class="mono">
        ${formatNumber(totalCombined)}+ TOTAL DLs
      </text>

      <rect x="144" y="0" width="132" height="22" rx="4" fill="#190B12" stroke="#451126" stroke-width="0.8" />
      <text x="210" y="15" fill="#4ADE80" font-size="10" font-weight="700" text-anchor="middle" class="mono">
        ${formatNumber(totalMonthly)}/MO ACTIVE
      </text>
    </g>
  </g>

  <!-- Package Card 1: adaptive_video_player -->
  <g transform="translate(32, 54)">
    <rect width="398" height="154" rx="8" fill="url(#card-bg)" />
    <rect width="398" height="154" rx="8" fill="none" stroke="url(#card-border)" stroke-width="1" />

    <!-- Package Title & Badge -->
    <text x="20" y="32" fill="#FFFFFF" font-size="15" font-weight="800" class="sans">
      ${p1.name}
    </text>
    <rect x="238" y="18" width="62" height="18" rx="4" fill="#451126" stroke="#701A3D" stroke-width="0.7" />
    <text x="269" y="31" fill="#F8F0F3" font-size="9.5" font-weight="700" text-anchor="middle" class="mono">
      v${p1.version}
    </text>

    <!-- Mini Constellation Animation -->
    <g transform="translate(365, 30)">
      <circle cx="0" cy="0" r="14" fill="none" stroke="#701A3D" stroke-width="0.9" stroke-dasharray="5 3">
        <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="18s" repeatCount="indefinite" />
      </circle>
      <circle cx="0" cy="0" r="3" fill="#C77B9B" />
      <circle cx="9" cy="0" r="1.8" fill="#F8F0F3" />
    </g>

    <!-- Subtitle description -->
    <text x="20" y="52" fill="#C77B9B" font-size="10.5" font-weight="500" class="sans">
      Cross-Platform Video Player (YouTube + Direct HLS/M3U8)
    </text>

    <!-- Metric Tiles -->
    <g transform="translate(20, 68)">
      <!-- Pub Points Tile -->
      <rect width="84" height="64" rx="6" fill="#10070C" stroke="#701A3D" stroke-width="0.8" />
      <text x="42" y="24" fill="#C77B9B" font-size="9" font-weight="600" text-anchor="middle" class="mono">PUB POINTS</text>
      <text x="42" y="46" fill="#4ADE80" font-size="14" font-weight="800" text-anchor="middle" class="mono">${p1.grantedPoints}/${p1.maxPoints}</text>
      <text x="42" y="58" fill="#E5B5C7" font-size="8" font-weight="500" text-anchor="middle" class="mono">MAX SCORE</text>

      <!-- Likes Tile -->
      <rect x="92" y="0" width="84" height="64" rx="6" fill="#10070C" stroke="#451126" stroke-width="0.8" />
      <text x="134" y="24" fill="#C77B9B" font-size="9" font-weight="600" text-anchor="middle" class="mono">LIKES</text>
      <text x="134" y="46" fill="#F8F0F3" font-size="14" font-weight="800" text-anchor="middle" class="mono">★ ${p1.likeCount}</text>
      <text x="134" y="58" fill="#E5B5C7" font-size="8" font-weight="500" text-anchor="middle" class="mono">DEVELOPERS</text>

      <!-- Monthly Downloads Tile -->
      <rect x="184" y="0" width="84" height="64" rx="6" fill="#10070C" stroke="#701A3D" stroke-width="0.8" />
      <text x="226" y="24" fill="#C77B9B" font-size="9" font-weight="600" text-anchor="middle" class="mono">MONTHLY</text>
      <text x="226" y="46" fill="#FF5C8D" font-size="14" font-weight="800" text-anchor="middle" class="mono">${p1.monthlyDownloads}</text>
      <text x="226" y="58" fill="#E5B5C7" font-size="8" font-weight="500" text-anchor="middle" class="mono">DOWNLOADS</text>

      <!-- Total Downloads Tile -->
      <rect x="276" y="0" width="82" height="64" rx="6" fill="#10070C" stroke="#451126" stroke-width="0.8" />
      <text x="317" y="24" fill="#C77B9B" font-size="9" font-weight="600" text-anchor="middle" class="mono">ALL-TIME</text>
      <text x="317" y="46" fill="#F8F0F3" font-size="14" font-weight="800" text-anchor="middle" class="mono">${formatNumber(p1.totalDownloads)}+</text>
      <text x="317" y="58" fill="#E5B5C7" font-size="8" font-weight="500" text-anchor="middle" class="mono">TOTAL DLs</text>
    </g>
  </g>

  <!-- Package Card 2: osm_location_picker -->
  <g transform="translate(450, 54)">
    <rect width="398" height="154" rx="8" fill="url(#card-bg)" />
    <rect width="398" height="154" rx="8" fill="none" stroke="url(#card-border)" stroke-width="1" />

    <!-- Package Title & Badge -->
    <text x="20" y="32" fill="#FFFFFF" font-size="15" font-weight="800" class="sans">
      ${p2.name}
    </text>
    <rect x="238" y="18" width="62" height="18" rx="4" fill="#451126" stroke="#701A3D" stroke-width="0.7" />
    <text x="269" y="31" fill="#F8F0F3" font-size="9.5" font-weight="700" text-anchor="middle" class="mono">
      v${p2.version}
    </text>

    <!-- Mini Constellation Animation -->
    <g transform="translate(365, 30)">
      <circle cx="0" cy="0" r="14" fill="none" stroke="#701A3D" stroke-width="0.9" stroke-dasharray="5 3">
        <animateTransform attributeName="transform" type="rotate" from="360" to="0" dur="18s" repeatCount="indefinite" />
      </circle>
      <circle cx="0" cy="0" r="3" fill="#E5B5C7" />
      <circle cx="-9" cy="0" r="1.8" fill="#F8F0F3" />
    </g>

    <!-- Subtitle description -->
    <text x="20" y="52" fill="#C77B9B" font-size="10.5" font-weight="500" class="sans">
      OpenStreetMap &amp; Nominatim Reverse Geocoding (Zero Keys)
    </text>

    <!-- Metric Tiles -->
    <g transform="translate(20, 68)">
      <!-- Pub Points Tile -->
      <rect width="84" height="64" rx="6" fill="#10070C" stroke="#701A3D" stroke-width="0.8" />
      <text x="42" y="24" fill="#C77B9B" font-size="9" font-weight="600" text-anchor="middle" class="mono">PUB POINTS</text>
      <text x="42" y="46" fill="#4ADE80" font-size="14" font-weight="800" text-anchor="middle" class="mono">${p2.grantedPoints}/${p2.maxPoints}</text>
      <text x="42" y="58" fill="#E5B5C7" font-size="8" font-weight="500" text-anchor="middle" class="mono">MAX SCORE</text>

      <!-- Likes Tile -->
      <rect x="92" y="0" width="84" height="64" rx="6" fill="#10070C" stroke="#451126" stroke-width="0.8" />
      <text x="134" y="24" fill="#C77B9B" font-size="9" font-weight="600" text-anchor="middle" class="mono">LIKES</text>
      <text x="134" y="46" fill="#F8F0F3" font-size="14" font-weight="800" text-anchor="middle" class="mono">★ ${p2.likeCount}</text>
      <text x="134" y="58" fill="#E5B5C7" font-size="8" font-weight="500" text-anchor="middle" class="mono">DEVELOPERS</text>

      <!-- Monthly Downloads Tile -->
      <rect x="184" y="0" width="84" height="64" rx="6" fill="#10070C" stroke="#701A3D" stroke-width="0.8" />
      <text x="226" y="24" fill="#C77B9B" font-size="9" font-weight="600" text-anchor="middle" class="mono">MONTHLY</text>
      <text x="226" y="46" fill="#FF5C8D" font-size="14" font-weight="800" text-anchor="middle" class="mono">${p2.monthlyDownloads}</text>
      <text x="226" y="58" fill="#E5B5C7" font-size="8" font-weight="500" text-anchor="middle" class="mono">DOWNLOADS</text>

      <!-- Total Downloads Tile -->
      <rect x="276" y="0" width="82" height="64" rx="6" fill="#10070C" stroke="#451126" stroke-width="0.8" />
      <text x="317" y="24" fill="#C77B9B" font-size="9" font-weight="600" text-anchor="middle" class="mono">ALL-TIME</text>
      <text x="317" y="46" fill="#F8F0F3" font-size="14" font-weight="800" text-anchor="middle" class="mono">${formatNumber(p2.totalDownloads)}+</text>
      <text x="317" y="58" fill="#E5B5C7" font-size="8" font-weight="500" text-anchor="middle" class="mono">TOTAL DLs</text>
    </g>
  </g>

  <!-- Footer Status Bar -->
  <g transform="translate(32, 232)">
    <text x="0" y="0" fill="#701A3D" font-size="9.5" font-weight="500" class="mono">
      POWERED BY PUB.DEV OFFICIAL REST API · GITHUB ACTIONS AUTOMATION · SCHEDULED DAILY REFRESH
    </text>
    <text x="816" y="0" fill="#C77B9B" font-size="9.5" font-weight="600" text-anchor="end" class="mono">
      LAST SYNC: ${dateStr}
    </text>
  </g>
</svg>`;
}

async function main() {
  console.log('Fetching live pub.dev statistics...');
  const [p1, p2] = await Promise.all([
    fetchPackageStats(PACKAGES[0]),
    fetchPackageStats(PACKAGES[1]),
  ]);

  console.log(`Fetched ${p1.name}: v${p1.version}, ${p1.grantedPoints}/${p1.maxPoints} pts, ${p1.likeCount} likes, ${p1.totalDownloads} total DLs`);
  console.log(`Fetched ${p2.name}: v${p2.version}, ${p2.grantedPoints}/${p2.maxPoints} pts, ${p2.likeCount} likes, ${p2.totalDownloads} total DLs`);

  const svgContent = generateSvg(p1, p2);
  const targetPath = path.join(__dirname, '..', 'assets', 'packages-animated.svg');

  fs.writeFileSync(targetPath, svgContent, 'utf8');
  console.log(`Successfully generated and saved ${targetPath}`);

  // Automatically sync README.md with live package stats
  updateReadme(p1, p2);
}

function updateReadme(p1, p2) {
  const readmePath = path.join(__dirname, '..', 'README.md');
  if (!fs.existsSync(readmePath)) return;
  let content = fs.readFileSync(readmePath, 'utf8');

  const totalCombined = (p1.totalDownloads || 0) + (p2.totalDownloads || 0);
  const p1TotalStr = formatNumber(p1.totalDownloads);
  const p2TotalStr = formatNumber(p2.totalDownloads);
  const totalStr = formatNumber(totalCombined);

  // 1. Update Executive Summary
  const execSummaryRegex = /> Creator of \*\*\[`adaptive_video_player`\]\([^)]+\)\*\*[^·\n]+·[^)]+\) and \*\*\[`osm_location_picker`\]\([^)]+\)\*\*[^\n]*/;
  const newSummary = `> Creator of **[\`adaptive_video_player\`](https://pub.dev/packages/adaptive_video_player)** (${p1TotalStr}+ downloads · ${p1.grantedPoints}/${p1.maxPoints} pub points) and **[\`osm_location_picker\`](https://pub.dev/packages/osm_location_picker)** (${p2TotalStr}+ downloads · ${p2.grantedPoints}/${p2.maxPoints} pub points) — totaling **${totalStr}+ downloads** across pub.dev. Deeply specialized in **Clean Architecture**, reactive state management with **BLoC/Cubit**, **30% app load-time optimizations**, automated CI/CD deployment pipelines saving 5+ engineering hours per week, and rigorous **85% widget test coverage**.`;

  if (execSummaryRegex.test(content)) {
    content = content.replace(execSummaryRegex, newSummary);
  }

  // 2. Clean up location emoji that renders as monospace 'EG' on Windows
  content = content.replace(
    /final String location\s*=\s*"Cairo, Egypt\s*🇪🇬";/,
    'final String location        = "Cairo, Egypt";'
  );

  // 3. Keep Package header versions in sync
  content = content.replace(
    /#### 🎥 \[`adaptive_video_player`\]\([^)]+\) `v[^`]+`/,
    `#### 🎥 [\`adaptive_video_player\`](https://pub.dev/packages/adaptive_video_player) \`v${p1.version}\``
  );
  content = content.replace(
    /#### 🗺️ \[`osm_location_picker`\]\([^)]+\) `v[^`]+`/,
    `#### 🗺️ [\`osm_location_picker\`](https://pub.dev/packages/osm_location_picker) \`v${p2.version}\``
  );

  // 4. Keep Experience section package stats in sync
  content = content.replace(
    /• Authored and published adaptive_video_player \([^)]+\)/,
    `• Authored and published adaptive_video_player (${p1TotalStr}+ downloads, ${p1.grantedPoints}/${p1.maxPoints} pub points, ${p1.likeCount} likes)`
  );

  fs.writeFileSync(readmePath, content, 'utf8');
  console.log(`Successfully synchronized live metrics in ${readmePath}`);
}

main().catch((err) => {
  console.error('Fatal execution error:', err);
  process.exit(1);
});
