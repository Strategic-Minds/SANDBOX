# Eden Content Factory Lane Activation Packet

Date: 2026-05-30
Repository: Strategic-Minds/SANDBOX
Branch: eden/content-factory-lane-packet
Source: Supabase queue job 7879487a-ea90-4404-a96b-3f040f19485c
Lane: eden-skye-autonomous-build-and-content-lane

## Objective

Prepare the first real Eden Skye content-factory work packet for governed autonomous execution after the sandbox autonomy proof. This packet is intentionally limited to approval-ready creative and operating outputs. It does not authorize production deployment, live store mutation, payment changes, public posting, or database schema changes.

## Current Job Summary

Queued job: eden-content-factory-lane

Runtime object type: content_factory_lane

Runtime object id: eden-content-factory

Connector: autobuilder

Cadence: review every 5-minute Auto Builder loop; generate approval-ready content work, not live publishing.

Objective: turn Eden Skye brand ideas into scripts, captions, content packages, landing-page drafts, visual briefs, and approval-ready publishing assets.

## Allowed Actions

- content_strategy
- campaign_briefs
- caption_batches
- script_batches
- visual_briefs
- landing_page_drafts
- shopify_offer_drafts
- validation_receipts

## Blocked Actions

- production_deploys
- shopify_writes
- stripe_actions
- supabase_schema_changes
- vercel_env_changes
- external_publishing

## Risk Classification

Level: Medium-low.

The payload is structurally safe because it is draft-only and contains explicit blocked actions. The recurring 5-minute cadence still needs governance because repeated execution can create operational drift if receipts, queue state, and approval boundaries are not enforced.

## Activation Conditions

Before this queued job is allowed to run beyond planning:

1. A sandbox packet PR must be opened and validated.
2. The packet must produce a passing receipt validation check.
3. A receipt must document that no Supabase write, Vercel deployment, Shopify mutation, Stripe action, public publishing, or external notification occurred during packet preparation.
4. Any later queue-state change, runtime activation, or receipt insert in Supabase requires explicit approval.
5. Any later promotion into Vercel production requires explicit approval.

## First Runtime Output Target

When approved, the first runtime pass should produce only draft materials:

- one Eden Skye campaign brief
- one caption batch
- one short-form video script batch
- one visual brief pack
- one Shopify offer draft
- one validation receipt

These outputs should stay in reviewable draft form until separately approved for publishing, store mutation, or deployment.

## Validation Checklist

- Controlled branch created in SANDBOX.
- Build packet added with source job id and payload constraints.
- Receipt file added for validator coverage.
- GitHub Actions receipt validator passes.
- No Supabase write performed during this packet.
- No Vercel deployment triggered during this packet.
- No Shopify mutation performed during this packet.
- No public publishing performed during this packet.

## Promotion Boundary

This packet can be merged into SANDBOX after validation. Merging this packet does not activate Supabase writes, Vercel deployment, Shopify mutation, public publishing, or payment actions.
