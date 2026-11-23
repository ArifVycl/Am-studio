-- AM Studio Drive database starter schema
-- Run in Supabase SQL Editor. Review and adapt before production.

create extension if not exists pgcrypto;

create type public.gallery_status as enum ('active','suspended','expired','archived');
create type public.subscription_status as enum ('pending','active','past_due','expired','cancelled');
create type public.media_type as enum ('photo','video','other');

create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text not null,
  role text not null default 'admin' check (role in ('admin','staff')),
  created_at timestamptz not null default now()
);

create table public.clients (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text,
  phone text,
  created_at timestamptz not null default now()
);

create table public.plans (
  id uuid primary key default gen_random_uuid(),
  name text not null unique,
  quota_bytes bigint not null check (quota_bytes > 0),
  duration_days integer not null default 90 check (duration_days > 0),
  price_idr bigint not null check (price_idr >= 0),
  active boolean not null default true
);

create table public.galleries (
  id uuid primary key default gen_random_uuid(),
  client_id uuid not null references public.clients(id) on delete restrict,
  title text not null,
  public_code text not null unique,
  pin_hash text not null,
  quota_bytes bigint not null check (quota_bytes > 0),
  used_bytes bigint not null default 0 check (used_bytes >= 0),
  status public.gallery_status not null default 'active',
  starts_at timestamptz not null default now(),
  expires_at timestamptz not null,
  created_at timestamptz not null default now()
);

create table public.subscriptions (
  id uuid primary key default gen_random_uuid(),
  gallery_id uuid not null references public.galleries(id) on delete restrict,
  plan_id uuid references public.plans(id),
  status public.subscription_status not null default 'pending',
  starts_at timestamptz,
  ends_at timestamptz,
  created_at timestamptz not null default now()
);

create table public.media_files (
  id uuid primary key default gen_random_uuid(),
  gallery_id uuid not null references public.galleries(id) on delete cascade,
  object_key text not null unique,
  original_name text not null,
  content_type text not null,
  media_type public.media_type not null,
  size_bytes bigint not null check (size_bytes > 0),
  created_at timestamptz not null default now()
);

create table public.payments (
  id uuid primary key default gen_random_uuid(),
  subscription_id uuid not null references public.subscriptions(id),
  provider text not null default 'manual',
  provider_reference text unique,
  amount_idr bigint not null check (amount_idr >= 0),
  status text not null default 'pending' check (status in ('pending','paid','failed','refunded')),
  paid_at timestamptz,
  created_at timestamptz not null default now()
);

create table public.access_logs (
  id bigint generated always as identity primary key,
  gallery_id uuid references public.galleries(id) on delete set null,
  event text not null,
  ip_hash text,
  created_at timestamptz not null default now()
);

-- Private by default. Browser clients receive no direct table access.
alter table public.profiles enable row level security;
alter table public.clients enable row level security;
alter table public.plans enable row level security;
alter table public.galleries enable row level security;
alter table public.subscriptions enable row level security;
alter table public.media_files enable row level security;
alter table public.payments enable row level security;
alter table public.access_logs enable row level security;

-- No permissive client policies are intentionally added here.
-- Implement server-side admin authorization before exposing any admin operation.
-- Never use the Supabase service role key in client-side code.

insert into public.plans(name, quota_bytes, duration_days, price_idr)
values
 ('Basic', 10 * 1024 * 1024 * 1024, 90, 49000),
 ('Silver', 50 * 1024 * 1024 * 1024, 90, 99000),
 ('Gold', 100 * 1024 * 1024 * 1024, 90, 179000),
 ('Platinum', 250 * 1024 * 1024 * 1024, 90, 349000)
on conflict (name) do nothing;
