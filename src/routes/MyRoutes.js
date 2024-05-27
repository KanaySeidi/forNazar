import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Admin from "../pages/Admin";
import Add from "../pages/Add";
import Edit from "../pages/Edit";
import Detail from "../pages/Detail";
import Cart from "../pages/Cart";
import NotFound from "../pages/NotFound";

function MyRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/add" element={<Add />} />
        <Route path="/admin/edit/:id" element={<Edit />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default MyRoutes;
