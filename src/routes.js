import Index from "./layouts";
import Dashboard from "./pages/dashboard";
import Technology from "./pages/technology";

const AppRoutes = [
  {
    path: "/",
    element: <Index />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/technology",
        element: <Technology />,
      },
    ],
  },
];

export default AppRoutes;
