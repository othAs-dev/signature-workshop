import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login/Login";
import ModalUpdate from "./components/ModalUpdate/ModalUpdate";
import Module from "./pages/Module/pages/Module";
import Dashboard from "./pages/Dashboard/Dashboard";
import AdminPanel from "./pages/AdminPanel/AdminPanel";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import { useAuth } from "./hooks/useAuth";
import Root from "./pages/Root/Root";
function App() {
  const auth = useAuth();
  return (
    <div>
      <Routes>
        <Route path='/' element={<Root />}>
          <Route path="/class" element={
            <ProtectedRoute user={auth.user}>
              <Module />
            </ProtectedRoute>}></Route>
          <Route path="/class/:id" element={
            <ProtectedRoute user={auth.user}>
              <Dashboard />
            </ProtectedRoute>}></Route>
          <Route path="/adminpanel" element={
            // <ProtectedRoute user={auth.user}>
            <AdminPanel />
            // </ProtectedRoute>
          }></Route>
          <Route path="/modal" element={
            <ProtectedRoute user={auth.user}>
              <ModalUpdate />
            </ProtectedRoute>
          }></Route>
          <Route path="/" element={<Navigate to={'/login'} replace={true} />}></Route>
          <Route path="*" element={<Navigate to={'/login'} replace={true} />}></Route>
        </Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
{/*  */ }