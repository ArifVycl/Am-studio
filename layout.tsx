import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AM Studio Drive — Private Digital Gallery",
  description: "Private cloud gallery for wedding photography and videography clients.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="id"><body>{children}</body></html>;
}
