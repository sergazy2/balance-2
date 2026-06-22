create table if not exists calculations (
  id uuid primary key,
  title text not null,
  basin_id text not null,
  year int not null,
  scenario text not null,
  status text not null default 'Черновик',
  updated_at timestamptz not null default now(),
  payload jsonb not null
);
create index if not exists idx_calculations_basin_year on calculations(basin_id, year);
create table if not exists whb_directories (
  id uuid primary key default gen_random_uuid(),
  kind text not null,
  code text,
  name text not null,
  payload jsonb not null default '{}'::jsonb
);
-- При включенной авторизации добавьте RLS-политики под роли вашей организации.
