import { createFileRoute } from "@tanstack/react-router";
import ServicesPage from "../components/ServicesPage";

export const Route = createFileRoute("/services")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="md:mt-20">
      <ServicesPage />
    </div>
  );
}
