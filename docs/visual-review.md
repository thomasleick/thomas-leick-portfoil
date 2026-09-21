# Visual review record

Date: 2026-09-21
Status: local rendered review complete for the required viewport matrix; production deployment was not inspected.

## Preserved

- Graphite/violet/lime editorial identity, existing portrait treatment, oversized display type, monospace metadata and spacious vertical rhythm.
- Existing static React/Vite architecture, native CSS/SVG, native dialogs and the site’s privacy-conscious static delivery.
- The English positioning hero and the conceptual “Complexity deserves an interface.” principle.

## Adjusted

- Added three data-driven case studies with role, challenge, decisions and evidence boundaries.
- Added compact domain, product/research and governance/evaluation diagrams, each with an explicit semantic caption.
- Replaced stack ellipsis behavior with natural wrapping; at four viewport widths in both locales, all stack labels fit without horizontal overflow.
- Raised the metadata contrast token and contact label color. Browser spot checks measured the sampled small text above 4.5:1.
- Added responsive EN/PT navigation and localized the same sections rather than duplicating their JSX structure.

## Rendered checks

The local production preview was inspected at 1440×900, 1280×800, 768×1024 and 390×844 in English and Portuguese. No document-level horizontal overflow or broken portrait was observed. On narrower widths the desktop menu gives way to the native mobile dialog. The Portuguese hero, cases, diagrams and stack labels fit the viewport.

Rendered inspection caught and corrected a case-grid rule that had kept the two-column layout at 390px. Cases now stack below 600px and return to two columns from tablet widths; a follow-up mobile screenshot confirmed the full-width text and diagram composition.

Mobile anchor navigation moved focus to the target section heading. The language switch preserved the selected `#work` anchor. Ctrl+K, result arrow navigation, Escape focus restoration and the skip link were exercised. Reduced-motion mode was emulated.

Detailed evidence and remaining performance limits are recorded in [browser-qa-report.md](browser-qa-report.md). Lighthouse and production Web Vitals were not run.
