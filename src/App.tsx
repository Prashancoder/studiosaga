import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import OurSaga from "./pages/OurSaga";
import StylePaletteMinimalist from "./pages/StylePaletteMinimalist";
import StylePaletteIndustrial from "./pages/StylePaletteIndustrial";
import InteriorKitBase from "./pages/InteriorKitBase";
import InteriorKitStandard from "./pages/InteriorKitStandard";
import InteriorKitPremium from "./pages/InteriorKitPremium";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/our-saga" element={<OurSaga />} />
          <Route path="/style-palette/minimalist" element={<StylePaletteMinimalist />} />
          <Route path="/style-palette/industrial" element={<StylePaletteIndustrial />} />
          <Route path="/interior-kit/base/:size" element={<InteriorKitBase />} />
          <Route path="/interior-kit/standard/:size" element={<InteriorKitStandard />} />
          <Route path="/interior-kit/premium/:size" element={<InteriorKitPremium />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
