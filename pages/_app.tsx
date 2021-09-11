import type { AppProps } from "next/app";
import "../source/base/global.css";

function Pokedex({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
export default Pokedex;
