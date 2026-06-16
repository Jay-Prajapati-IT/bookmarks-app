'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'

export default function SignupPage() {
  const supabase = createClient()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  async function handleSignup(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault()

    const { error } = await supabase.auth.signUp({
      email,
      password,
    })

    if (error) {
      setMessage(error.message)
      return
    }

    setMessage(
      'Check your email for a confirmation link.'
    )
  }

  return (
    <div className="p-8">
      <h1 className="mb-4 text-2xl font-bold">
        Sign Up
      </h1>

      <form
        onSubmit={handleSignup}
        className="flex flex-col gap-4 max-w-sm"
      >
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          className="border p-2"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          className="border p-2"
        />

        <button
          type="submit"
          className="border p-2"
        >
          Sign Up
        </button>
      </form>

      {message && (
        <p className="mt-4">{message}</p>
      )}
    </div>
  )
}