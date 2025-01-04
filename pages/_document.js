import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/favicon.ico" />
        <meta property="og:site_name" content="BoardAndGo" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@boardandgo" />
        <meta name="theme-color" content="#7C5DFA" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
} 