import type { ReactNode } from 'react';

type LayoutProps = {
    children: ReactNode;
}

function layout({ children }: LayoutProps) {
    return (
        <div className="text-4xl">
            {children}
        </div>
    )
}

export default layout;