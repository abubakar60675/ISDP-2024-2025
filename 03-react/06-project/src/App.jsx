import { Routes, Route } from "react-router";
import Login from "./pages/auth/Login";
import Home from "./pages/Home";
import { routes } from "./lib/utils/constants";
import NotFound from "./pages/misc/NotFound";
import UsersListing from "./pages/users/UsersListing";
import Functions from "./pages/Functions";
import AppLayout from "./components/layout/AppLayout";
import CheckUserAuth from "./lib/middlewares/CheckUserAuth";
import CheckIfUserAlreadyLoggedIn from "./lib/middlewares/CheckIfUserAlreadyLoggedIn";

function App() {
  return (
    <>
      <Routes>
        <Route element={<CheckIfUserAlreadyLoggedIn />}>
          <Route path={routes.LOGIN} element={<Login />} />
        </Route>
        <Route element={<CheckUserAuth />}>
          <Route element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path={routes.USERS} element={<UsersListing />} />
            <Route path={routes.FUNCTION} element={<Functions />} />
          </Route>
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
