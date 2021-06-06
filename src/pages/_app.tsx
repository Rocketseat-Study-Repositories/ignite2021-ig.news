import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <h1>Nav</h1>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
