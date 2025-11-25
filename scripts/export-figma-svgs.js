const fs = require('fs');
const path = require('path');

// Default colors for Figma (easily identifiable placeholders)
const COLORS = {
  skin: '#F9C9B6',
  hair: '#171921',
  shirt: '#9287FF',
  shirtLight: '#B8B2FF',  // Lighter version of shirt color
  hat: '#506AF4',
  earrings: '#FFD700',
  subColor: '#717376'
};

// Component directories to process
const COMPONENT_DIRS = [
  'face',
  'hair',
  'hat',
  'ear',
  'eyebrow',
  'eyes',
  'glasses',
  'nose',
  'mouth',
  'shirt',
  'earrings'
];

// Files to skip (index files, etc.) - except for face which only has index.tsx
const SKIP_FILES = ['index.tsx'];

// Special case: components that only have index.tsx
const INDEX_ONLY_COMPONENTS = ['face'];

function extractSvgFromFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');

  // Find SVG content between <svg and </svg>
  const svgMatch = content.match(/<svg[\s\S]*?<\/svg>/);
  if (!svgMatch) return null;

  let svg = svgMatch[0];

  // Remove React style objects and convert to standard attributes
  // Remove style={{ ... }} blocks entirely for positioning
  svg = svg.replace(/style=\{\{[\s\S]*?\}\}/g, '');

  // Replace {color} or {color || "..."} with placeholder colors
  svg = svg.replace(/\{color\s*\|\|\s*["']([^"']+)["']\}/g, '"$1"');
  svg = svg.replace(/\{color\}/g, `"${COLORS.skin}"`);
  svg = svg.replace(/\{mainColor\}/g, `"${COLORS.hair}"`);
  svg = svg.replace(/\{subColor\}/g, `"${COLORS.subColor}"`);
  svg = svg.replace(/\{lightColor\}/g, `"${COLORS.shirtLight}"`);

  // Convert React camelCase attributes to SVG kebab-case
  svg = svg.replace(/strokeWidth/g, 'stroke-width');
  svg = svg.replace(/strokeLinecap/g, 'stroke-linecap');
  svg = svg.replace(/strokeLinejoin/g, 'stroke-linejoin');
  svg = svg.replace(/fillRule/g, 'fill-rule');
  svg = svg.replace(/clipRule/g, 'clip-rule');
  svg = svg.replace(/clipPath/g, 'clip-path');
  svg = svg.replace(/maskUnits/g, 'maskUnits'); // SVG uses camelCase for this one
  svg = svg.replace(/fillOpacity/g, 'fill-opacity');
  svg = svg.replace(/strokeOpacity/g, 'stroke-opacity');

  // Replace template literals for IDs and URLs
  svg = svg.replace(/\{`url\(#\$\{(\w+)\}\)`\}/g, '"url(#$1)"');
  svg = svg.replace(/id=\{(\w+)\}/g, 'id="$1"');

  // Fix mask urls without quotes
  svg = svg.replace(/mask=url\(#(\w+)\)/g, 'mask="url(#$1)"');

  // Fix clipPath element (don't convert to clip-path for element names)
  svg = svg.replace(/<clip-path/g, '<clipPath');
  svg = svg.replace(/<\/clip-path>/g, '</clipPath>');

  // Fix mask style
  svg = svg.replace(/style=\{\{\s*maskType:\s*["']alpha["']\s*\}\}/g, 'style="mask-type:alpha"');

  // Clean up any remaining JSX expressions
  svg = svg.replace(/\{\/\*[\s\S]*?\*\/\}/g, ''); // Remove JSX comments

  // Add XML declaration
  svg = '<?xml version="1.0" encoding="UTF-8"?>\n' + svg;

  return svg;
}

function getComponentName(filePath) {
  const dir = path.basename(path.dirname(filePath));
  const file = path.basename(filePath, '.tsx');
  return `${dir}-${file}`;
}

function exportSvgs() {
  const srcDir = path.join(__dirname, '..', 'src');
  const exportDir = path.join(__dirname, '..', 'figma-export');

  // Create subdirectories
  COMPONENT_DIRS.forEach(dir => {
    const subDir = path.join(exportDir, dir);
    if (!fs.existsSync(subDir)) {
      fs.mkdirSync(subDir, { recursive: true });
    }
  });

  let exportedCount = 0;
  const exportedFiles = [];

  COMPONENT_DIRS.forEach(dir => {
    const componentDir = path.join(srcDir, dir);
    if (!fs.existsSync(componentDir)) return;

    let files;
    if (INDEX_ONLY_COMPONENTS.includes(dir)) {
      // For components with only index.tsx, include it
      files = fs.readdirSync(componentDir).filter(f => f === 'index.tsx');
    } else {
      files = fs.readdirSync(componentDir).filter(f =>
        f.endsWith('.tsx') && !SKIP_FILES.includes(f)
      );
    }

    files.forEach(file => {
      const filePath = path.join(componentDir, file);
      const svg = extractSvgFromFile(filePath);

      if (svg) {
        // For index.tsx files, use the directory name as the file name
        const outputName = file === 'index.tsx'
          ? `${dir}.svg`
          : file.replace('.tsx', '.svg');
        const outputPath = path.join(exportDir, dir, outputName);
        fs.writeFileSync(outputPath, svg);
        exportedCount++;
        exportedFiles.push(`${dir}/${outputName}`);
        console.log(`✓ Exported: ${dir}/${outputName}`);
      }
    });
  });

  // Create manifest file
  const manifest = {
    exportDate: new Date().toISOString(),
    totalFiles: exportedCount,
    defaultColors: COLORS,
    files: exportedFiles,
    figmaInstructions: {
      step1: "Import all SVGs into Figma",
      step2: "Create a component for each SVG",
      step3: "Group components by category (hair, hat, eyes, etc.)",
      step4: "Create component variants for each style",
      step5: "Set up color variables to match defaultColors",
      step6: "Create main Avatar component combining all parts"
    },
    colorMapping: {
      "#F9C9B6": "Skin tone (replace with skin color variants)",
      "#171921": "Hair color (replace with hair color variants)",
      "#9287FF": "Shirt color (replace with shirt color variants)",
      "#506AF4": "Hat color (replace with hat color variants)",
      "#FFD700": "Earrings color (gold - replace with metal variants)",
      "#717376": "Sub/highlight color for hair"
    }
  };

  fs.writeFileSync(
    path.join(exportDir, 'manifest.json'),
    JSON.stringify(manifest, null, 2)
  );

  console.log(`\n✅ Exported ${exportedCount} SVG files to figma-export/`);
  console.log('📄 Created manifest.json with Figma instructions');
}

exportSvgs();
