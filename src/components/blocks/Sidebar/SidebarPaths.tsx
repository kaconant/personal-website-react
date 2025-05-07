import Home from "@/components/pages/home/Home";
import Projects from "@/components/pages/projects/Projects";
import Contact from "@/components/pages/contact/Contact";

type SidebarPathItem = {
  name: string;
  path: string;
  rootUrl: string;
  component: React.ComponentType<any>;
};

export const SIDEBAR_PATHS: SidebarPathItem[] = [
  {
    name: "Home",
    path: "/",
    rootUrl: "/",
    component: Home,
  },
  {
    name: "Projects",
    path: "/projects",
    rootUrl: "/projects",
    component: Projects,
  },
  {
    name: "Contact",
    path: "/contact",
    rootUrl: "/contact",
    component: Contact,
  },
];
