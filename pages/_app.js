import React from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/global';

import db from '../db.json';

const { theme } = db;

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Head>
          <title>Sherlock Holmes - Quiz</title>
          <link rel="icon" type="image/png" href="/public/favicon.ico" />
          {/* Primary Meta Tags */}
          <title>Sherlock Holmes - Quiz</title>
          <meta name="title" content="Sherlock Holmes - Quiz" />
          <meta name="description" content="Teste os seus conhecimentos sobre a série e livros de Sherlock Holmes escritos por Sir Arthur Conan Doyle." />

          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://aluraquiz-sherlock.vercel.app/" />
          <meta property="og:title" content="Sherlock Holmes - Quiz" />
          <meta property="og:description" content="Teste os seus conhecimentos sobre a série e livros de Sherlock Holmes escritos por Sir Arthur Conan Doyle." />
          <meta property="og:image" content={db.bg} />

          {/* Twitter */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://aluraquiz-sherlock.vercel.app/" />
          <meta property="twitter:title" content="Sherlock Holmes - Quiz" />
          <meta property="twitter:description" content="Teste os seus conhecimentos sobre a série e livros de Sherlock Holmes escritos por Sir Arthur Conan Doyle." />
          <meta property="twitter:image" content={db.bg} />
        </Head>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
