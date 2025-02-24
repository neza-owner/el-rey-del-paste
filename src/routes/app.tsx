import { BrowserRouter, Route, Routes } from "react-router-dom";
import Billing from "../pages/Billing";
import Franchises from "../pages/Franchises";
import Landing from "../pages/Landing";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Landing />} />
        <Route path="/Billing" element={<Billing />} />
        <Route path="/Franchises" element={<Franchises />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
