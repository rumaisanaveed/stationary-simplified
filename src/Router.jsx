import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TemplateLibrary } from "./pages/TemplateLibrary";
import { Home } from "./pages/Home";
import { Dashboard } from "./pages/Dashboard";
import { NewProject } from "./pages/NewProject";
import { Projects } from "./pages/Projects";
import { SubscriptionPlans } from "./pages/SubscriptionPlans";
import { OrderHistory } from "./pages/OrderHistory";
import { Profile } from "./pages/Profile";
import { Settings } from "./pages/Settings";
import { HelpAndSupport } from "./pages/HelpAndSupport";
import { FavTemplates } from "./pages/FavTemplates";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { BusinessCards } from "./pages/BusinessCards";
import { Letterheads } from "./pages/Letterheads";
import { Envelopes } from "./pages/Envelopes";
import { Flyers } from "./pages/Flyers";
import { Notebooks } from "./pages/Notebooks";
import { Certificates } from "./pages/Certificates";
import { EventInvitations } from "./pages/EventInvitations";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Dashboard />} path="/dashboard" />
        <Route element={<NewProject />} path="/create-project" />
        <Route element={<Projects />} path="/my-projects" />
        <Route element={<FavTemplates />} path="/fav-templates" />
        <Route element={<TemplateLibrary />} path="/template-library" />
        <Route element={<SubscriptionPlans />} path="/subscription-plans" />
        <Route element={<OrderHistory />} path="/order-history" />
        <Route element={<Profile />} path="/profile" />
        <Route element={<Settings />} path="/settings" />
        <Route element={<HelpAndSupport />} path="/help-and-support" />
        <Route element={<SignIn />} path="/sign-in" />
        <Route element={<SignUp />} path="/sign-up" />
        <Route element={<BusinessCards />} path="/business-cards" />
        <Route element={<Letterheads />} path="/letterheads" />
        <Route element={<Envelopes />} path="/envelopes" />
        <Route element={<Flyers />} path="/flyers-and-brochures" />
        <Route element={<Notebooks />} path="/notebooks-and-diaries" />
        <Route element={<Certificates />} path="/cerficiates-and-awards" />
        <Route element={<EventInvitations />} path="/event-invitations" />
      </Routes>
    </BrowserRouter>
  );
}
