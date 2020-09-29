import { Head } from "next/document";
import "../styles/index.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
