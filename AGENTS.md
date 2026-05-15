# AGENTS.md: Portfolio Protocol

This document defines how AI agents (like Antigravity, GitHub Spark, Cursor) should interact with this codebase.

## 1. Project Context
- **Path:** `E:\Projects\Deneme\portfolio-site`
- **Goal:** Personal portfolio of an elite Design Engineer.
- **Tech Stack:** Vanilla HTML/CSS/JS (No frameworks, pure performance).

## 2. Design Contract
- You MUST read `DESIGN.md` before making any visual or structural changes.
- **Token Strictness:** Do NOT introduce new HEX codes or random RGB values into `style.css`. Always use the predefined `--tokens` in the `:root` block. If a new color/size is needed, define it as a token first.
- **Vibe:** "Sacred Drift". Every change should feel intentional, rhythmic, and premium.

## 3. Editing Rules
- **CSS:** Keep the A1/A2/B-Slot token architecture intact.
- **JS:** Keep DOM manipulation minimal and performant. Use event delegation for the masonry grid and lightbox.
- **HTML:** Maintain semantic tags and accessibility (ARIA labels on interactive elements).

## 4. Skills & Craft
- Agents should leverage `.agents/skills` if available in the parent directory (`E:\Projects\Deneme\.agents\skills`).
- Apply `typography-hierarchy` rules to any new text elements.
