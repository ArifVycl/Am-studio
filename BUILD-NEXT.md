# Next implementation tasks

## Phase A — secure access
- Add Supabase SSR client and middleware.
- Add admin sign-in using Supabase Auth.
- Add server-side admin role checks for every admin action.
- Add PIN creation using a strong random generator; hash with Argon2id or scrypt.
- Add PIN verification route with rate limiting and constant-time comparison.
- On success, set an HTTP-only, Secure, SameSite=Lax cookie containing a signed short-lived gallery session.
- Do not use the public gallery code alone as authorization.

## Phase B — R2 upload/download
- Use AWS SDK S3 client with the R2 endpoint.
- Admin-only route generates presigned PUT URL after validating gallery state, allowed MIME, file size and remaining quota.
- Client uploads directly to R2.
- Server finalizes upload and atomically reserves quota in the database to prevent concurrent over-quota uploads.
- Gallery route validates gallery session and creates short-lived GET URLs.
- Keep R2 bucket private.

## Phase C — subscriptions
- Start with manual payment approval in admin.
- For Midtrans, create transaction on server, verify webhook signature on server, then extend subscription.
- Webhook must be idempotent; never activate access based only on browser redirect.
- Expired subscription should suspend gallery access but preserve files during the published grace period.

## Phase D — operations
- Scheduled job to mark expired galleries.
- Email/WhatsApp reminders 14 and 3 days before expiry.
- Backups and restore test.
- Privacy policy, terms, deletion policy, support contact.
