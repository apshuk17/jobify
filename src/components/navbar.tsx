import LinksDropdown from './links-dropdown';
import { UserButton } from '@clerk/nextjs';
import ThemeToggle from './themetoggle';

function Navbar() {
    return (
        <nav className='bg-muted py-4 sm:px-16 lg:px-24 px-4 flex items-center justify-between'>
            <div>
                <LinksDropdown />
            </div>
            <div className='flex items-center gap-x-4'>
                <ThemeToggle />
                <div className='w-8 grid place-items-center'>
                    <UserButton afterSignOutUrl='/' />
                </div>

            </div>
        </nav>
    );
}

export default Navbar;
