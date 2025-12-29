import { createFileRoute } from "@tanstack/react-router";
import GalleryPage from "../components/GalleryView";

export const Route = createFileRoute("/gallery")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="md:mt-20">
      <GalleryPage />
    </div>
  );
}
