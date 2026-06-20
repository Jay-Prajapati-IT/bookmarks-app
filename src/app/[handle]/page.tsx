import { createClient } from "@/lib/supabase/server"
import { error } from "console"
import { notFound } from 'next/navigation'

export default async function PublicProfilePage({
    params,
}: {
    params: Promise<{ handle: string }>
}) {
    const { handle } = await params
    const supabase = await createClient()

    const { data: profile } = await supabase
        .from('profiles')
        .select('*')
        .eq('handle', handle)
        .single()

    console.log('HANDLE:', handle)
    console.log('PROFILE:', profile)
    console.log('ERROR:', error)

    if (!profile) {
        return <div>Profile not found</div>
    }

    const { data: bookmarks } = await supabase
        .from('bookmarks')
        .select('*')
        .eq('user_id', profile.id)
        .eq('is_public', true)
        .order('created_at', {
            ascending: false,
        })

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-6">
                @{profile.handle}
            </h1>

            {bookmarks?.length === 0 ? (
                <p>No public bookmarks.</p>
            ) : (
                bookmarks?.map((bookmark) => (
                    <div
                        key={bookmark.id}
                        className="border p-3 mb-3"
                    >
                        <h2 className="font-semibold">
                            {bookmark.title}
                        </h2>

                        <a
                            href={bookmark.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline"
                        >
                            {bookmark.url}
                        </a>
                    </div>
                ))
            )}
        </div>
    )
}