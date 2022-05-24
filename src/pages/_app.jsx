import { useState, useEffect } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
// import { ProvideProfile } from '../helpers/hooks/useProfile'
import '../assets/styles/globals.css'
import '../assets/styles/components/hamburgermenu.css'
import Layout from '../components/layout/layout'

function MyApp({ Component, pageProps }) {
  const [title, setTitle] = useState('')

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 5000,
        refetchOnWindowFocus: false
      }
    }
  })

  useEffect(() => {
    setTitle(Component.title)

    return () => {
      setTitle('')
    }
  }, [Component.title])
  return (
    <QueryClientProvider client={queryClient}>
      {/* <ProvideProfile> */}
        <Layout title={title}>
          <Component {...pageProps} settitle={setTitle} />
        </Layout>
      {/* </ProvideProfile> */}
    </QueryClientProvider>
  )
}

export default MyApp
