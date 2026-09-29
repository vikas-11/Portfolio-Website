# Portfolio v3 — Requested Changes Completed

## 1. Separate pages
Completed. The site now has independent HTML entry points for Home, About, Skills, Experience, Projects, Certifications and Contact.

## 2. Python venv
React/Vite does not use a Python virtual environment. A Windows helper `setup-venv.ps1` is included so you can create `.venv` locally for future FastAPI/Python additions. `.venv` is intentionally gitignored and not packaged because virtual environments are operating-system specific.

## 3. Certification
Added: **Claude Certified Associate - Foundations**.

## 4. Skills
Replaced with the exact requested categories and technologies.

## 5. Theme customization
Added `src/theme.css`. Edit CSS variables there to change the complete theme. Existing violet/indigo button styling has been retained.

## 6. Animations
Added animated ambient blobs, page transitions, pointer glow, floating hero card, moving background grid, floating technology chips, scroll reveal animations, pulsing availability indicators, orbit animation, hover lift and card spotlight effects.

## Reliability improvement
Removed the `lucide-react` dependency entirely. Icons are now local React SVG components, preventing the earlier missing-export white-screen issue.
