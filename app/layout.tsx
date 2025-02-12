import type { Metadata } from "next";
import "./globals.css";
import { LandingProvider } from "./context/Context";

export const metadata: Metadata = {
  title: "Storybook",
  description: "Storybook",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <LandingProvider>{children}</LandingProvider>
      </body>
    </html>
  );
}
