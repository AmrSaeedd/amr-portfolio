# Amr Saeed – Urban Planner, Landscape Designer & GIS Specialist Portfolio

A modern architectural portfolio website built for **Amr Saeed**, featuring his comprehensive body of work across urban planning, GIS geospatial analytics, landscape architecture, and architectural BIM design.

Inspired by the visual and communicative aesthetics of international masterplanning studios (Foster + Partners, Sasaki, SOM, BIG).

---

## 🌟 Featured Projects

1. **Alam El Roum – Data-Driven Adaptive Urban Planning**
   * *Graduation Project*: Machine-learning-driven environmental fragility classification (K-Means) and adaptive coastal zoning along the Mediterranean coast in Matrouh Governorate / Ras El Hekma sector.
2. **Sohag – Strategic Planning**
   * Regional urban development study formulating growth scenarios to preserve fertile agricultural lands along the Nile Valley while redirecting urban expansion into desert plateaus.
3. **Detailed Urban Planning**
   * Comprehensive district masterplan, parcel subdivision geometry, street right-of-way design, statutory planning regulations, and 3D axonometrics.
4. **Landscape Architecture – Nursery & Library**
   * Water-sensitive desert public realm park centered around an expansive lagoon, sunken reading gardens, open-air amphitheater, botanical greenhouse nursery, and hand-rendered watercolor plans.
5. **Jeddah – Wadi Flood Management**
   * Environmental GIS analysis utilizing high-resolution Digital Elevation Models (DEM) to map flash flood hazard zones and propose resilient nature-based drainage corridors.
6. **West Qena**
   * Fourth-Generation smart desert new city master plan utilizing green wind-channeling corridors and decentralized neighborhood service hubs.
7. **Vocational School**
   * Campus architectural design separating noisy industrial workshops from academic lecture halls around a passive-cooling central courtyard. Full technical drawings and presentation boards.
8. **Villa Workshop**
   * Modern luxury residential villa modeled parametrically within an Autodesk Revit BIM workflow, featuring cantilevered geometry and outdoor pool living.

---

## 🛠️ Technology Stack

* **HTML5**: Semantic, accessible markup.
* **Vanilla JavaScript (ES Modules)**: Component logic, dynamic project card rendering, interactive multi-category filtering, modal viewer, and full-resolution lightbox.
* **Tailwind CSS**: Custom architectural design system (deep navy palette `#071628`, warm architectural gold `#c9a84c`, clean typography).
* **Vite**: Ultra-fast build tool with multi-page HTML bundling (`index.html` + 8 individual project detail pages).
* **GitHub Pages Ready**: Configured with relative base path (`base: './'`) for deployment on any repository subpath.

---

## 📁 Project Structure

```text
amr-portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml            # GitHub Actions automatic Pages deployment
├── public/
│   ├── Amr_Saeed_Portfolio.pdf   # Complete original portfolio PDF
│   └── images/
│       ├── hero/                 # High-resolution hero cover images
│       ├── about/                # Profile and portrait assets
│       └── projects/             # Categorized high-res project drawings & boards
│           ├── alam-el-roum/
│           ├── sohag/
│           ├── detailed/
│           ├── landscape/
│           ├── jeddah/
│           ├── west-qena/
│           ├── school/
│           └── villa/
├── projects/                     # Dedicated individual project detail pages
│   ├── alam-el-roum.html
│   ├── sohag.html
│   ├── detailed-urban-planning.html
│   ├── landscape-architecture.html
│   ├── jeddah-flood-management.html
│   ├── west-qena.html
│   ├── vocational-school.html
│   └── villa-workshop.html
├── src/
│   ├── main.js                   # Homepage interactive logic & modal
│   ├── project-page.js           # Project detail pages interactive logic & lightbox
│   ├── projects-data.js          # Structured project data & image registry
│   └── style.css                 # Tailwind directives & architectural styling
├── index.html                    # Homepage (Hero, About, Projects, Skills, Contact)
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── README.md
```

---

## 🚀 Local Development

1. **Clone or navigate to the repository directory**:
   ```bash
   cd amr-portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the Vite development server**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```
   The optimized production bundle will be generated in `./dist`.

5. **Preview the production build locally**:
   ```bash
   npm run preview
   ```

---

## 🌐 Deploying to GitHub Pages

### Method 1: Automatic Deployment with GitHub Actions (Recommended)

1. Push this repository to your GitHub account:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Amr Saeed architectural portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
2. On GitHub, go to your repository **Settings** → **Pages**.
3. Under **Build and deployment** → **Source**, select **GitHub Actions**.
4. The included workflow `.github/workflows/deploy.yml` will automatically build the site and deploy the `./dist` directory on every push to `main`!

### Method 2: Manual / Branch Deployment

1. Run `npm run build`.
2. Push the contents of the `dist` directory to the `gh-pages` branch.

---

## 📄 License & Credits

All project drawings, master plans, 3D renderings, and presentation boards are the original intellectual property of **Amr Saeed**.
© 2026 Amr Saeed. All rights reserved.
