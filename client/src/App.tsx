import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootLayout from "./pages/layouts/RootLayout";
import ProtectedRoute from "./components/ProtectedRoute";
import DashboardLayout from "./pages/layouts/DashboardLayout";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import "./App.css";
import NotFoundPage from "./pages/NotFoundPage";
import ManageProjects from "./pages/ManageProjects";
import ManageSkills from "./pages/ManageSkills";
import ManageBlogs from "./pages/ManageBlogs";
import ManageExperiences from "./pages/ManageExperiences";
import Home from "./pages/Home";
import BlogDetails from "./pages/BlogDetails";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            {/* Redirect root route based on authentication */}
            <Route index element={<Home />} />
            <Route path="/blog/:blogId" element={<BlogDetails />} />
            <Route path="login" element={<Login />} />
            <Route path="sign-up" element={<SignUp />} />

            {/* Protected Routes */}
            <Route
              path="dashboard"
              element={
                <ProtectedRoute>
                  <DashboardLayout />
                </ProtectedRoute>
              }
            >
              <Route
                index
                path="manage-projects"
                element={
                  <ProtectedRoute restrictTo={["admin"]}>
                    <ManageProjects />
                  </ProtectedRoute>
                }
              />
              <Route
                path="manage-skills"
                element={
                  <ProtectedRoute restrictTo={["admin"]}>
                    <ManageSkills />
                  </ProtectedRoute>
                }
              />
              <Route
                path="manage-blogs"
                element={
                  <ProtectedRoute restrictTo={["admin"]}>
                    <ManageBlogs />
                  </ProtectedRoute>
                }
              />
              <Route
                path="manage-experiences"
                element={
                  <ProtectedRoute restrictTo={["admin"]}>
                    <ManageExperiences />
                  </ProtectedRoute>
                }
              />
            </Route>

            {/* Catch-all route for 404 - Page Not Found */}
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Toaster />
    </QueryClientProvider>
  );
};

export default App;
