# Roadmap Tracker Deployment

This tracker now has a backend API and stores the shared roadmap document in Supabase.

## 1. Create Supabase Database

1. Create a Supabase project.
2. Open SQL Editor.
3. Run the SQL in `supabase-schema.sql`.
4. Go to Project Settings > API and copy:
   - Project URL
   - `service_role` key

The `service_role` key must only be saved as a hosting environment variable. Do not put it inside frontend JavaScript.

## 2. Environment Variables

Set these in Netlify or Vercel:

```text
SUPABASE_URL=https://your-project-ref.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
ROADMAP_DOCUMENT_ID=fy-2026-27-kush-prakhar
ROADMAP_ADMIN_TOKEN=choose-a-private-edit-passcode
```

`ROADMAP_ADMIN_TOKEN` is optional, but recommended. When set, the tracker asks for the passcode before saving edits.

## 3. Deploy On Netlify

1. Push this folder to GitHub.
2. In Netlify, choose Add new project > Import an existing project.
3. Select the GitHub repository.
4. Build settings:
   - Build command: leave empty
   - Publish directory: `.`
5. Add the environment variables from step 2.
6. Deploy.

Netlify uses `netlify.toml` to route `/api/roadmap` to the serverless function.

## 4. Deploy On Vercel

1. Push this folder to GitHub.
2. In Vercel, choose Add New > Project.
3. Import the GitHub repository.
4. Framework preset: Other.
5. Build command: leave empty.
6. Output directory: leave empty.
7. Add the environment variables from step 2.
8. Deploy.

Vercel uses `api/roadmap.js` for `/api/roadmap`.

## 5. First Save

When the database is empty, the app opens with the built-in roadmap template. Make any change, enter the edit passcode if prompted, and the full roadmap will be saved to Supabase.

## 6. Files To Keep Private

Do not deploy the original `.docx` file. `.vercelignore` and `.netlifyignore` already exclude Word documents.
