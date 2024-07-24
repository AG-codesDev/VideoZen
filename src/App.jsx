import Body from "./components/Body Components/Body";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import WatchPage from "./components/Watch Page/WatchPage";
import SearchPage from "./components/Search Component/SearchPage";
import ExplorePage from "./components/Explore Menu/ExplorePage";
import ChannelPage from "./components/Channel Data/ChannelPage";
import MainContainer from "./components/Explore Menu/MainContainer";
import PlayListPage from "./components/Channel Data/Playlists/PlayListPage";
import Error from "./components/Error/Error";
import SignUpLogin from "./components/Signup Login/SignUpLogin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    errorElement: <Error />,
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
      {
        path: "/channelPage",
        element: <ChannelPage />,
      },
      {
        path: "/playlistPage",
        element: <PlayListPage />,
      },
      {
        path: "/signUp-login",
        element: <SignUpLogin />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
