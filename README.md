# Bookmarks App

A simple personal bookmarks application built with Next.js and Supabase.

Users can create an account, manage their bookmarks, control bookmark visibility (public/private), and share public bookmarks through a unique profile handle.

## Features

### Authentication

* Email and password signup
* Email confirmation via Supabase Auth
* Login and logout functionality
* Protected dashboard for authenticated users

### Bookmark Management

* Create bookmarks
* View bookmarks
* Update bookmarks
* Delete bookmarks
* Mark bookmarks as public or private

### Profile System

* Unique user handles
* Public profile pages (`/<handle>`)
* Public profiles display only public bookmarks

### Security

* Row Level Security (RLS) enabled in Supabase
* Users can only access and modify their own data
* Public visitors can only view public bookmarks

## Tech Stack

* Next.js (App Router)
* React
* TypeScript
* Tailwind CSS
* Supabase

  * Authentication
  * PostgreSQL Database
  * Row Level Security (RLS)

## Environment Variables

Create a `.env.local` file in the project root and add:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

> The `.env.local` file is intentionally excluded from Git and is not included in this repository.

## Installation

Clone the repository:

```bash
git clone <repository-url>
cd bookmarks-app
```

Install dependencies:

```bash
npm install
```

Create a `.env.local` file and add the required environment variables.

Start the development server:

```bash
npm run dev
```

Open:

```txt
http://localhost:3000
```

## Database

The application uses Supabase PostgreSQL with Row Level Security policies to enforce data ownership and privacy.

Main tables:

* profiles
* bookmarks

## Deployment

The application is deployed on Vercel.

## Notes

This project was built with a focus on functionality, security, and clean architecture rather than advanced UI design.

Key areas of focus:

* Authentication
* Authorization
* Data privacy
* Secure public sharing
* Supabase Row Level Security
