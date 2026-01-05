# VelocityBuild.ai Waitlist Landing Page

A sleek, minimalist landing page with a beta waitlist signup form integration for Supabase and Google Sheets.

## Tech Stack
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Backend**: Supabase (PostgreSQL) + Optional Google Sheets Sync

## Setup Instructions

### 1. Supabase Setup
Create a `waitlist` table in your Supabase project with the following schema:

```sql
create table waitlist (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  email text not null unique,
  name text,
  state text,
  comment text
);
```

### 2. Google Sheets Setup (Optional)
1. Create a Google Sheet with headers: `timestamp`, `email`, `name`, `location`, `comment`.
2. Follow [this guide](https://github.com/levinunnink/html-form-to-google-sheet) or use a similar Google Apps Script to create a POST webhook.
3. Use the deployment URL as `GOOGLE_SHEETS_WEBHOOK_URL` in your `.env.local`.

### 3. Environment Variables
Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
GOOGLE_SHEETS_WEBHOOK_URL=your_google_sheets_webhook_url (optional)
```

### 4. Installation & Development

```bash
npm install
npm run dev
```

### 5. Production Build

```bash
npm run build
```

## Aesthetic Design
This project follows a "Stealth Mode" aesthetic inspired by Tesla and SpaceX:
- Pure black backgrounds (#000000)
- White and neutral gray typography
- Glassmorphism effects
- Subtle fade-in animations on scroll
