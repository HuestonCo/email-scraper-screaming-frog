[![Hueston Logo](https://hueston.co/wp-content/uploads/hueston-light-logo-80px.svg)](https://hueston.co)

# Email Extractor for Screaming Frog

A JavaScript custom extraction script for Screaming Frog SEO Spider to identify email addresses on siet scans. This is quicky and dirty and hope someone improves on it. 

## What it does

Crawls your website and finds all email addresses on each page, filtering out CSS/JavaScript false positives. Useful for:

- Privacy audits
- Email cleanup before going live
- Email harvesting - play nice 
- Impressing your friends and realitivies 

## Setup

1. Open Screaming Frog SEO Spider
2. Go to **Configuration** → **Custom** → **Extraction**
3. Click **Add** and create a new extraction
4. Set type to **JavaScript**
5. Copy and paste the code from `email-extractor.js`
6. Add one output column: **Emails**

## Usage

1. Run your crawl as normal
2. Check the **Custom Extraction** tab for results
3. Export to CSV/Excel for analysis

## Output

- `{Emails=No emails found}` - Clean pages
- `{Emails=contact@site.com}` - Single email found  
- `{Emails=info@site.com, support@site.com}` - Multiple emails found

## Features

- Filters out CSS `@media` and `@keyframes` 
- Removes JavaScript and style tag content
- Searches both HTML and visible text
- Deduplicates results
- Handles various email formats

## Credits
[Hueston Programagtic SEO Team](https://hueston.co)

