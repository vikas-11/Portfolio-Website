# Vikas Yadav — Interactive Developer Portfolio

A modern multi-page portfolio built with **React + Vite** and designed for GitHub Pages.

## Pages

- Home
- About
- Skills
- Experience
- Projects
- Certifications
- Contact

Each page is a real HTML entry point (`about.html`, `skills.html`, etc.), so navigation works naturally on GitHub Pages without server-side routing.

## Highlights

- Responsive multi-page architecture
- Dark / light mode with saved preference
- Theme variables isolated in `src/theme.css`
- Animated hero, floating technology chips and ambient background
- Page-enter transitions
- Scroll reveal animations
- Animated orbit visual
- Pointer-following ambient glow
- Interactive project filters
- Responsive mobile navigation
- Resume download
- GitHub / LinkedIn / email actions
- GitHub Pages deployment workflow

## Skills represented

- Mobile Development: Flutter, Dart
- Backend: PHP, Python, FastAPI
- API Development: REST APIs, JSON, Swagger/OpenAPI
- Databases: MySQL, PostgreSQL
- Frontend: React.js, HTML5, CSS3, Material UI
- Tools & DevOps: Git, GitHub, Docker, Postman
- Core Concepts: OOP, CRUD Operations, API Integration, Exception Handling, Debugging

## Run locally

```powershell
npm install
npm run dev
```

Open the URL printed by Vite, normally `http://localhost:5173/`.

## Production build

```powershell
npm run build
npm run preview
```

## Optional Python virtual environment

The portfolio itself does **not** require Python. A Python virtual environment only makes sense if you later add FastAPI or Python utilities.

A helper script is included:

```powershell
.\setup-venv.ps1
```

It creates `.venv` on your own Windows machine. The generated environment is intentionally excluded from Git because virtual environments are machine-specific.

## Change the theme manually

Open:

```text
src/theme.css
```

The top section contains all major colors:

```css
--bg
--surface
--text
--muted
--accent
--accent-2
--button-bg
--button-hover
```

Change those variables and the whole portfolio updates. The current button theme has been preserved.

## GitHub Pages

A workflow is already included in:

```text
.github/workflows/deploy.yml
```

After pushing to GitHub:

1. Open repository **Settings**.
2. Open **Pages**.
3. Under Build and deployment, choose **GitHub Actions**.
4. Push to `main`.
5. The workflow builds and publishes the `dist` folder automatically.

## Important assets

- Resume: `public/assets/resume/Vikas_Yadav_Resume.pdf`
- Profile images: `public/assets/img/`
- Certificates: `public/assets/certificates/`

Replace the resume PDF with your latest copy before publishing.
