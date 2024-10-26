import { LayoutDashboard, FileText, Settings, Users } from "lucide-react";

export const navItems = [
  {
    title: "Dashboard",
    id: "dashboard",
    icon: <LayoutDashboard className="h-4 w-4" />,
  },
  {
    title: "Reports",
    id: "reports",
    icon: <FileText className="h-4 w-4" />,
  },
  {
    title: "Settings",
    id: "settings",
    icon: <Settings className="h-4 w-4" />,
  },
];