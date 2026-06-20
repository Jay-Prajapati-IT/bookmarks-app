# Bookmarks App

A simple personal bookmarks application built with Next.js and Supabase.

Users can create an account, manage their bookmarks, control bookmark visibility (public/private), and share public bookmarks through a unique profile handle.

## Live Demo

https://bookmarks-app-jay.vercel.app

## Repository

https://github.com/Jay-Prajapati-IT/bookmarks-app

---

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

---

## Public Profile Examples

Each user can claim a unique handle and share their public bookmarks.

Example:

```txt
Handle: handle1
Profile URL:
https://bookmarks-app-jay.vercel.app/handle1
```

Another example:

```txt
Handle: handle2
Profile URL:
https://bookmarks-app-jay.vercel.app/handle2
```

Visitors do not need to log in to view public bookmarks.

Private bookmarks remain hidden.

---

## Tech Stack

* Next.js (App Router)
* React
* TypeScript
* Tailwind CSS
* Supabase

  * Authentication
  * PostgreSQL Database
  * Row Level Security (RLS)

---

## Environment Variables

Create a `.env.local` file in the project root and add:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Important

The `.env.local` file is intentionally excluded from Git and is **not included in this repository**.

You must provide your own Supabase project credentials before running the application locally.

---

## Installation

Clone the repository:

```bash
git clone https://github.com/Jay-Prajapati-IT/bookmarks-app.git
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

---

## Database

The application uses Supabase PostgreSQL with Row Level Security policies to enforce data ownership and privacy.

### Tables

#### profiles

Stores user profile information:

* id
* handle
* created_at

#### bookmarks

Stores bookmark data:

* id
* user_id
* title
* url
* is_public
* created_at

---

## Security Notes

This application uses Supabase Row Level Security (RLS) policies to ensure:

* Users can only create bookmarks for themselves
* Users can only edit their own bookmarks
* Users can only delete their own bookmarks
* Private bookmarks are never exposed publicly
* Public profile pages only display public bookmarks

---

## Deployment

The application is deployed on Vercel:

https://bookmarks-app-jay.vercel.app

---

## Project Goal

This project was built with a focus on:

* Authentication
* Authorization
* Data Privacy
* Secure Public Sharing
* Supabase Row Level Security
* Clean and Maintainable Architecture

The primary goal was to implement the required functionality securely rather than focus on advanced UI design.
