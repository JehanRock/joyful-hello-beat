import {
  Home,
  ArrowLeftRight,
  PiggyBank,
  CreditCard,
  Target,
  BarChart3,
} from 'lucide-react';
import { NavLink } from '@/components/NavLink';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  useSidebar,
} from '@/components/ui/sidebar';

const navigationItems = [
  { title: 'Dashboard', url: '/', icon: Home },
  { title: 'Transactions', url: '/transactions', icon: ArrowLeftRight },
  { title: 'Budgets', url: '/budgets', icon: PiggyBank },
  { title: 'Subscriptions', url: '/subscriptions', icon: CreditCard },
  { title: 'Goals', url: '/goals', icon: Target },
  { title: 'Reports', url: '/reports', icon: BarChart3 },
];

export function DesktopSidebar() {
  const { open } = useSidebar();

  return (
    <Sidebar className="hidden border-r lg:block" collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className={open ? '' : 'sr-only'}>
            Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild tooltip={item.title}>
                    <NavLink
                      to={item.url}
                      end={item.url === '/'}
                      className="flex items-center gap-3 rounded-lg px-3 py-2 text-sidebar-foreground transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                      activeClassName="bg-sidebar-accent text-sidebar-primary font-semibold"
                    >
                      <item.icon className="h-5 w-5 shrink-0" />
                      {open && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
