import { HttpLink } from "@apollo/client";
import { registerApolloClient, ApolloClient, InMemoryCache } from "@apollo/client-integration-nextjs";

export const { getClient, query, PreloadQuery } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: process.env.GRAPHQL_URL ?? process.env.NEXT_PUBLIC_ERXES_ENDPOINT ?? "",
      headers: {
        "x-app-token": process.env.ERXES_APP_TOKEN ?? "",
      },
    }),
  });
});