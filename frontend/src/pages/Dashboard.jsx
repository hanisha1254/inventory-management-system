import { useEffect, useState } from "react";
import api from "../services/api";
import "./Dashboard.css";

function Dashboard({ setPage }) {
  const [data, setData] = useState({});

  useEffect(() => {
    api
      .get("/dashboard")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="dashboard-container">

      <div className="sidebar">
        <h2>InventoryMS</h2>

        <ul>
          <li onClick={() => setPage("dashboard")}>
            📊 Dashboard
          </li>

          <li onClick={() => setPage("products")}>
            📦 Products
          </li>

          <li onClick={() => setPage("customers")}>
            👥 Customers
          </li>

          <li onClick={() => setPage("orders")}>
            🛒 Orders
          </li>
        </ul>
      </div>

      <div className="content">

        <div className="topbar">
          <h1>Inventory Dashboard</h1>
        </div>

        <div className="cards">

          <div className="card">
            <h3>Total Products</h3>
            <h2>{data.total_products || 0}</h2>
          </div>

          <div className="card">
            <h3>Total Customers</h3>
            <h2>{data.total_customers || 0}</h2>
          </div>

          <div className="card">
            <h3>Total Orders</h3>
            <h2>{data.total_orders || 0}</h2>
          </div>

          <div className="card">
            <h3>Low Stock Products</h3>
            <h2>{data.low_stock_products || 0}</h2>
          </div>

        </div>

        <div className="table-box">
          <h2>Recent Orders</h2>

          <table>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>#1001</td>
                <td>Demo Customer</td>
                <td>Completed</td>
              </tr>

              <tr>
                <td>#1002</td>
                <td>Demo Customer</td>
                <td>Processing</td>
              </tr>

              <tr>
                <td>#1003</td>
                <td>Demo Customer</td>
                <td>Pending</td>
              </tr>
            </tbody>
          </table>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;