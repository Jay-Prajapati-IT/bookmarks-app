'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useEffect } from 'react'

type Bookmark = {
  id: string
  title: string
  url: string
  is_public: boolean
}

export default function BookmarksSection() {
  const supabase = createClient()

  const [title, setTitle] = useState('')
  const [url, setUrl] = useState('')
  const [isPublic, setIsPublic] = useState(false)
  const [message, setMessage] = useState('')
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([])

  // Fetch bookmarks from database
  async function fetchBookmarks() {
    const { data, error } = await supabase
      .from('bookmarks')
      .select('*')
      .order('created_at', { ascending: false })

    if (!error && data) {
      setBookmarks(data)
    }
  }

  useEffect(() => {
    fetchBookmarks()
  }, [])

  // Handle form submission
  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault()

    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      setMessage('You must be logged in.')
      return
    }

    const { error } = await supabase
      .from('bookmarks')
      .insert({
        user_id: user.id,
        title,
        url,
        is_public: isPublic,
      })

    if (error) {
      setMessage(error.message)
      return
    }

    setTitle('')
    setUrl('')
    setIsPublic(false)

    // setMessage('Bookmark created.')
    await fetchBookmarks()
  }

  // Render bookmarks
  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4">
        My Bookmarks
      </h2>
      {/* Form to add new bookmark */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 max-w-md"
      >
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2"
          required
        />

        <input
          type="url"
          placeholder="https://example.com"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="border p-2"
          required
        />

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={isPublic}
            onChange={(e) =>
              setIsPublic(e.target.checked)
            }
          />
          Public
        </label>

        <button
          type="submit"
          className="border p-2"
        >
          Add Bookmark
        </button>
      </form>

      {/* Display existing bookmarks */}
      <div className="mt-8">
        {bookmarks.length === 0 ? (
          <p>No bookmarks yet.</p>
        ) : (
          bookmarks.map((bookmark) => (
            <div
              key={bookmark.id}
              className="border p-3 mb-3"
            >
              <h3 className="font-semibold">
                {bookmark.title}
              </h3>

              <p>{bookmark.url}</p>

              <p>
                {bookmark.is_public
                  ? 'Public'
                  : 'Private'}
              </p>
            </div>
          ))
        )}
      </div>

      {message && (
        <p className="mt-4">{message}</p>
      )}
    </div>
  )
}