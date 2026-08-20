# Autonomous Backlog Engine V1 — Candidate Manifest

Branch: `feature/autonomous-backlog-engine-v1`
Build lane: `Strategic-Minds/SANDBOX`
Canonical promotion target: `Strategic-Minds/AUTO_BUILDER`
CloudBrowser validation target: `XTREME-SYSTEMS/cloudbrowser-control`
Economic objective: **MAXIMIZE VERIFIED PROFITABLE BACKLOG GENERATED PER CUSTOMER**

## Candidate archive
- Path: `artifacts/autonomous-backlog-engine-v1.zip`
- SHA-256: `8dca948ab2efe6adbf4e4af0f7d6ed1d16775f8ee3fce1ccb1e3b6623b0fe898`
- Contents: executable Node core, tests, proposed Supabase migration, work-packet schema, architecture, discovery and rollback receipts, promotion handoff.

## Validation
- Node test suite: 12/12 PASS on the minimized archive contents.
- Syntax: `node --check src/core.mjs` PASS.
- The larger local development package also passed 16/16 tests before minimization.

## Implemented contracts
1. Opportunity expected-gross-profit and value scoring.
2. Economic attribution for verified backlog and realized gross profit.
3. Protected-action approval gate.
4. Five-minute heartbeat contract with hourly 55-minute idempotent lease.
5. Incident hold and resumable crash state.
6. Champion/challenger scoring and blocking-regression rejection.
7. Bounded recursive-improvement cycle.
8. CloudBrowser dry-run validation contract.
9. Proposed tenant-isolated Supabase/RLS schema.
10. Promotion and rollback receipts.

## Not executed
- No production deployment.
- No Supabase migration execution.
- No secret changes.
- No customer messages.
- No bid submission.
- No payment/spend.
- No CloudBrowser production mutation.

## Current promotion blockers
1. Standalone GitHub connector cannot resolve `Strategic-Minds/AUTO_BUILDER` even though live AUTO_BUILDER_2 reports it as canonical source.
2. AUTO_BUILDER_2 GitHub provider dry-run falls back to manual-receipt mode; provider adapter must be enabled before autonomous promotion.
3. Exact Vercel project for canonical AUTO_BUILDER could not be verified through the current Vercel connection.
4. Live Supabase target/schema for this new subsystem is intentionally unselected and migration remains proposal-only.

## First commercial wedge
Architecture remains cross-trade. Pilot recommendation is specialty concrete / epoxy / polished concrete contractors, where domain access can shorten validation of scope, pricing, and bid/outcome feedback. This is an inference to validate with customer evidence, not a permanent product limitation.
