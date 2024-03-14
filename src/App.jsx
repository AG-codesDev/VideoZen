import Body from "./components/Body";
import Heading from "./components/Heading";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import WatchPage from "./components/Watch Page/WatchPage";
import MainContainer from "./components/MainContainer";
import SearchPage from "./components/SearchPage";
import ExplorePage from "./components/ExplorePage";

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
      {
        path: "/search",
        element: <SearchPage />,
      },
      {
        path: "/explore",
        element: <ExplorePage />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="">
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
