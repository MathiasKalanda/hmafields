import { createFileRoute } from "@tanstack/react-router";
import AboutPage from "../components/Aboutpage";

export const Route = createFileRoute("/about")({
  component: About,
});

function About() {
  return (
    <div className="md:mt-20">
      <AboutPage />
    </div>
  );
}
