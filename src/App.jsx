import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import {  Home, Movies, Subscriptions, Support } from "./pages";
import RootLayout from "./layout/RootLayout";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route  element={<RootLayout/>}>
      <Route path="/" element={<Home />} />
      <Route path="/Subscriptions" element={<Subscriptions />} />
      <Route path="/Movies" element={<Movies />} />
      <Route path="/Support" element={<Support />} />
    </Route>,
  ),
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
