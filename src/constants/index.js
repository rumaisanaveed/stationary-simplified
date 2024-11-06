import {
  Add,
  Bag,
  Folder2,
  Heart,
  Logout,
  MessageQuestion,
  Profile,
  Setting,
  Wallet,
  Layer,
  Element3,
} from "iconsax-react";

export const sidebarUpperItems = [
  {
    id: 1,
    name: "Dashboard",
    icon: Element3,
    to: "/dashboard",
  },
  {
    id: 2,
    name: "New Project",
    icon: Add,
    to: "/create-project",
  },
  {
    id: 3,
    name: "My Projects",
    icon: Folder2,
    to: "/my-projects",
  },
  {
    id: 4,
    name: "Favorite Templates",
    icon: Heart,
    to: "/fav-templates",
  },
  {
    id: 5,
    name: "Template Library",
    icon: Layer,
    to: "/template-library",
  },
  {
    id: 6,
    name: "Subscription Plans",
    icon: Wallet,
    to: "/subscription-plans",
  },
  {
    id: 7,
    name: "Order History",
    icon: Bag,
    to: "/order-history",
  },
];

export const sidebarLowerItems = [
  {
    id: 11,
    name: "Profile",
    icon: Profile,
    to: "/profile",
  },
  {
    id: 12,
    name: "Settings",
    icon: Setting,
    to: "/settings",
  },
  {
    id: 13,
    name: "Help & Support",
    icon: MessageQuestion,
    to: "/help-and-support",
  },
  {
    id: 14,
    name: "Logout",
    icon: Logout,
    to: null,
  },
];

export const templateCategories = [
  ["All", "featured"],
  ["Business Cards", "business", "/business-cards"],
  ["Letterheads", "letterheads", "/letterheads"],
  ["Envelopes", "envelopes", "/envelopes"],
  ["Flyers & Brochures", "flyers", "/flyers-and-brochures"],
  ["Notebooks & Diaries", "notebook", "/notebooks-and-diaries"],
  ["Certificates & Awards", "certificates", "/cerficiates-and-awards"],
  ["Event Invitations", "events", "/event-invitations"],
];
