# BugHunter Reports

- [2026-10-16 — Astro theme storage failure blocks widget initialization](reports/2026-10-16-astro-theme-storage.md) — confirmed defect; issue [#4](https://github.com/qrati-labs/qrati-connect-astro-example/issues/4), PR pending.
# BugHunter audit reports
| Date (UTC) | Workflow | Outcome | Report |
|---|---|---|---|
| 2026-10-19 | Astro example static asset routing | No confirmed defect; report-only; 00:02:13 total (2026-10-19T09:52:39Z–09:54:52Z; 15:22:39–15:24:52 IST) | [Audit report](reports/20261019T095238Z-astro-static-asset-routing.md) |
| Date (UTC) | Workflow | Result | Report |
| 2026-10-20 | Astro crawler discovery | Report-only; no confirmed defect; total 00:05:51 (14:50:39–14:56:30 UTC; 20:20:39–20:26:30 IST) | [Audit report](reports/2026-10-20T14-50Z-astro-crawler-discovery.md) |
# BugHunter reports
| 2026-10-18 | Astro example FAQ disclosures | No confirmed defect; source-level review only | [20261018T220738Z-astro-faq-disclosures.md](reports/20261018T220738Z-astro-faq-disclosures.md) |
# BugHunter audits
| 2026-10-21 | Astro favicon and touch-icon URL construction | Report-only; no confirmed defect; total 00:01:57 (06:47:39–06:49:36 UTC; 12:17:39–12:19:36 IST) | [Audit report](reports/2026-10-21T06-47Z-astro-favicon.md) |
# BugHunter audit index
| UTC timestamp | Workflow | Repositories / SHAs | Outcome / severity | Tests and coverage | Research sources | PR |
|---|---|---|---|---|---|---|
| 2026-10-15T20:33Z | Astro geo-aware cookie consent + GTM startup | `qrati-connect-astro-example` @ `24e0cc5050b5a737ba4472dd9691353ed8e948c1`; contract inspected read-only in `qrati-web` | Fixed globally granted GTM default before geo decision (medium) | 1 unit regression test passed; Astro build passed with existing CSS warning; coverage not measured | Google Tag Platform consent guide [1] | [#3](https://github.com/qrati-labs/qrati-connect-astro-example/pull/3) open, mergeable; at head `071b840db243b4f0b77c372192fc6ab1c91d4213` GitGuardian Security Checks were pending (20:36 UTC) |
