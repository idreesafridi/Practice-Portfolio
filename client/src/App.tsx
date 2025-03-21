import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ProjectsSection from "@/components/ProjectsSection"; // Assumed import
import ResumeSection from "@/components/ResumeSection"; // Assumed import


function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-background flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <Router />
          {/* Assuming these components are part of the Home page */}
          <ResumeSection />
          <ProjectsSection />
        </div>
        <Footer />
        <Toaster />
      </div>
    </QueryClientProvider>
  );
}

export default App;