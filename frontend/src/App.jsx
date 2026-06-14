import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Customers from "./pages/Customers";
import Orders from "./pages/Orders";

function App() {
  const [page, setPage] = useState("dashboard");

  return (
    <>
      {page === "dashboard" && <Dashboard setPage={setPage} />}
      {page === "products" && <Products setPage={setPage} />}
      {page === "customers" && <Customers setPage={setPage} />}
      {page === "orders" && <Orders setPage={setPage} />}
    </>
  );
}

export default App;