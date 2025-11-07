# SimplifyClient - Client Portal for Freelancers

A modern, clean SaaS web application for freelancers to manage client relationships, projects, invoices, and communications.

## Preview Mode

This preview version uses a simplified client-side authentication system to demonstrate the UI and UX without requiring server-side setup. 

**Try it now:**
1. Visit the home page
2. Click "Sign In" or "Get Started"  
3. Enter any email and password (demo mode accepts all credentials)
4. Explore the dashboard, client portal, invoices, and settings

**Note**: For production use, see [AUTH_SETUP.md](./AUTH_SETUP.md) for full NextAuth.js + PostgreSQL authentication implementation.

## Features

- **Authentication System**: Login/signup with validation
- **Dashboard**: Overview of all clients and projects with search
- **Client Management**: Detailed client portal with tabs for overview, files, messages, and invoices
- **File Management**: Drag-and-drop upload with version tracking
- **Messaging**: Built-in chat interface for client communication
- **Invoice Management**: Professional invoice templates with payment tracking
- **Settings**: Customizable profile, branding (logo/colors), and billing

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui + Radix UI
- **Forms**: React Hook Form + Zod validation
- **Icons**: Lucide React
- **Analytics**: Vercel Analytics

## Project Structure

\`\`\`
app/
├── (auth)
│   ├── login/              # Login page
│   └── signup/             # Signup page
├── dashboard/              # Main dashboard
├── client/[id]/            # Individual client portal
├── invoices/               # Invoice list
├── invoice/[id]/           # Invoice detail
├── settings/               # User settings
└── page.tsx                # Landing page

components/
├── ui/                     # shadcn/ui components
├── auth-provider.tsx       # Auth context & session management
├── dashboard-*.tsx         # Dashboard components
├── client-*.tsx            # Client portal components
├── invoice-*.tsx           # Invoice components
└── settings-*.tsx          # Settings components

lib/
├── auth-client.ts          # Client-side auth utilities
└── utils.ts                # Helper functions
\`\`\`

## Design System

- **Primary Color**: `#2563eb` (Blue 600)
- **Accent Color**: `#10b981` (Green 500)
- **Typography**: Inter (sans-serif)
- **Spacing**: 8pt grid system
- **Border Radius**: 12-16px for cards
- **Shadows**: Soft, layered shadows
- **Icons**: Lucide React (consistent 20-24px)

## Pages Overview

### Public Pages
- **Home** (`/`) - Landing page with CTA buttons
- **Login** (`/login`) - Email/password authentication form
- **Signup** (`/signup`) - Account creation with validation

### Protected Pages (Require Authentication)
- **Dashboard** (`/dashboard`) - Client list with status cards
- **Client Portal** (`/client/[id]`) - Multi-tab client interface
  - Overview: Project progress and timeline
  - Files: Document management
  - Messages: Communication thread
  - Invoices: Payment history
- **Invoices** (`/invoices`) - All invoices with filtering
- **Invoice Detail** (`/invoice/[id]`) - Printable invoice view
- **Settings** (`/settings`) - Account configuration
  - Profile: User info and avatar
  - Branding: Logo and color customization
  - Billing: Subscription management

## Local Development

\`\`\`bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
\`\`\`

Visit `http://localhost:3000`

## Production Authentication Setup

The preview uses client-side auth for demonstration. For production deployment with full backend:

See [AUTH_SETUP.md](./AUTH_SETUP.md) for complete setup instructions including:
- NextAuth.js v5 configuration
- PostgreSQL + Prisma ORM integration
- Email/password + Google OAuth
- Email verification system
- Password reset functionality
- JWT-based sessions with HTTP-only cookies
- Role-based access control (freelancer/client/admin)
- Rate limiting and security best practices

**Quick Setup:**
\`\`\`bash
# 1. Set environment variables (see AUTH_SETUP.md)
# 2. Run database migrations
npm run db:migrate

# 3. Start the server
npm run dev
\`\`\`

## Key Features in Detail

### Client Portal
- **Project Timeline**: Visual progress tracking
- **Task Management**: Status updates and completion tracking
- **File Sharing**: Secure upload/download with versioning
- **Real-time Chat**: Message threads with timestamps
- **Invoice Access**: View and pay invoices directly

### Invoice System
- Professional PDF-ready templates
- Itemized billing with line items
- Tax calculations
- Payment status tracking (Paid/Pending/Overdue)
- Download and print functionality
- Client payment portal

### Settings & Customization
- Profile management with avatar upload
- Brand customization (logo, primary colors)
- Invoice template personalization
- Subscription tier management
- Payment method configuration

## Browser Support

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)

## Deployment

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Push code to GitHub
2. Import repository in Vercel
3. Add environment variables (see AUTH_SETUP.md)
4. Deploy

### Environment Variables Required for Production

\`\`\`env
DATABASE_URL=your_neon_postgres_url
NEXTAUTH_URL=https://yourdomain.com
NEXTAUTH_SECRET=generate_with_openssl_rand_base64_32
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
RESEND_API_KEY=your_resend_api_key
EMAIL_FROM=noreply@yourdomain.com
\`\`\`

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT
