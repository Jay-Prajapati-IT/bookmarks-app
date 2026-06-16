import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <h1>Bookmarks App</h1>

      <div>
        <Link href="/login">Login</Link>
      </div>

      <div>
        <Link href="/signup">Sign Up</Link>
      </div>
    </main>
  )
}