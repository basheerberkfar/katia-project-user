import Wrapper from '@/wrapper'
import type { AppProps } from 'next/app'
import { GlobalStyles as BaseStyles } from 'twin.macro'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Wrapper>
      <BaseStyles />
      <Component {...pageProps} />
    </Wrapper>
  )
}
