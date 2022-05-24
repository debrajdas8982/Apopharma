import { ReactQueryDevtools } from 'react-query/devtools'
import Dashboard from '../components/layout/dashboard'
// import { useProfile } from '../helpers/hooks/useProfile'

export default function Home() {
  // const { User } = useProfile()
  // console.log(User)

  return (
    <>
      <Dashboard />
      <ReactQueryDevtools />
    </>
  )
}

Home.title = 'Dashboard'
