import { Link, Outlet } from "react-router-dom";
import { useAuth } from "../app/AuthContext.jsx";

export default function EmployeeLayout() {
  const { user, logout } = useAuth();

  return (
    <div style={{ display: "flex" }}>
      <aside style={{ width: "200px", background: "#eee", padding: "10px" }}>
        <h3>Employee Panel</h3>
        <p>{user?.name}</p>
        <Link to="/employee/leave-request">Leave Request</Link><br />
        <Link to="/employee/salary-hike">Salary Hike</Link><br />
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
