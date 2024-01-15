import { Html, Head, Main, NextScript } from 'next/document'

export default function Document (): JSX.Element {
  return (
    <Html lang="en">
      <Head />

      <body>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-X3651L5J2W" />
        <script dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-X3651L5J2W');
            `
        }}
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
