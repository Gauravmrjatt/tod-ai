import BottomNavigation from "@/components/bottom-navigation"

export default function RootLayout({ children }) {
    return (<>
        {children}
        <BottomNavigation />
    </>)
}