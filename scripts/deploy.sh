#!/usr/bin/env bash
set -euo pipefail

REPO="lukayucci/joaquin-portfolio"
NAME="Joaquín Pereira"
EMAIL="joaquinpereirahernan@gmail.com"
URL="https://lukayucci.github.io/joaquin-portfolio/"

npm run build

cd dist
rm -rf .git
git init -q -b gh-pages
git config user.name "$NAME"
git config user.email "$EMAIL"
git add -A
git commit -q -m "Deploy $(date -u +%Y-%m-%dT%H:%MZ)"
TOKEN="$(gh auth token)"
git push -f -q "https://x-access-token:${TOKEN}@github.com/${REPO}.git" gh-pages

echo "Publicado: ${URL}"
