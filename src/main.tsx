import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import ItemList from "./pages/ItemList";
import ItemDetail from "./pages/ItemDetail";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<ItemList />} />
          <Route path="items/:id" element={<ItemDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
