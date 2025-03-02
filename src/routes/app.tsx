import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import Billing from "../pages/Billing";
import Franchises from "../pages/Franchises";
import Jobs from "../pages/Jobs";
import Landing from "../pages/Landing";
import PageNotFound from "../pages/PageNotFound";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="/" element={<Landing />} />
          <Route path="billing" element={<Billing />} />
          <Route path="franchises" element={<Franchises />} />
          <Route path="jobs" element={<Jobs />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
