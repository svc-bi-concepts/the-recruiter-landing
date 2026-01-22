# the recruiter - Landing Page

Landing page for the-recruiter.ch, a BI Concepts trademark.

## Features

- **Bilingual Support**: German (DE) and English (EN)
- **Modern Design**: Clean black/white minimalist theme with rounded shapes
- **Responsive**: Fully responsive design for all devices
- **Performance**: Optimized for fast loading

## Setup for GitHub Pages

### 1. Create GitHub Repository

1. Go to [GitHub](https://github.com/svc-bi-concepts)
2. Create a new repository (e.g., `the-recruiter-landing` or `TR_LandingPage`)
3. Do NOT initialize with README, .gitignore, or license

### 2. Push to GitHub

```bash
# Add remote (replace YOUR_USERNAME and REPO_NAME)
git remote add origin https://github.com/svc-bi-concepts/YOUR_REPO_NAME.git

# Rename branch to main (GitHub Pages uses main by default)
git branch -M main

# Push to GitHub
git push -u origin main
```

### 3. Configure GitHub Pages

1. Go to repository Settings → Pages
2. Under "Source", select branch: `main` and folder: `/ (root)`
3. Click Save

### 4. Configure Custom Domain

1. In repository Settings → Pages
2. Under "Custom domain", enter: `www.the-recruiter.ch`
3. Click Save
4. GitHub will create/update the CNAME file automatically

### 5. DNS Configuration

Configure your DNS provider with these records:

```
Type: CNAME
Name: www
Value: svc-bi-concepts.github.io
```

Or if using A records:

```
Type: A
Name: www
Value: 185.199.108.153
Value: 185.199.109.153
Value: 185.199.110.153
Value: 185.199.111.153
```

## Local Development

### Prerequisites

- Node.js (v14 or higher)
- npm

### Installation

```bash
npm install
```

### Development

Watch for CSS changes:

```bash
npm run dev
```

### Build

Build production CSS:

```bash
npm run build
```

## Project Structure

```
.
├── index.html          # Main landing page
├── CNAME              # Custom domain configuration
├── _config.yml        # GitHub Pages configuration
├── css/               # Stylesheets
│   ├── input.css      # Tailwind input
│   ├── tailwind.css   # Compiled Tailwind CSS
│   └── styles.css     # Custom styles
├── images/            # Images and assets
└── package.json       # Node.js dependencies
```

## Content Updates

The page uses a translation system with `data-t` attributes. To update content:

1. Edit the `translations` object in `index.html`
2. Add or modify keys for both `de` and `en` languages
3. Use the `data-t` attribute in HTML elements to reference translation keys

## License

PROPRIETARY - BI Concepts
