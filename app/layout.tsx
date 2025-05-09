import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import LoadingProvider from "@/components/loading-provider"

import Image from "next/image"

import logo from "@/public/logo.png"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Tiago Gabriel - Software & UX Engineer",
  icons: {
    icon: "/logo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <LoadingProvider>
            <div className="flex min-h-screen flex-col">
              <Header />
              {children}
            </div>
          </LoadingProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
