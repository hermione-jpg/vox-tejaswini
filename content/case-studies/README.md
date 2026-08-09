# Case Studies — Add Your Own

This directory holds MDX files for case studies. Each `.mdx` file automatically appears on the `/case-study` listing page and has its own dedicated page.

## How to Add a Case Study

### 1. Create a new MDX file

Create a file named `your-case-study-title.mdx` in this directory. The filename becomes the URL slug.

**Example:** `learning-curve-design.mdx` → `/case-study/learning-curve-design`

### 2. Add frontmatter

Every MDX file must start with YAML frontmatter:

```mdx
---
title: Your Case Study Title
description: A 1-2 sentence summary that appears on the listing card
image: /images/case-study-thumbnail.jpg
---
```

- `title` (required): Display name on listing and detail page
- `description` (required): Shows on listing card to help users pick which case study to read
- `image` (optional): Thumbnail on listing card. Aspect ratio should be 16:9

### 3. Write your content

Use standard Markdown below the frontmatter:

```mdx
## Section Heading

Regular paragraph text here.

### Subheading

- Bullet point one
- Bullet point two

> A pull quote or key insight

[Links work](https://example.com) and so do **bold** and *italic*.
```

### 4. That's it!

Save the file and it will automatically:
- Appear on the case studies listing page
- Get its own dedicated route
- Render with proper typography and spacing

## Filename Tips

- Use lowercase with hyphens: `voice-personality-design.mdx` ✓
- No spaces or special characters: `voice personality.mdx` ✗
- Keep it concise but descriptive
- Consider SEO—this becomes part of the URL

## Styling

The case study pages have built-in styles for:
- Headings (h2, h3)
- Paragraphs
- Lists (ul, ol)
- Blockquotes
- Images

Just write normal Markdown—styling is automatic.

## Example Structure

```mdx
---
title: Case Study Title
description: Short summary
image: /images/thumbnail.jpg
---

## The Challenge

Introduce the problem and context.

## The Approach

Explain your methodology and thinking.

### Key Findings

- Finding one
- Finding two
- Finding three

## Results

Summarize the outcomes and impact.
```

## Scaling to 24 Studies

To add 9-24 case studies:

1. Create one `.mdx` file per case study
2. Follow the frontmatter format exactly
3. No database or config changes needed
4. Deploy to Vercel—it picks up all files automatically

The listing page will automatically display all `.mdx` files in this directory, sorted by filename. No hardcoded lists to maintain.
