
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ClerkLoaded, ClerkLoading } from "@clerk/clerk-react";

// Pages
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/Login";
import SignUpPage from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import Reminders from "./pages/Reminders";
import NewReminder from "./pages/NewReminder";
import ReminderDetail from "./pages/ReminderDetail";
import Calendar from "./pages/Calendar";
import Team from "./pages/Team";
import Settings from "./pages/Settings";
import Billing from "./pages/Billing";
import NotFound from "./pages/NotFound";

// Layout
import AppLayout from "./components/layout/AppLayout";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <ClerkLoading>
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
        </div>
      </ClerkLoading>
      <ClerkLoaded>
        <BrowserRouter>
          <Routes>
            {/* Public routes */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/login/*" element={<LoginPage />} />
            <Route path="/signup/*" element={<SignUpPage />} />
            
            {/* Protected routes - wrapped with AppLayout */}
            <Route element={<AppLayout />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/reminders" element={<Reminders />} />
              <Route path="/reminders/new" element={<NewReminder />} />
              <Route path="/reminders/:id" element={<ReminderDetail />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/team" element={<Team />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/billing" element={<Billing />} />
            </Route>
            
            {/* Catch-all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ClerkLoaded>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
