# Experiments

Experiments are explorations of emerging patterns, edge cases, and novel approaches in voice AI design. Unlike Case Studies (which document completed, proven solutions), Experiments are open investigations into questions that don't yet have clear answers.

## Structure

Each experiment is a `.mdx` file following this frontmatter:

```yaml
---
title: [Experiment Name]
description: [One-sentence summary of what's being explored]
image: /images/experiments/[thumbnail].jpg
order: [number for display order]
---
```

## Content Approach

Experiments follow the VOX methodology but remain **exploratory**:

1. **Problem or Question** - What prompted this investigation?
2. **Context** - Why does this matter for voice AI design?
3. **Scope** - What specifically are we testing or exploring?
4. **Variables** - What factors are we examining?
5. **Findings** - Preliminary observations (may be incomplete)
6. **Next Steps** - What's the next phase of exploration?

## Key Differences from Case Studies

| Case Study | Experiment |
|---|---|
| Proven patterns | Emerging questions |
| Completed analysis | Ongoing investigation |
| Clear conclusions | Preliminary findings |
| Design recommendations | Design hypotheses |
| Resolved solutions | Unsolved problems |

## Filing Convention

Use kebab-case with descriptive names:
- `Multi-modal-interruption-handling.mdx`
- `Silence-as-semantics.mdx`
- `Conversational-repair-strategies.mdx`

## Frontmatter Fields

- **title**: Clear, actionable name (avoid "Exploring..." in the title itself)
- **description**: One sentence that answers "what is this experiment investigating?"
- **image**: Thumbnail image at `/public/images/experiments/[name].jpg`
- **order**: Numeric order for display (1, 2, 3...)

## Template

See existing experiment files for the recommended structure. All experiments should:
- Explain why this matters for voice design
- Be honest about limitations and unknowns
- Link to related case studies or fundamentals where applicable
- Avoid definitive conclusions (use "suggests," "indicates," "preliminary")
- End with next steps or open questions

## Images

Experiment images should be:
- At least 600x400px
- Located in `/public/images/experiments/`
- Named consistently with the MDX filename (kebab-case)
