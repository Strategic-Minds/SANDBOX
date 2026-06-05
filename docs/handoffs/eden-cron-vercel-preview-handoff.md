# Eden Skye Cron + Vercel Preview Handoff

Date: 2026-06-05
Mode: sandbox preview
Owner: Eden Skye / Auto Builder

## Objective

Install the remaining governed automation layer for the Eden Skye media factory so the system can run on a timer, generate readiness receipts, and trigger a Vercel preview without touching production.

## Installed Assets

- `.github/workflows/eden-media-preview-cron.yml`
  - Runs by manual dispatch.
  - Runs daily at `10:00 UTC`, which is `6:00 AM America/New_York` during EDT.
  - Runs a lightweight heartbeat every six hours.
  - Creates a JSON readiness receipt.
  - Triggers a Vercel preview deploy hook only when `VERCEL_PREVIEW_DEPLOY_HOOK_URL` is configured.
  - Uploads the receipt as a GitHub Actions artifact.

- `factory/cron/eden-media-preview-router.json`
  - Defines routing for GPT/OpenAI image creation, HeyGen video creation, Google Drive workflow records, and Vercel preview.
  - Preserves approval gates for production deploy, Shopify mutations, public publishing, payment/discount changes, and HeyGen video generation.

## Drive Sources

- Master Media Router: https://docs.google.com/spreadsheets/d/12PaW83ldj_vvQ0OoKYtbHzbGzzf-w0tSoFSu-YAWKX4/edit?usp=drivesdk
- GPT Image Queue: https://docs.google.com/spreadsheets/d/1B_P1mi-wxxKzpsMB4X14gi2hQdjssFUBPstCYxU6R18/edit?usp=drivesdk
- Image Library Workflow: https://docs.google.com/spreadsheets/d/1XUZzOsCHbz6JEftYJy2RKiM3QizVn_TIJ915hQeV-q0/edit?usp=drivesdk
- Drive Workflow Bridge: https://docs.google.com/spreadsheets/d/1R-nLyThF1lYXvntL7tlopyjwjBWw4lRaJGaKic8TGiI/edit?usp=drivesdk
- 5-Day Content Plant: https://docs.google.com/spreadsheets/d/1eMdKjlJZwWcsInvSJO_yhypqjd2Gw5ZfEYmmSg3wkoA/edit?usp=drivesdk

## Required Secret For Preview Trigger

Add this repository secret in the SANDBOX repo if preview auto-triggering should run:

- `VERCEL_PREVIEW_DEPLOY_HOOK_URL`

The workflow is receipt-only until that secret exists. This is intentional. It keeps the timer active without pretending the Vercel integration is ready.

## Approval Gates

Do not automate these without Jeremy's explicit approval:

- Production deploy
- Shopify product, collection, inventory, discount, or checkout mutations
- Public publishing to social channels
- Payment, pricing, subscription, or discount changes
- HeyGen video generation or spend

## Operating Notes

- Cron is a trigger, not the worker. The worker should read the Drive queue, create scoped build packets, and write receipts.
- GPT/OpenAI is the default still-image provider because the user requested cheaper image creation.
- HeyGen is the default video provider because the account already has Eden Skye avatar inventory.
- Google Drive remains the workflow source of record.
- Vercel is preview-only here; production promotion is a separate approval event.

## Next Safe Steps

1. Configure `VERCEL_PREVIEW_DEPLOY_HOOK_URL` in SANDBOX repository secrets.
2. Manually dispatch `Eden Media Factory Preview Cron` once with `force_preview_hook=true` after the secret is present.
3. Confirm the GitHub Actions artifact receipt appears.
4. Confirm the Vercel preview URL is generated.
5. Only after review, decide whether to promote the same workflow pattern into AUTO_BUILDER or FRONTEND.
