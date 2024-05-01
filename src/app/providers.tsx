'use client';

import type { ReactNode } from 'react';
import ThemeProvider from '@/components/theme-provider';
import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from '@/components/ui/toaster';


type ProviderProps = {
    children: ReactNode
}

function Providers({ children }: ProviderProps) {
    const [queryClient] = useState<QueryClient>(() => {
        return new QueryClient({
            defaultOptions: {
                queries: {
                    staleTime: 60 * 1000 * 5
                }
            }
        })
    })

    return (
        <>
            <ThemeProvider
                attribute='class'
                defaultTheme='system'
                enableSystem
                disableTransitionOnChange
            >
                <Toaster />
                <QueryClientProvider client={queryClient}>
                    {children}
                    <ReactQueryDevtools initialIsOpen={false} />
                </QueryClientProvider>
            </ThemeProvider>
        </>
    )
}

export default Providers;