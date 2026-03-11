'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const pathname = usePathname();

  const links = [
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'Transactions', href: '/dashboard/transactions' },
    { name: 'Reports', href: '/dashboard/reports' },
    { name: 'Budgets', href: '/dashboard/budget' },
    { name: 'Settings', href: '/dashboard/settings' },
  ];

  return (
    <div className="w-64 min-h-screen p-6 bg-gradient-to-b from-teal-600 to-teal-800 text-white">
      <h2 className="text-2xl font-bold mb-8">FinTracker</h2>
      <nav className="flex flex-col gap-4">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`px-4 py-2 rounded transition-colors duration-150 ${
              pathname === link.href
                ? 'bg-teal-500 font-semibold'
                : 'hover:bg-teal-700'
            }`}
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}
