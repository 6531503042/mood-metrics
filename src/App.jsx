import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { NextUIProvider } from "@nextui-org/react";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <NextUIProvider>
      <TooltipProvider>
        <Toaster />
        {/* This renders the routes defined in your router */}
        <RouterProvider router={router} />
      </TooltipProvider>
    </NextUIProvider>
  </QueryClientProvider>
);

export default App;
