# Roadmap-tracker

Quarter-wise roadmap tracker for FY 2026-27 with project, subtask, status, priority, due date, notes, and progress tracking.

## Backend

The tracker stores shared roadmap data in Supabase through `/api/roadmap`.

Required hosting environment variables:

```text
SUPABASE_URL=
SUPABASE_SERVICE_ROLE_KEY=
ROADMAP_DOCUMENT_ID=fy-2026-27-kush-prakhar
ROADMAP_ADMIN_TOKEN=
```

Run `supabase-schema.sql` in Supabase before deploying.

## Deploy

Use either Netlify or Vercel. Full setup instructions are in `DEPLOY.md`.
