"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Heart, Users, Clock } from "lucide-react"
import { useState } from "react"

const stats = [
  { icon: Award, value: "15+", label: "Years of Excellence" },
  { icon: Heart, value: "10,000+", label: "Happy Customers" },
  { icon: Users, value: "50+", label: "Team Members" },
  { icon: Clock, value: "24/7", label: "Dedication" }
]

// Flippable card component for team members
type FlippableTeamCardProps = {
  name: string;
  role: string;
  brief: string;
  backDetails: string;
  image?: string;
};
function FlippableTeamCard({ name, role, brief, backDetails }: FlippableTeamCardProps) {
  const [flipped, setFlipped] = useState(false)
  return (
    <div className="perspective">
      <div className={`relative w-full h-96 transition-transform duration-500 transform ${flipped ? 'rotate-y-180' : ''}`}
        style={{ transformStyle: 'preserve-3d' }}>
        {/* Front Side */}
        <div className="absolute w-full h-full backface-hidden bg-card border-border rounded-lg flex flex-col items-center justify-center p-6 shadow-lg">
          <div className="w-32 h-32 bg-primary/20 rounded-full flex items-center justify-center mb-4">
            <Users className="w-16 h-16 text-primary" />
          </div>
          <h4 className="text-xl font-semibold text-foreground mb-2">{name}</h4>
          <p className="text-primary font-medium mb-3">{role}</p>
          <p className="text-muted-foreground text-sm mb-4">{brief}</p>
          <button
            className="mt-auto px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90 transition"
            onClick={() => setFlipped(true)}
          >
            View More
          </button>
        </div>
        {/* Back Side */}
        <div className="absolute w-full h-full backface-hidden bg-card border border-border rounded-lg flex flex-col items-center justify-center p-6 shadow-lg rotate-y-180">
          <h4 className="text-xl font-semibold text-foreground mb-2">More about {name}</h4>
          <p className="text-muted-foreground text-sm mb-4">{backDetails}</p>
          <button
            className="mt-auto px-4 py-2 bg-muted text-foreground rounded hover:bg-muted/80 transition"
            onClick={() => setFlipped(false)}
          >
            Back
          </button>
        </div>
      </div>
      <style jsx>{`
        .perspective { perspective: 1200px; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
      `}</style>
    </div>
  )
}

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <div className="flex items-center justify-center mb-6">
              <div className="flex-1 h-px bg-yellow-400 mx-2 md:mx-4"></div>
              <h2 className="text-4xl md:text-5xl font text-foreground px-2 md:px-4">
                Our Story
              </h2>
              <div className="flex-1 h-px bg-yellow-400 mx-2 md:mx-4"></div>
            </div>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Founded in 2025, Lamhaa began as a dream to create a dining experience that goes beyond 
              just food. Our name, meaning "moment" in Arabic, reflects our philosophy that every 
              meal should be a memorable moment shared with loved ones.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              What started as a small family restaurant has grown into one of the most 
              beloved dining destinations, known for our commitment to excellence, innovative cuisine, 
              and warm hospitality.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Today, we continue to honor our roots while embracing modern culinary trends, 
              creating dishes that tell stories and bring people together.
            </p>
          </div>
          <div className="relative">
            <img
              src="/location1.jpg"
              alt="Restaurant interior"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-lg shadow-lg border border-border">
              <p className="text-muted-foreground italic">
                "Every dish tells a story, every meal creates a memory."
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary/20 rounded-full">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            )
          })}
        </div>

        {/* Values Section */}
        <div className="mt-20">
          <div className="flex items-center justify-center mb-12">
            <div className="flex-1 h-px bg-yellow-400 mx-2 md:mx-4"></div>
            <h3 className="text-3xl font text-foreground px-2 md:px-4">
              Our Values
            </h3>
            <div className="flex-1 h-px bg-yellow-400 mx-2 md:mx-4"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow bg-card border-border">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-3">
                  Passion
                </h4>
                <p className="text-muted-foreground">
                  We pour our hearts into every dish, ensuring that our passion for food 
                  translates into an exceptional dining experience.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow bg-card border-border">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-3">
                  Excellence
                </h4>
                <p className="text-muted-foreground">
                  We strive for excellence in every aspect of our service, from the quality 
                  of ingredients to the attention to detail.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow bg-card border-border">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-3">
                  Community
                </h4>
                <p className="text-muted-foreground">
                  We believe in building strong relationships with our guests, suppliers, 
                  and the local community that supports us.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-20">
          <div className="flex items-center justify-center mb-12">
            <div className="flex-1 h-px bg-yellow-400 mx-2 md:mx-4"></div>
            <h3 className="text-3xl font text-foreground px-2 md:px-4">
              Meet Our Team
            </h3>
            <div className="flex-1 h-px bg-yellow-400 mx-2 md:mx-4"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FlippableTeamCard
              name="Chef Sarah Ahmed"
              role="Executive Chef"
              brief="With over 15 years of culinary experience, Chef Sarah brings her passion for fusion cuisine and commitment to excellence to every dish at Lamhaa."
              backDetails="Sarah has worked in Michelin-starred kitchens and loves experimenting with global flavors. Favorite dish to cook: Lamb Tagine. Contact: chef.sarah@lamhaa.com"
            />
            <FlippableTeamCard
              name="Michael Rodriguez"
              role="General Manager"
              brief="Michael ensures every guest receives exceptional service and oversees the smooth operation of both Lamhaa locations with dedication and warmth."
              backDetails="Michael is a hospitality veteran, marathon runner, and coffee enthusiast. Favorite quote: 'Service with a smile.' Contact: michael@lamhaa.com"
            />
            <FlippableTeamCard
              name="Priya Patel"
              role="Events Coordinator"
              brief="Priya specializes in creating unforgettable private events, working closely with clients to bring their vision to life with attention to every detail."
              backDetails="Priya has planned over 200 events and loves adding personal touches. Fun fact: She speaks 4 languages! Contact: priya@lamhaa.com"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection 