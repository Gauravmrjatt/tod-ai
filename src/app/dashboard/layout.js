import DashboardLayout from "@/components/dashboard-layout";
import Providers from "./provider";
export const metadata = {
  title: "Parent Dashboard",
  description:
    "Monitor and track your child's growth, learning progress, and daily activities",
};

export default function RootLayout({ children }) {
  return (
    <Providers>
      <DashboardLayout>{children}</DashboardLayout>
    </Providers>
  );
}
