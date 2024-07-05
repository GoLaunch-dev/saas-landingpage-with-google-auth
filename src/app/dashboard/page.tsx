import { redirect } from 'next/navigation'
import { createServersideClient } from '@/utils/supabase/server'
import DashboardLayout from '@/components/common/dashboard-layout'

export default async function PrivatePage() {
  const supabase = createServersideClient()

  const { data, error } = await supabase.auth.getUser()
  if (error ?? !data?.user) {
    redirect('/login')
  }

  return (
    <DashboardLayout>
      Code the rest of your applicaiton here
    </DashboardLayout>
  )
}
