"use client";
import AboutHero from "../sections/about/about-hero";
import AboutTeam from "../sections/about/about-team";
import AboutTestimonials from "../sections/about/about-testimonials";
import AboutVision from "../sections/about/about-vision";
import AboutWhat from "../sections/about/about-what";
import { AboutView } from "../sections/about/view";

export default function AboutPage() {
  return (
    <div className="bg-white">
      <AboutView />
      <AboutTeam />
      <AboutTestimonials />
      {/* <AboutWhat /> */}
      {/* <AboutVision /> */}
      {/* <AboutHero /> */}
    </div>
  );
}
