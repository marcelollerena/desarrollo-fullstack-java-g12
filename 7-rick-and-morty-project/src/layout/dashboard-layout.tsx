import { AppSidebar } from "@/components/app-sidebar/app-sidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";

export const DashboardLayout = () => {
  return (
    <main className="flex w-full h-screen">
      <AppSidebar />
      <div className="flex-1 flex flex-col">
        <SidebarTrigger />
        <Outlet />
      </div>
    </main>
  );
};
