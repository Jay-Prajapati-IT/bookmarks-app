import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md border rounded-lg p-8 text-center">
        <h1 className="text-3xl font-bold mb-3">
          Bookmarks App
        </h1>

        <p className="text-gray-600 mb-8">
          Save, manage, and share your bookmarks.
        </p>

        <div className="flex flex-col gap-3">
          <Link
            href="/login"
            className="border rounded p-2"
          >
            Login
          </Link>

          <Link
            href="/signup"
            className="border rounded p-2"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </main>
  )
}