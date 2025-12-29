import { createFileRoute } from "@tanstack/react-router";
import Hero from "../components/Hero";
import Profile from "../components/Profile";
import ServicesSection from "../components/Services";
import ProjectsSection from "../components/Projects";
import GallerySection from "../components/Gallery";
import TestimonialsSection from "../components/Testimonial";
import StatsSection from "../components/StatsSection";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="">
      <Hero />
      <Profile />
      <ServicesSection />
      <ProjectsSection />
      <GallerySection />
      <TestimonialsSection />
      <StatsSection />
    </div>
  );
}
