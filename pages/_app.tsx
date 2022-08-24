import '../styles/globals.css'
import 'styles/chat.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../custom-components/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return <ChakraProvider theme={theme}>
  <Component {...pageProps} />
  </ChakraProvider>
}

export default MyApp
