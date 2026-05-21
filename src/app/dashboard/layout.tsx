import Sidebar from '@/components/sidebar';
import { TransactionProvider } from '@/context/transactionContext';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col md:flex-row bg-gray-50 min-h-screen overflow-x-hidden">
          <Sidebar />
          <main className="flex-1 p-4 pt-16 md:pt-8 md:p-8">
            <TransactionProvider>{children}</TransactionProvider>
          </main>
        </div>
      </body>
    </html>
  );
}
