import { AppProps } from 'next/app'

import { ChakraProvider } from '@chakra-ui/react'

import { SidebarDrawerContextProvider } from '../contexts/SidebarDrawerContext'
import { makeServer } from '../services/mirage'

import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import { theme } from '../styles/theme'

if (process.env.NODE_ENV === 'development') {
  makeServer()
}

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <SidebarDrawerContextProvider>
          <Component {...pageProps} />
        </SidebarDrawerContextProvider>
      </ChakraProvider>

      <ReactQueryDevtools />
    </QueryClientProvider>
    
  )
}

export default MyApp
