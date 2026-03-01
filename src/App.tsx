import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/components/Layout";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import NewPatients from "./pages/NewPatients";
import Reviews from "./pages/Reviews";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import TeethCleaning from "./pages/services/TeethCleaning";
import DentalFillings from "./pages/services/DentalFillings";
import DentalCrowns from "./pages/services/DentalCrowns";
import TeethWhitening from "./pages/services/TeethWhitening";
import OvercomeDentalAnxiety from "./pages/blog/OvercomeDentalAnxiety";
import AvoidDentist10Years from "./pages/blog/AvoidDentist10Years";
import HowOftenCleaning from "./pages/blog/HowOftenCleaning";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/teeth-cleaning" element={<TeethCleaning />} />
            <Route path="/services/dental-fillings" element={<DentalFillings />} />
            <Route path="/services/dental-crowns" element={<DentalCrowns />} />
            <Route path="/services/teeth-whitening" element={<TeethWhitening />} />
            <Route path="/new-patients" element={<NewPatients />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/how-to-overcome-dental-anxiety" element={<OvercomeDentalAnxiety />} />
            <Route path="/blog/what-happens-if-you-avoid-the-dentist" element={<AvoidDentist10Years />} />
            <Route path="/blog/how-often-should-you-get-a-cleaning" element={<HowOftenCleaning />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
