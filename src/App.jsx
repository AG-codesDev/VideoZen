import Body from "./components/Body";
import Heading from "./components/Heading";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import WatchPage from "./components/WatchPage";
import MainContainer from "./components/MainContainer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "/watch",
        element: <WatchPage />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="">
      <Heading />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

/*
Heading
Body
  - Sidebar
    - MenuItems
  - MainContainer
    -ButtonList
    -videoContainer
    -videoCard

*/
