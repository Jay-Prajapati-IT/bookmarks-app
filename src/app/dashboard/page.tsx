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
    <div className="p-8">
      <h1 className="text-2xl font-bold">
        Dashboard
      </h1>

      <p>Welcome {user.email}</p>

      <LogoutButton />
      <ProfileSection />
      <BookmarksSection />
    </div>
  )
}