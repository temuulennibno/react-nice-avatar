# Figma Avatar Component Guide

This guide explains how to set up the avatar system in Figma using the exported SVGs.

## Exported Files Structure

```
figma-export/
├── face/
│   └── face.svg
├── hair/
│   ├── normal.svg
│   ├── thick.svg
│   ├── mohawk.svg
│   ├── womanLong.svg
│   ├── womanShort.svg
│   ├── curly.svg
│   ├── afro.svg
│   ├── pixie.svg
│   ├── buzz.svg
│   ├── braids.svg
│   └── longCurly.svg
├── hat/
│   ├── beanie.svg
│   ├── cap.svg
│   ├── cowboy.svg
│   ├── headband.svg
│   ├── hijab.svg
│   └── fedora.svg
├── ear/
│   ├── small.svg
│   └── big.svg
├── eyebrow/
│   ├── up.svg
│   ├── upWoman.svg
│   ├── flat.svg
│   └── angry.svg
├── eyes/
│   ├── circle.svg
│   ├── oval.svg
│   ├── smile.svg
│   ├── shadow.svg
│   └── wink.svg
├── glasses/
│   ├── round.svg
│   ├── square.svg
│   ├── aviator.svg
│   └── cyber.svg
├── nose/
│   ├── short.svg
│   ├── long.svg
│   ├── round.svg
│   ├── pointed.svg
│   └── button.svg
├── mouth/
│   ├── laugh.svg
│   ├── smile.svg
│   ├── peace.svg
│   ├── open.svg
│   ├── serious.svg
│   └── smirk.svg
├── shirt/
│   ├── hoody.svg
│   ├── short.svg
│   ├── polo.svg
│   ├── vneck.svg
│   └── crew.svg
└── earrings/
    ├── stud.svg
    ├── hoop.svg
    └── drop.svg
```

## Color Variables

Set up these color variables in Figma:

### Skin Tones
| Name | Hex | Description |
|------|-----|-------------|
| skin-light | #FFDBB4 | Light skin |
| skin-fair | #F9C9B6 | Fair skin (default) |
| skin-medium | #EDB98A | Medium skin |
| skin-tan | #D4A574 | Tan skin |
| skin-brown | #C68642 | Brown skin |
| skin-dark-brown | #8D5524 | Dark brown skin |
| skin-dark | #AC6651 | Dark skin |

### Hair Colors
| Name | Hex | Description |
|------|-----|-------------|
| hair-black | #000000 | Black |
| hair-dark | #171921 | Dark (default) |
| hair-dark-brown | #2C1810 | Dark brown |
| hair-brown | #77311D | Brown |
| hair-auburn | #8B4513 | Auburn |
| hair-blonde | #D4AF37 | Blonde |
| hair-light-blonde | #E6BE8A | Light blonde |
| hair-gray | #4A4A4A | Gray |
| hair-white | #FFFFFF | White |
| hair-pink | #FC909F | Pink (fashion) |
| hair-blue | #506AF4 | Blue (fashion) |
| hair-orange | #F48150 | Orange (fashion) |
| hair-teal | #D2EFF3 | Teal (fashion) |

### Shirt Colors
| Name | Hex | Description |
|------|-----|-------------|
| shirt-purple | #9287FF | Purple (default) |
| shirt-teal | #6BD9E9 | Teal |
| shirt-pink | #FC909F | Pink |
| shirt-yellow | #F4D150 | Yellow |
| shirt-brown | #77311D | Brown |
| shirt-gray | #E8E8E8 | Gray |
| shirt-navy | #2C3E50 | Navy |
| shirt-green | #27AE60 | Green |

### Hat Colors
Same as hair colors.

### Background Colors
| Name | Hex | Description |
|------|-----|-------------|
| bg-purple | #9287FF | Purple |
| bg-teal | #6BD9E9 | Teal |
| bg-pink | #FC909F | Pink |
| bg-yellow | #F4D150 | Yellow |
| bg-lavender | #E0DDFF | Lavender |
| bg-mint | #98D8C8 | Mint |
| And more... | | |

### Earring Colors
| Name | Hex | Description |
|------|-----|-------------|
| earring-gold | #FFD700 | Gold |
| earring-silver | #C0C0C0 | Silver |
| earring-platinum | #E8E8E8 | Platinum |
| earring-copper | #B87333 | Copper |
| earring-blue | #1E90FF | Blue |
| earring-pink | #FF69B4 | Pink |

