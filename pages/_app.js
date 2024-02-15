import Layout from "@/components/Layout/Layout";
import client from "@/config/apolloclient";
import "@/styles/globals.css";
import { ApolloProvider } from "@apollo/client";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <ApolloProvider client={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}
