# AM Studio Drive — MVP starter

Starter project for a private photo/video delivery portal with:
- Premium navy/white landing page
- Client gallery PIN entry UI
- Admin dashboard UI
- Supabase database schema and row-level security starter
- Cloudflare R2 integration design documented for the next implementation stage

## Important status
This is a **starter MVP scaffold**, not a production-ready storage service yet. The gallery PIN screen and admin dashboard are UI prototypes. Do not upload real client files or promise private access until server-side PIN verification, signed download URLs, admin authentication, upload quotas, payment verification, backups, and expiry enforcement have been implemented and tested.

## Requirements
- Node.js 20+
- Supabase project
- Cloudflare account with an R2 bucket
- Vercel account for deployment

## Run locally
1. Install Node.js 20 or newer.
2. Copy `.env.example` to `.env.local`.
3. Fill in Supabase public URL and anon key.
4. Run `npm install`.
5. Run `npm run dev`.
6. Open http://localhost:3000.

The UI runs without credentials. Database features are not connected yet.

## Supabase setup
1. Create a Supabase project.
2. Open SQL Editor.
3. Run `supabase/schema.sql`.
4. Create an admin user in Supabase Authentication.
5. Do not put the service-role key in browser code or any `NEXT_PUBLIC_` variable.

## R2 setup
Create a private R2 bucket. Keep public access disabled. The intended production flow is:
- Browser requests upload authorization from a server route.
- Server checks authenticated admin role, client quota and file type/size.
- Server creates a short-lived presigned PUT URL.
- Browser uploads directly to R2.
- Server records object metadata in Supabase.
- Gallery requests get short-lived presigned GET URLs after PIN session validation.

R2 keys must only exist in server environment variables.

## Production checklist before launch
- Implement admin login and role checks.
- Implement server-side PIN hashing and rate limiting.
- Use secure, HTTP-only, same-site gallery session cookies.
- Generate short-lived signed download URLs.
- Enforce per-gallery quota on the server (including concurrent uploads).
- Verify payment webhooks using provider signatures before extending subscriptions.
- Define expiry/grace-period/deletion policy and obtain client consent.
- Add audit logs, backup/restore tests, monitoring and privacy policy.
- Test access isolation between two different client galleries.
- Never expose raw R2 object keys or make the bucket public.

## Suggested initial packages
Illustrative only; validate margins against storage, download, payment, tax and support costs:
- Basic: 10 GB / 3 months
- Silver: 50 GB / 3 months
- Gold: 100 GB / 3 months
- Platinum: 250 GB / 3 months

## Domain
You do not need to buy a domain before developing. Deploy a staging version first using the Vercel-provided URL, then purchase a domain and connect it when the product is ready.
