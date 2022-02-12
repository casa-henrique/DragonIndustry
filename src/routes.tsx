import React from "react";

import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";

import Login from "./Pages/Login";
import DragonList from "./Pages/DragonList";
import Register from "./Pages/Register";
import Details from "./Pages/Details";
import Error404 from "./Pages/Error404";

import useToken from "./useToken";

function Routes() {
  const { token, setToken } = useToken();

  if (!token) {
    return <Login setToken={setToken} />;
  }

  return (
    <BrowserRouter>
      <Switch>
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/dragonlist" element={<DragonList />} />
        <Route path="/register" element={<Register />} />
        <Route path={`/details:id`} element={<Details />} />
        <Route path="*" element={<Error404 />} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
