import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../..app/Authcontext.jsx";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [role, setRole] = useState("admin");
  const [name, setName] = useState("");

  const handleLogin = () => {
    if (!name) return alert("Please enter a name");
    login(role, name);
    navigate(role === "admin" ? "/admin" : "/employee");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Login</h2>
      <input
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="admin">Admin</option>
        <option value="employee">Employee</option>
      </select>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
