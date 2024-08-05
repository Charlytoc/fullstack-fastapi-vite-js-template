import * as React from "react";
import { Home } from "./routes/Home/Home";

import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";


// Puedes modificarlo, no es muy necesario momentáneamnete
const ErrorComponent = () => {
  return (
    <div>
      <h1>Uuupsy!</h1>
      <h3>Un error inesperado ha ocurrido o esta ruta no exista</h3>
    </div>
  )
}

// Vas a tocar bastante esto cuando agregues una ruta
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    // loader: someFunctionNotAComponent without (). For example: rootLoader
    // action: anotherFunctionCalledWhenYouSubmitAForm
    errorElement: <ErrorComponent/>
  },
  {
    path: "/contacts",
    element: <h1>
      <Link to={"/"}>Back</Link>
      Hello</h1>,
    errorElement: <ErrorComponent/>
  },
  {
    path: "/jenniffer",
    element: <h1>Soy jenni</h1>,
    errorElement: <ErrorComponent/>
  },
]);


// NO TOCAR
function App() {
  return <RouterProvider router={router} />;
}

export default App;
