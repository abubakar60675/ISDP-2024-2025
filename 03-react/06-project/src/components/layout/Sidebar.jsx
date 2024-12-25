import React from "react";
import { Link, NavLink, useLocation } from "react-router";
import { AppLogoImage, routes } from "../../lib/utils/constants";
import { sidebarRoutes } from "../../lib/utils/constants";

const Sidebar = () => {
  const location = useLocation();

  console.log("location", location.pathname);

  return (
    <>
      <aside className="w-[230px] h-dvh bg-customDarkBlue px-5 py-7 fixed top-0 left-0 overflow-auto">
        <Link to={routes.HOME} className="text-white">
          <img src={AppLogoImage} alt="App Logo" />
        </Link>

        <ul className="mt-10 flex flex-col gap-3">
          {sidebarRoutes.map((item) => {
            return (
              <li key={item.path} className="w-full">
                <NavLink
                  to={item.path}
                  // className="text-white hover:text-customGreen customGreenGradient customGreenGradientShadow px-3 py-2 w-full flex items-center gap-5 rounded-full"
                  // className={`text-customGray px-3 py-2 w-full flex items-center gap-4 rounded-full hover:text-white ${
                  //   item.path === location.pathname
                  //     ? "activeSideItem"
                  //     : "sideItem"
                  // }`}
                  className={({ isActive }) =>
                    isActive
                      ? "activeSideItem text-customGray px-3 py-2 w-full flex items-center gap-4 rounded-full hover:text-white"
                      : "sideItem text-customGray px-3 py-2 w-full flex items-center gap-4 rounded-full hover:text-white"
                  }
                >
                  {item.icon}
                  <span className="font-semibold text-sm">{item.label}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </aside>
    </>
  );
};

export default Sidebar;