---

## Step-by-Step Figma Setup

### Step 1: Import SVGs

1. Create a new Figma file
2. Create a page called "Components"
3. Drag and drop all SVG files into Figma
4. Organize by category into frames

### Step 2: Create Base Components

For each SVG:
1. Select the imported SVG
2. Right-click → "Create component" (Ctrl/Cmd + Alt + K)
3. Rename using format: `category/style` (e.g., `hair/normal`)

### Step 3: Create Component Sets (Variants)

Group related components into variant sets:

**Hair Component:**
```
Property: style
Values: normal, thick, mohawk, womanLong, womanShort, curly, afro, pixie, buzz, braids, longCurly, bald
```

**Hat Component:**
```
Property: style
Values: none, beanie, cap, cowboy, headband, hijab, fedora
```

**Eyes Component:**
```
Property: style
Values: circle, oval, smile, shadow, wink
```

**Glasses Component:**
```
Property: style
Values: none, round, square, aviator, cyber
```

**Nose Component:**
```
Property: style
Values: short, long, round, pointed, button
```

**Mouth Component:**
```
Property: style
Values: laugh, smile, peace, open, serious, smirk
```

**Shirt Component:**
```
Property: style
Values: hoody, short, polo, vneck, crew
```

**Ear Component:**
```
Property: size
Values: small, big
```

**Eyebrow Component:**
```
Property: style
Values: up, upWoman, flat, angry
```

**Earrings Component:**
```
Property: style
Values: none, stud, hoop, drop
```

### Step 4: Apply Color Variables

1. Select paths that should be skin-colored
2. Apply skin color variable to fill
3. Repeat for hair, shirt, hat, earrings

### Step 5: Create Master Avatar Component

1. Create a new frame (380x380px recommended)
2. Set background to a color variable
3. Layer components in this order (bottom to top):
   - Background
   - Shirt
   - Face
   - Ear
   - Hair OR Hat (use boolean to toggle)
   - Eyebrow
   - Eyes
   - Glasses
   - Nose
   - Mouth
   - Earrings

4. Create component properties:
   - `hairStyle` (instance swap)
   - `hatStyle` (instance swap)
   - `showHat` (boolean - hides hair when true)
   - `eyeStyle` (instance swap)
   - `glassesStyle` (instance swap)
   - `noseStyle` (instance swap)
   - `mouthStyle` (instance swap)
   - `shirtStyle` (instance swap)
   - `earSize` (instance swap)
   - `eyebrowStyle` (instance swap)
   - `earringsStyle` (instance swap)
   - `skinColor` (color variable)
   - `hairColor` (color variable)
   - `shirtColor` (color variable)
   - `bgColor` (color variable)

### Step 6: Positioning Guide

Original React component positions (relative to container):

| Component | Position | Size |
|-----------|----------|------|
| Face | bottom: 0, width: 100%, height: 90% | 200x320 |
| Hair (varies) | bottom: 20-40%, left: -1% | varies |
| Hat (varies) | bottom: varies | varies |
| Eyes | top: 30% + 7% | 96x48 |
| Eyebrow | above eyes | 82x20 |
| Glasses | over eyes | 96x34 |
| Nose | center, below eyes | 28x40 |
| Mouth | below nose | varies |
| Ear | sides of face | varies |
| Shirt | bottom | 220x100 |
| Earrings | sides, near ears | varies |

---

## Tips

1. **Use Auto Layout** for the main avatar to maintain proportions
2. **Create a "none" variant** for optional components (glasses, earrings)
3. **Use constraints** so components scale properly
4. **Test with different combinations** to ensure layering works

## React to Figma Property Mapping

| React Prop | Figma Property |
|------------|----------------|
| `hairStyle` | Hair component variant |
| `hatStyle` | Hat component variant |
| `eyeStyle` | Eyes component variant |
| `glassesStyle` | Glasses component variant |
| `noseStyle` | Nose component variant |
| `mouthStyle` | Mouth component variant |
| `shirtStyle` | Shirt component variant |
| `earSize` | Ear component variant |
| `eyeBrowStyle` | Eyebrow component variant |
| `earringsStyle` | Earrings component variant |
| `faceColor` | Skin color variable |
| `hairColor` | Hair color variable |
| `shirtColor` | Shirt color variable |
| `bgColor` | Background color variable |
| `hatColor` | Hat color variable |
| `earringsColor` | Earring color variable |
