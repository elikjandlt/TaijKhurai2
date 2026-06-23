import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_ERXES_ENDPOINT: "https://taijkhurai.next.erxes.io/gateway/graphql",
    NEXT_PUBLIC_ERXES_APP_TOKEN: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnRQb3J0YWxJZCI6InlXb3dRczBWSzRXYkRId29hdmRZZCIsImlhdCI6MTc3ODA2NDA2NX0.DW6XRLVIO3e2ursYYLf0TCClQZY2oCfdpY5d9sGQ6bk",
    NEXT_PUBLIC_ERXES_CMS_ID: "69fb1c13f584ac54c9a220f6",
    ERXES_APP_TOKEN: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnRQb3J0YWxJZCI6InlXb3dRczBWSzRXYkRId29hdmRZZCIsImlhdCI6MTc3ODA2NDA2NX0.DW6XRLVIO3e2ursYYLf0TCClQZY2oCfdpY5d9sGQ6bk",
  },
};

export default withNextIntl(nextConfig);
