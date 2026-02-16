import { TopBar } from "./scenes/global/TopBar";
import { SideBar } from "./scenes/global/SideBar";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import { Dashboard } from "./scenes/dashboard";
// import { Team } from "./scenes/team";
// import { Contacts } from "./scenes/contacts";
// import { Invoices } from "./scenes/invoices";
// import { Form } from "./scenes/form";
// import { Bar } from "./scenes/bar";
// import { Line } from "./scenes/line";
// import { Pie } from "./scenes/pie";
// import { FAQ } from "./scenes/faq";
// import { Geagraphy } from "./scenes/geagraphy";
// import { Calendar } from "./scenes/calendar";

// Layout component to include Sidebar and TopBar
const Layout = () => {
  const [theme, colorMode] = useMode(); // Added to Layout so it can access theme
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <SideBar />
          <main className="content">
            <TopBar />
            <Outlet /> {/* This is where the routed components will render */}
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      // {
      //   path: "/team",
      //   element: <Team />,
      // },
      // {
      //   path: "/contacts",
      //   element: <Contacts />,
      // },
      // {
      //   path: "/invoices",
      //   element: <Invoices />,
      // },
      // {
      //   path: "/form",
      //   element: <Form />,
      // },
      // {
      //   path: "/bar",
      //   element: <Bar />,
      // },
      // {
      //   path: "/line",
      //   element: <Line />,
      // },
      // {
      //   path: "/pie",
      //   element: <Pie />,
      // },
      // {
      //   path: "/faq",
      //   element: <FAQ />,
      // },
      // {
      //   path: "/geagraphy",
      //   element: <Geagraphy />,
      // },
      // {
      //   path: "/calendar",
      //   element: <Calendar />,
      // },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
