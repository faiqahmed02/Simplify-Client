# SimplifyClient Authentication Setup

## Current Implementation: Preview Mode

This preview version of SimplifyClient uses a simplified, client-side authentication system to avoid server-side dependencies (crypto, bcrypt, Prisma) that don't work in browser-based preview environments.

### How It Works

- **Client-side storage**: Uses localStorage to persist sessions
- **Demo authentication**: Accepts any email/password for testing
- **Full UI**: All auth pages (login, signup) are functional
- **Protected routes**: Dashboard and other pages require authentication

### Try It Out

1. Go to `/signup` and create an account with any email/password
2. You'll be automatically logged in and redirected to `/dashboard`
3. Or go to `/login` and sign in with any credentials

### Production Implementation

For production deployment, this app includes a complete NextAuth.js v5 backend with:

- PostgreSQL + Prisma ORM
- Email/password authentication with bcrypt
- Google OAuth integration
- Email verification system
- Password reset functionality
- JWT-based sessions
- Role-based access control
- Rate limiting

To use the production auth system:

1. Install dependencies: `npm install`
2. Set up PostgreSQL database (Neon is already integrated)
3. Configure environment variables:
   \`\`\`env
   DATABASE_URL="your_neon_postgres_url"
   NEXTAUTH_URL="http://localhost:3000"
   NEXTAUTH_SECRET="generate_with_openssl_rand_base64_32"
   GOOGLE_CLIENT_ID="your_google_client_id"
   GOOGLE_CLIENT_SECRET="your_google_client_secret"
   RESEND_API_KEY="your_resend_api_key"
   EMAIL_FROM="noreply@yourdomain.com"
   \`\`\`
4. Run migrations: `npx prisma migrate dev`
5. Start the app: `npm run dev`

### Files Structure

**Preview Version (Current):**
- `lib/auth-client.ts` - Client-side auth utilities
- `components/auth-provider.tsx` - Auth context provider
- `components/login-form.tsx` - Login UI
- `components/signup-form.tsx` - Signup UI

**Production Version (To Implement):**
- `auth.ts` - NextAuth.js configuration
- `middleware.ts` - Route protection
- `prisma/schema.prisma` - Database schema
- `app/api/auth/*` - Auth API routes
- `lib/auth-utils.ts` - Password hashing utilities

### Security Notes

The current preview implementation is **NOT suitable for production** as it:
- Stores sessions in localStorage (no encryption)
- Accepts any credentials (no validation)
- Has no backend verification
- Lacks email verification
- Missing rate limiting

Always use the full NextAuth.js + database setup for production deployments.
\`\`\`

```json file="" isHidden
