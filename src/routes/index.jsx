import { createFileRoute } from "@tanstack/react-router";
import Hero from "../components/Hero";
import Profile from "../components/Profile";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="">
      <Hero />
      <Profile />
    </div>
  );
}
