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
        <div className="flex bg-gray-50">
          <Sidebar />
          <main className="flex-1 p-4 pt-24 md:pt-8 md:p-8">
            <TransactionProvider>{children}</TransactionProvider>
          </main>
        </div>
      </body>
    </html>
  );
}
