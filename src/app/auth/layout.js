import Providers from './providers'

export default function RootLayout({ children }) {
    return (

                <Providers>
                    {children}
                </Providers>
           
    )
}