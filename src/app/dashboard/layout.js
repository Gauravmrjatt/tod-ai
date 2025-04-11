import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import DashboardLayout from "@/components/dashboard-layout"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Parent Dashboard",
  description:
    "Monitor and track your child's growth, learning progress, and daily activities"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
          <DashboardLayout>{children}</DashboardLayout>
      </body>
    </html>
  )
}
