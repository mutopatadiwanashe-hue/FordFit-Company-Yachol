# FordFit Company Yachol — Website Starter

A responsive Flask website with bright automotive styling, parallax sections, car motion, product gallery, CEO section, and a commercial video.

## Run in VS Code

1. Install Python 3.10+.
2. Open this folder in VS Code.
3. Create a virtual environment:
   `python -m venv .venv`
4. Activate it:
   - Windows PowerShell: `.venv\\Scripts\\Activate.ps1`
   - macOS/Linux: `source .venv/bin/activate`
5. Install dependencies:
   `pip install -r requirements.txt`
6. Run:
   `python app.py`
7. Open the local address shown by Flask (normally http://127.0.0.1:5000).

## GitHub

Create an empty GitHub repository, then from this folder:

    git init
    git add .
    git commit -m "Initial FordFit Company Yachol website"
    git branch -M main
    git remote add origin YOUR_GITHUB_REPOSITORY_URL
    git push -u origin main

Do not commit passwords, API keys, or other secrets.

## Important asset rule

`static/images/ceo-original.jpg` is the original CEO photograph supplied by the user. It is displayed as supplied and is not AI-edited.

The product images ending in `-original.jpg` are also supplied source photographs.

The car screenshot is preserved as `car-original-screenshot.jpg`; `car-original-crop.jpg` is only a crop removing the social-media interface around the photograph.

## Commercial

`static/videos/fordfit-commercial.mp4` is a generated motion-commercial draft made from the supplied images. Replace it later with a professionally shot commercial video if desired.

## Design notes (colour system)

Colours are defined as CSS variables at the top of `static/css/style.css`:
Workwear Navy `#0B1D36`, Hi-Vis Lime `#D3F23A`, Brick Copper `#C4552D`, Awning Moss `#1E5A3C`, Bone `#F5F0E6`.
The CEO photograph is shown at its natural ratio with no crop, filter or overlay (see `.ceo-figure` in the CSS).
