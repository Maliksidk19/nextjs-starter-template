import "@/styles/globals.css";
import { generateMetaData, primaryFont } from "@/config";
import { ThemeProvider } from "@/context/theme-provider";

export const metadata = generateMetaData({
  title: "My App",
  description: "My app description",
  canonicalUrlRelative: "/",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${primaryFont.className} antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
