import { AppProps } from "next/app";
import { motion } from "framer-motion";
import '../styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <motion.div><Component {...pageProps} /></motion.div>;
};

export default MyApp;
