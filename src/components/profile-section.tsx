'use client'

import { createClient } from "@/lib/supabase/client"
import { useEffect, useState } from "react"

export default function ProfileSection() {
    const supabase = createClient()
    const [handle, setHandle] = useState('')
    const [message, setMessage] = useState('')

    //load current handle
    async function fetchProfile() {
        const {
            data: { user },
        } = await supabase.auth.getUser()

        if (!user) return

        const { data } = await supabase
            .from('profiles')
            .select('handle')
            .eq('id', user.id)
            .single()

        if (data) {
            setHandle(data.handle)
        }
    }

    useEffect(() => {
        fetchProfile()
    }, [])

    //save handle
    async function handleSave() {
        const {
            data: { user },
        } = await supabase.auth.getUser()

        if (!user) return

        const cleanedHandle = handle
            .trim()
            .toLowerCase()

        const { error } = await supabase
            .from('profiles')
            .update({
                handle: cleanedHandle,
            })
            .eq('id', user.id)

        if (error) {
            setMessage(error.message)
            return
        }

        setMessage('Handle updated.')
    }

    return (
        <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">
                Profile
            </h2>

            <input
                type="text"
                value={handle}
                onChange={(e) =>
                    setHandle(e.target.value)
                }
                className="border p-2"
            />

            <button
                onClick={handleSave}
                className="border px-4 py-2 ml-2"
            >
                Save Handle
            </button>

            {message && (
                <p className="mt-2">{message}</p>
            )}
        </div>
    )
}

