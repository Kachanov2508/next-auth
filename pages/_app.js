import "../styles/globals.css";

import { SessionProvider } from "next-auth/react";

import Navbar from "../components/Navbar/Navbar";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Navbar />
      <main>
        <Component {...pageProps} />
      </main>
    </SessionProvider>
  )
}