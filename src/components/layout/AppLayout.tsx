import { ReactNode } from 'react';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { DesktopSidebar } from './DesktopSidebar';
import { MobileBottomNav } from './MobileBottomNav';

interface AppLayoutProps {
  children: ReactNode;
}

export const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        {/* Desktop Sidebar */}
        <DesktopSidebar />

        {/* Main Content */}
        <div className="flex flex-1 flex-col">
          {/* Header with Sidebar Toggle */}
          <header className="sticky top-0 z-10 flex h-14 items-center border-b bg-background px-4 lg:px-6">
            <SidebarTrigger className="lg:hidden" />
            <h1 className="ml-2 text-xl font-bold text-primary lg:ml-0">FinanceAI</h1>
          </header>

          {/* Page Content */}
          <main className="flex-1 overflow-y-auto pb-20 lg:pb-6">
            <div className="mx-auto max-w-7xl px-4 py-6 lg:px-6 lg:py-8">
              {children}
            </div>
          </main>
        </div>

        {/* Mobile Bottom Navigation */}
        <MobileBottomNav />
      </div>
    </SidebarProvider>
  );
};
