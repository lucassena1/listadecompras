import postgres from 'postgres';
export const sql=postgres(process.env.POSTGRES_URL,{ssl:'require',max:1});
export async function init(){
 await sql`create table if not exists shopping_state (id text primary key, data jsonb not null, updated_at timestamptz default now())`;
 await sql`create table if not exists flyers (id bigserial primary key, store text not null, filename text not null, blob_url text, active boolean default true, offers_count int default 0, created_at timestamptz default now())`;
 await sql`create table if not exists offers (id bigserial primary key, flyer_id bigint references flyers(id) on delete cascade, store text not null, product text not null, normalized text not null, brand text, size_value numeric, size_unit text, price numeric not null, unit_price numeric, unit_basis text, condition text, active boolean default true, created_at timestamptz default now())`;
}
