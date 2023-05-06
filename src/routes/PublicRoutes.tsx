import { Routes, Route } from "react-router-dom";
import Detail from "../pages/Detail";
import Homepage from "../pages/Homepage";
import Layout from "./Layout";

function PublicRoutes() {
  return (
    <Layout>
      <Routes>
        <Route index path="/" element={<Homepage />} />
        <Route index path=":name" element={<Detail />} />
      </Routes>
    </Layout>
  );
}

export default PublicRoutes;
