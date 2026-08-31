# MacroCut

Mobile-first PWA for a 60-day high-protein, low-carb meal plan.

## Features
- 60-day meal calendar and meal completion tracking
- Daily protein/carbs/fat/calorie totals
- Weight logging with 7-entry moving-average trend
- Weekly grocery checklist
- Meal swap guidance
- iPhone Add to Home Screen support
- Offline caching
- Local-only storage with JSON export/import
- Light/dark/system themes

## Default target
170 g protein / 80 g carbs / 50 g fat = about 1,450 kcal.

## GitHub Pages
The workflow at `.github/workflows/pages.yml` deploys this static site. In **Settings → Pages**, set **Source** to **GitHub Actions** if needed.

Expected URL: `https://chitender.github.io/macrocut/`

## Local run
```bash
python3 -m http.server 8080
```
Open `http://localhost:8080`.

## Data
No backend. Progress and weights stay in browser localStorage. Use Settings → Export backup before clearing browser/site data.

MacroCut is a planning/tracking tool, not medical advice.
