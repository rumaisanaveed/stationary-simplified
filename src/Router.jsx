import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TemplateLibrary } from "./pages/TemplateLibrary";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<TemplateLibrary />} path="/template-library" />
      </Routes>
    </BrowserRouter>
  );
}
