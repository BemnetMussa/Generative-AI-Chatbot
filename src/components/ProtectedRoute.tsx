import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, isAuthenticated }: { children: React.ReactNode, isAuthenticated: boolean | null }) => {
  if (isAuthenticated === false) return <Navigate to="/login" />;
  if (isAuthenticated === null) return <p>Loading...</p>;

  return <>{children}</>;
};

export default ProtectedRoute;