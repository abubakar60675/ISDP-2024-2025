import { BrowserRouter, Routes, Route } from "react-router";
import Login from "./pages/auth/Login";
import Home from "./pages/Home";
import { routes } from "./lib/utils/constants";
import NotFound from "./pages/misc/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path={routes.LOGIN} element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
