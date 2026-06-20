import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import LogoutButton from '@/components/logout-button'
import BookmarksSection from '@/components/bookmarks-section'
import ProfileSection from '@/components/profile-section'


export default async function DashboardPage() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-4xl mx-auto">
        <div className="border rounded-lg p-6 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">
                Dashboard
              </h1>

              <p className="text-sm text-gray-600 mt-1">
                Welcome, {user.email}
              </p>
            </div>

            <LogoutButton />
          </div>
        </div>

        <div className="border rounded-lg p-6 mb-6">
          <ProfileSection />
        </div>

        <div className="border rounded-lg p-6">
          <BookmarksSection />
        </div>
      </div>
    </div>
  )
}