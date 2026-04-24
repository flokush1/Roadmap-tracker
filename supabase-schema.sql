create table if not exists public.roadmap_documents (
  id text primary key,
  data jsonb not null,
  updated_at timestamptz not null default now()
);

alter table public.roadmap_documents enable row level security;
