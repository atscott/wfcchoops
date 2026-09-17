# AI Agent Instructions for wfcchoops

## File Locations & Formats
- **Static Documents (PDFs, etc):** Must be placed in `src/assets/docs/`. Files placed in the root directory will be ignored by the Angular build and will result in 404s in production.
- **Static Images:** Must be placed in `src/assets/img/`.
- **URL Formatting:** Use raw spaces in the `href` attributes for links (e.g., `href="/assets/docs/My File.pdf"`) to match the existing project conventions. Do not explicitly URL-encode spaces with `%20` in the HTML templates.
- **Link Paths:** Always prefix asset links with a leading slash to ensure they resolve correctly from any route (e.g., `/assets/docs/file.pdf` instead of `assets/docs/file.pdf`).

## Pre-Computation & Verification
- When updating links to static assets, ALWAYS verify the asset actually exists in the expected `src/assets/...` directory before completing the request.
- If a user uploads a file, verify its location using file exploration tools; do not assume the UI placed it in the correct nested directory.

## Content Updates & Historical Consistency
- **PDF Synchronization:** When a new PDF brochure or flyer is provided, the HTML template content MUST be updated to accurately reflect the information within the PDF (e.g., new dates, times, locations, and deadlines).
- **Match Previous Years:** Ensure that content updates match the format and styling of previous years. Generally, the same programs run every year with only dates, times, and fees changing. Do not redesign the page structure or alter the historical formatting unless explicitly asked.