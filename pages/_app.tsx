import React from "react";
import Head from "next/head";
import { AppProps } from "next/dist/next-server/lib/router/router";
import "tailwindcss/tailwind.css";
import { Navbar, Footer } from "../components/layout";
const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Transit - Proof Of Concept</title>
        <meta
          name="description"
          content="Transit is a proof of concept application."
        />
        <meta property="og:url" content="http://transit.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Transit - Proof Of Concept" />
        <meta
          property="og:description"
          content="Transit is a proof of concept application."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <div className="container mx-auto">
          <Component {...pageProps} />
        </div>
        <Footer />
      </main>
    </>
  );
};
export default App;
