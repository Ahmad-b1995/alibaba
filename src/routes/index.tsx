import { BrowserRouter } from "react-router-dom";
import PublicRoutes from "./PublicRoutes";

function Router() {
  return (
    <BrowserRouter>
      <PublicRoutes />
    </BrowserRouter>
  );
}

export default Router;
