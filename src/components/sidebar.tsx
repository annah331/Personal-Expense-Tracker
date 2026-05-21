'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'Transactions', href: '/dashboard/transactions' },
    { name: 'Reports', href: '/dashboard/reports' },
  ];

  return (
    <>
      {/* 📱 MOBILE TOP BAR (ONLY) */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-[9999] flex items-center justify-between bg-teal-700 text-white p-4 shadow-md">
        <h1 className="font-bold">ExpenseTracker</h1>

        <button onClick={() => setOpen(true)} className="text-2xl">
          ☰
        </button>
      </div>

      {/* push content down on mobile so top bar doesn't overlap */}
      <div className="md:hidden h-12" />

      {/* 📊 DESKTOP SIDEBAR */}
      <aside className="hidden md:flex md:flex-col w-64 min-h-screen bg-gradient-to-b from-teal-600 to-teal-800 text-white p-6">
        <h2 className="text-2xl font-bold mb-8">ExpenseTracker</h2>

        <nav className="flex flex-col gap-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-4 py-2 rounded ${
                pathname === link.href
                  ? 'bg-teal-500 font-semibold'
                  : 'hover:bg-teal-700'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </aside>

      {/* 🌑 OVERLAY */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden overflow-hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* 📱 MOBILE DRAWER */}
      <div
        className={`
          fixed top-0 left-0 z-50 h-full w-64 max-w-[80vw]
          bg-gradient-to-b from-teal-600 to-teal-800 text-white p-6
          transform transition-transform duration-300 md:hidden
          ${open ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-xl font-bold">ExpenseTracker</h2>

          <button onClick={() => setOpen(false)} className="text-xl">
            ✕
          </button>
        </div>

        <nav className="flex flex-col gap-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`px-4 py-2 rounded ${
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
    </>
  );
}
