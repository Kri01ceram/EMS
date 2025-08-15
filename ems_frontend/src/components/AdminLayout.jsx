import { Link, Outlet } from "react-router-dom";
import { useAuth } from "../app/AuthContext";

export default function AdminLayout() {
  const { user, logout } = useAuth();

  return (
    <div style={{ display: "flex" }}>
      <aside style={{ width: "200px", background: "#eee", padding: "10px" }}>
        <h3>Admin Panel</h3>
        <p>{user?.name}</p>
        <Link to="/admin/employees">Employee Management</Link><br />
        <Link to="/admin/departments">Department Management</Link><br />
        <Link to="/admin/leaves">Leave Management</Link><br />
        <Link to="/admin/salary">Salary Management</Link><br />
        <Link to="/profile">Profile</Link><br />
        <Link to="/settings">Settings</Link><br />
        <button onClick={logout}>Logout</button>
      </aside>
      <main style={{ flex: 1, padding: "20px" }}>
        <Outlet />
      </main>
    </div>
  );
}
