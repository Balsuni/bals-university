import "@/styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";

const queryClient = new QueryClient();

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <AnimatePresence mode="wait" initial={true}>
      <QueryClientProvider client={queryClient}>
        {" "}
        <Component {...pageProps} />{" "}
      </QueryClientProvider>
    </AnimatePresence>
  );
};

export default App;
