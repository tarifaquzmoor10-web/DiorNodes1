import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "./pages/Home";
import MinecraftHosting from "./pages/MinecraftHosting";
import DiscordBotHosting from "./pages/DiscordBotHosting";
import VpsHosting from "./pages/VpsHosting";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/minecraft" component={MinecraftHosting} />
      <Route path="/discord-bot" component={DiscordBotHosting} />
      <Route path="/vps" component={VpsHosting} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
