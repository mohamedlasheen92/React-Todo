import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import RootLayout from "../pages/Layout";
import HomePage from "../pages";
import RegisterPage from "../pages/Register";
import LoginPage from "../pages/Login";
import ErrorHandler from "../errors/ErrorHandler";
import ProtectedRoute from "../auth/ProtectedRoute";

const storageKey = "loggedInUser"
const userDataStr = localStorage.getItem(storageKey);
const userData = userDataStr ? JSON.parse(userDataStr) : null;
console.log(userData);

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />} errorElement={<ErrorHandler />}>


        <Route index element={
          <ProtectedRoute isAllowed={userData} redirectPath="/login">
            <HomePage />
          </ProtectedRoute>
        } />

        <Route path="login" element={
          <ProtectedRoute isAllowed={!userData} redirectPath="/">
            <LoginPage />
          </ProtectedRoute>
        } />

        <Route path="register" element={
          <ProtectedRoute isAllowed={!userData} redirectPath="/">
            <RegisterPage />
          </ProtectedRoute>
        } />

        <Route path="profile" element={<ProtectedRoute isAllowed={userData} redirectPath="login">
          <h3>Profile Page</h3>
        </ProtectedRoute>} />

      </Route>



    </>
  )
)

export default router;