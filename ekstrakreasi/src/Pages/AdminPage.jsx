import React from "react";
import Admin from "../component/Admin";
import ProtectedRoute from "../component/ProtectedRoute";

function AdminPage() {
  return (
    <ProtectedRoute>
      <Admin />
    </ProtectedRoute>
  );
}

export default AdminPage;
