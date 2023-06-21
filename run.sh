#!/bin/bash
actions_dir="$(pwd)"
presentation_dir="$1"
presentation_file="$2"
pdf_output_file="$3"
video_output_file="$4"

cd /app/
npm run serve -- "$actions_dir/$presentation_dir" &
npm run cypress:run -- -b chrome -e PRESENTATION_URL="http://localhost:3000/$presentation_file"
convert "/app/cypress/screenshots/impress.cy.js/*.png" -quality 100 "$actions_dir/$pdf_output_file"
cp "/app/cypress/videos/impress.cy.js.mp4" "$actions_dir/$video_output_file"
