import type { ReactNode } from 'react';
import ThemeProvider from '@/components/theme-provider';


type ProviderProps = {
    children: ReactNode
}

function Providers({ children }: ProviderProps) {
    return (
        <>
            <ThemeProvider
                attribute='class'
                defaultTheme='system'
                enableSystem
                disableTransitionOnChange
            >
                {children}
            </ThemeProvider>
        </>
    )
}

export default Providers;