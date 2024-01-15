import '~/styles/globals.css'

import { AppProps } from 'next/app'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function App ({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <div className={inter.className}>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </div>
  )
}
