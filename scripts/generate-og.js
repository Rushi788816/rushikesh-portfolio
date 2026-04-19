const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const outputPath = path.join(__dirname, '..', 'public', 'og-preview.png');

// 1200x630 OG image with dark gradient background + text
const width = 1200;
const height = 630;

const svg = `
<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#060818;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#0d1224;stop-opacity:1" />
    </linearGradient>
    <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#6366f1;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#8b5cf6;stop-opacity:1" />
    </linearGradient>
    <linearGradient id="accent2" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#06b6d4;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#3b82f6;stop-opacity:1" />
    </linearGradient>
    <filter id="blur1">
      <feGaussianBlur stdDeviation="80" />
    </filter>
    <filter id="blur2">
      <feGaussianBlur stdDeviation="60" />
    </filter>
  </defs>

  <!-- Background -->
  <rect width="${width}" height="${height}" fill="url(#bg)" />

  <!-- Ambient blobs -->
  <circle cx="200" cy="150" r="250" fill="#6366f1" fill-opacity="0.08" filter="url(#blur1)" />
  <circle cx="1000" cy="500" r="200" fill="#8b5cf6" fill-opacity="0.07" filter="url(#blur2)" />
  <circle cx="900" cy="100" r="180" fill="#06b6d4" fill-opacity="0.06" filter="url(#blur2)" />

  <!-- Top accent bar -->
  <rect x="80" y="80" width="120" height="5" rx="3" fill="url(#accent)" />

  <!-- Name -->
  <text x="80" y="230" font-family="Inter, Arial, sans-serif" font-size="72" font-weight="800" fill="#f0f6fc" letter-spacing="-2">Rushikesh Sonar</text>

  <!-- Title with gradient-like color -->
  <text x="80" y="300" font-family="Inter, Arial, sans-serif" font-size="34" font-weight="600" fill="#818cf8">Full Stack Developer</text>

  <!-- Divider line -->
  <rect x="80" y="340" width="600" height="2" rx="1" fill="rgba(255,255,255,0.08)" />

  <!-- Tagline -->
  <text x="80" y="390" font-family="Inter, Arial, sans-serif" font-size="22" fill="#94a3b8">React.js · Laravel · Node.js · 2+ Years Experience</text>

  <!-- Stats row -->
  <rect x="80" y="430" width="160" height="80" rx="12" fill="rgba(99,102,241,0.12)" stroke="rgba(99,102,241,0.25)" stroke-width="1" />
  <text x="160" y="467" font-family="Inter, Arial, sans-serif" font-size="28" font-weight="800" fill="#f0f6fc" text-anchor="middle">2+</text>
  <text x="160" y="492" font-family="Inter, Arial, sans-serif" font-size="13" fill="#94a3b8" text-anchor="middle">Years Exp</text>

  <rect x="260" y="430" width="160" height="80" rx="12" fill="rgba(6,182,212,0.10)" stroke="rgba(6,182,212,0.22)" stroke-width="1" />
  <text x="340" y="467" font-family="Inter, Arial, sans-serif" font-size="28" font-weight="800" fill="#f0f6fc" text-anchor="middle">22+</text>
  <text x="340" y="492" font-family="Inter, Arial, sans-serif" font-size="13" fill="#94a3b8" text-anchor="middle">APIs Built</text>

  <rect x="440" y="430" width="160" height="80" rx="12" fill="rgba(16,185,129,0.10)" stroke="rgba(16,185,129,0.20)" stroke-width="1" />
  <text x="520" y="467" font-family="Inter, Arial, sans-serif" font-size="28" font-weight="800" fill="#f0f6fc" text-anchor="middle">3</text>
  <text x="520" y="492" font-family="Inter, Arial, sans-serif" font-size="13" fill="#94a3b8" text-anchor="middle">Projects</text>

  <!-- Right side decorative element -->
  <rect x="900" y="200" width="220" height="220" rx="24" fill="rgba(99,102,241,0.06)" stroke="rgba(99,102,241,0.15)" stroke-width="1" />
  <text x="1010" y="300" font-family="Inter, Arial, sans-serif" font-size="60" text-anchor="middle" fill="#6366f1" fill-opacity="0.6">&lt;/&gt;</text>
  <text x="1010" y="360" font-family="Inter, Arial, sans-serif" font-size="15" fill="#818cf8" text-anchor="middle" fill-opacity="0.8">Portfolio</text>

  <!-- Bottom accent bar -->
  <rect x="80" y="570" width="80" height="4" rx="2" fill="url(#accent2)" />
  <text x="175" y="575" font-family="Inter, Arial, sans-serif" font-size="16" fill="#94a3b8">Open to opportunities · Pune, India</text>
</svg>
`;

sharp(Buffer.from(svg))
  .png({ quality: 90, compressionLevel: 9 })
  .toFile(outputPath)
  .then(info => {
    console.log('og-preview.png generated:', info);
  })
  .catch(err => {
    console.error('Error generating og-preview.png:', err);
    process.exit(1);
  });
