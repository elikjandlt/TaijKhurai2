import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import { registerApolloClient } from "@apollo/client-integration-nextjs";

function makeClient() {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: process.env.GRAPHQL_URL ?? process.env.NEXT_PUBLIC_ERXES_ENDPOINT ?? "",
      headers: {
        "x-app-token": process.env.ERXES_APP_TOKEN ?? "",
      },
      // Fetch credentials mode
      fetchOptions: { cache: "no-store" },
    }),
  });
}

export const { getClient, query, PreloadQuery } = registerApolloClient(makeClient);
