import "~/styles/globals.css";

import { Providers } from "./providers";

export const metadata = {
  title: "Brex Interview Playground",
  description: "Basic fullstack setup to start hacking",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
