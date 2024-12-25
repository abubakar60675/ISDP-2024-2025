import { ContactIcon, FunctionsIcon } from "./icons";
import { routes } from "./routes";
import { House } from "lucide-react";

export const sidebarRoutes = [
  {
    label: "Home",
    path: routes.HOME,
    icon: <House />,
  },
  {
    label: "Users",
    path: routes.USERS,
    icon: <ContactIcon className="customIconPathFill" />,
  },
  {
    label: "Function",
    path: routes.FUNCTION,
    icon: <FunctionsIcon className="customIconPathFill" />,
  },
];
