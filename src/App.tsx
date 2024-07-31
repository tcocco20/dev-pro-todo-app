import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import HomePage from "./pages/HomePage";
import AddNewPage from "./pages/AddNewPage";
import TaskDetailsPage from "./pages/TaskDetailsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "add-new", element: <AddNewPage /> },
      { path: "edit/:id", element: <AddNewPage /> },
      { path: "view/:id", element: <TaskDetailsPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
