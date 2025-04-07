'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  CalendarDaysIcon,
  PencilSquareIcon,
  ClipboardIcon,
  Cog6ToothIcon,
  HomeIcon,
} from '@heroicons/react/24/outline';
import clsx from 'clsx';

// Map of navigation items for the Daily Planner
const links = [
  { name: 'Dashboard', href: '/dashboard', icon: HomeIcon },
  { name: 'Daily Planner', href: '/dashboard/daily-planner', icon: ClipboardIcon },
  { name: 'Journal', href: '/dashboard/journal', icon: PencilSquareIcon },
  { name: 'Calendar', href: '/dashboard/calendar', icon: CalendarDaysIcon },
  { name: 'Settings', href: '/dashboard/settings', icon: Cog6ToothIcon },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        const isActive = pathname === link.href;

        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-sky-100 text-blue-600': pathname === link.href,
              },
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
