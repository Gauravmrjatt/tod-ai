'use client';

import { usePathname } from 'next/navigation';
import BottomNavigation from '@/components/bottom-navigation';

export default function RootLayout({ children }) {
    const pathname = usePathname();
    const hideBottomNav = pathname.startsWith('/app/');

    return (
        <>
            {children}
            {!hideBottomNav && <BottomNavigation />}
        </>
    );
}
