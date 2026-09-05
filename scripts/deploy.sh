#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
REMOTE_URL="https://github.com/gemlarin/gemlarin.github.io.git"
BRANCH="master"

cd "$ROOT"

echo "Building..."
npm run build

if [[ ! -f dist/index.html ]]; then
  echo "Build failed: dist/index.html missing" >&2
  exit 1
fi

TMP="$(mktemp -d)"
cleanup() { rm -rf "$TMP"; }
trap cleanup EXIT

echo "Cloning ${REMOTE_URL}..."
git clone --depth 1 "${REMOTE_URL}" "${TMP}/site"
cd "${TMP}/site"

echo "Replacing site contents with dist/..."
find . -mindepth 1 -maxdepth 1 ! -name '.git' -exec rm -rf {} +
cp -R "${ROOT}/dist/." .

git add -A
if git diff --cached --quiet; then
  echo "No changes to deploy."
  exit 0
fi

git commit -m "Update portfolio site"
git push origin "HEAD:${BRANCH}"

echo "Deployed. Live at https://gemlarin.github.io/ (Pages may take a minute)."
