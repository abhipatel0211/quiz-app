import "../styles/App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

/** import components */
import Main from "./Main";
import Quiz from "./Quiz";
import Result from "./Result";
import { CheckUserExist } from "../helper/helper";
import Selectlang from "./Selectlang";

/** react routes */
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
  },
  {
    path: "/selectlang",
    element: (
      <CheckUserExist>
        <Selectlang />
      </CheckUserExist>
    ),
  },
  {
    path: "/javascript",
    element: (
      <CheckUserExist>
        <Quiz lang="javascript" />
      </CheckUserExist>
    ),
  },
  {
    path: "/cpp",
    element: (
      <CheckUserExist>
        <Quiz lang="cpp" />
      </CheckUserExist>
    ),
  },
  {
    path: "/english",
    element: (
      <CheckUserExist>
        <Quiz lang="english" />
      </CheckUserExist>
    ),
  },
  {
    path: "/hindi",
    element: (
      <CheckUserExist>
        <Quiz lang="hindi" />
      </CheckUserExist>
    ),
  },
  {
    path: "/result",
    element: (
      <CheckUserExist>
        <Result />
      </CheckUserExist>
    ),
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
