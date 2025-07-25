import Navigation from "@/components/navigation"
import HeroCarousel from "@/components/hero-carousel"
import LocationsSection from "@/components/locations-section"
import PrivateEventsSection from "@/components/private-events-section"
import AboutSection from "@/components/about-section"
import Footer from "@/components/footer"
import TeamSection from "@/components/team-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroCarousel />
      <LocationsSection />
      <PrivateEventsSection />
      <AboutSection />
      <TeamSection />
      <Footer />
    </main>
  )
}
