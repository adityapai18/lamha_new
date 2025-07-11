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
export type FlippableTeamCardProps = {
  name: string;
  role: string;
  brief: string;
  backDetails: string;
  image?: string;
};
export function FlippableTeamCard({ name, role, brief, backDetails }: FlippableTeamCardProps) {
  const [flipped, setFlipped] = useState(false)
  return (
    <div className="perspective">
      <div className={`relative w-full h-96 transition-transform duration-500 transform ${flipped ? 'rotate-y-180' : ''}`}
        style={{ transformStyle: 'preserve-3d' }}>
        {/* Front Side */}
        <div className="absolute w-full h-full backface-hidden rounded-lg flex flex-col items-center justify-center p-6 shadow-lg" style={{backgroundColor: '#FFFDF5'}}>
          <div className="w-32 h-32 rounded-full flex items-center justify-center mb-4" style={{backgroundColor: '#B8943A'}}>
            <Users className="w-16 h-16" style={{color: '#4F4D46'}} />
          </div>
          <h4 className="text-xl font-semibold mb-2" style={{color: '#4F4D46'}}>{name}</h4>
          <p className="font-medium mb-3" style={{color: '#B8943A'}}>{role}</p>
          <p className="text-sm mb-4" style={{color: '#4F4D46'}}>{brief}</p>
          <button
            className="mt-auto px-4 py-2 rounded transition"
            style={{backgroundColor: '#B8943A', color: '#18181b'}}
            onClick={() => setFlipped(true)}
          >
            View More
          </button>
        </div>
        {/* Back Side */}
        <div className="absolute w-full h-full backface-hidden border border-border rounded-lg flex flex-col items-center justify-center p-6 shadow-lg rotate-y-180" style={{backgroundColor: '#FFFDF5'}}>
          <h4 className="text-xl font-semibold mb-2" style={{color: '#4F4D46'}}>More about {name}</h4>
          <p className="text-sm mb-4" style={{color: '#4F4D46'}}>{backDetails}</p>
          <button
            className="mt-auto px-4 py-2 rounded transition"
            style={{backgroundColor: '#B8943A', color: '#18181b'}}
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
    <section id="about" className="py-16 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <div className="flex items-center justify-center mb-6">
              <div className="flex-1 h-px mx-2 md:mx-4" style={{backgroundColor: '#B8943A'}}></div>
              <h2 className="text-4xl md:text-5xl font px-2 md:px-4" style={{color: '#B8943A', textTransform: 'uppercase', letterSpacing: '0.02em'}}>
                Our Story
              </h2>
              <div className="flex-1 h-px mx-2 md:mx-4" style={{backgroundColor: '#B8943A'}}></div>
            </div>
            <p className="text-lg mb-6 leading-relaxed" style={{color: '#4F4D46'}}>
              Founded in 2025, Lamhaa began as a dream to create a dining experience that goes beyond 
              just food. Our name, meaning "moment" in Arabic, reflects our philosophy that every 
              meal should be a memorable moment shared with loved ones.
            </p>
            <p className="text-lg mb-6 leading-relaxed" style={{color: '#4F4D46'}}>
              What started as a small family restaurant has grown into one of the most 
              beloved dining destinations, known for our commitment to excellence, innovative cuisine, 
              and warm hospitality.
            </p>
            <p className="text-lg leading-relaxed" style={{color: '#4F4D46'}}>
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
            <div className="p-6 rounded-lg shadow-lg border border-border bg-[#B8943A] absolute -bottom-6 -left-6 w-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl
              static mt-4 mx-auto left-0 right-0 !relative !w-full !max-w-full sm:!absolute sm:!left-[-1.5rem] sm:!right-auto sm:!w-auto sm:!max-w-sm md:!max-w-md lg:!max-w-lg xl:!max-w-xl"
              style={{color: '#18181b'}}>
              <p className="italic text-center">
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
                  <div className="p-3" style={{backgroundColor: '#B8943A', borderRadius: '9999px'}}>
                    <IconComponent className="w-8 h-8" style={{color: '#4F4D46'}} />
                  </div>
                </div>
                <div className="text-3xl font-bold mb-2" style={{color: '#4F4D46'}}>
                  {stat.value}
                </div>
                <div style={{color: '#4F4D46'}}>
                  {stat.label}
                </div>
              </div>
            )
          })}
        </div>

        {/* Values Section */}
        <div className="mt-20">
          <div className="flex items-center justify-center mb-12">
            <div className="flex-1 h-px mx-2 md:mx-4" style={{backgroundColor: '#B8943A'}}></div>
            <h3 className="text-3xl font px-2 md:px-4" style={{color: '#B8943A', textTransform: 'uppercase', letterSpacing: '0.02em'}}>
              Our Values
            </h3>
            <div className="flex-1 h-px mx-2 md:mx-4" style={{backgroundColor: '#B8943A'}}></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow" style={{backgroundColor: '#4F4D46'}}>
              <CardContent className="pt-6">
                <div className="w-16 h-16" style={{backgroundColor: '#B8943A', borderRadius: '9999px', margin: '0 auto 1rem auto', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <Heart className="w-8 h-8" style={{color: '#4F4D46'}} />
                </div>
                <h4 className="text-xl font-semibold mb-3" style={{color: '#B8943A'}}>
                  Passion
                </h4>
                <p style={{color: '#FFFDF5'}}>
                  We pour our hearts into every dish, ensuring that our passion for food 
                  translates into an exceptional dining experience.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow" style={{backgroundColor: '#4F4D46'}}>
              <CardContent className="pt-6">
                <div className="w-16 h-16" style={{backgroundColor: '#B8943A', borderRadius: '9999px', margin: '0 auto 1rem auto', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <Award className="w-8 h-8" style={{color: '#4F4D46'}} />
                </div>
                <h4 className="text-xl font-semibold mb-3" style={{color: '#B8943A'}}>
                  Excellence
                </h4>
                <p style={{color: '#FFFDF5'}}>
                  We strive for excellence in every aspect of our service, from the quality 
                  of ingredients to the attention to detail.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow" style={{backgroundColor: '#4F4D46'}}>
              <CardContent className="pt-6">
                <div className="w-16 h-16" style={{backgroundColor: '#B8943A', borderRadius: '9999px', margin: '0 auto 1rem auto', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <Users className="w-8 h-8" style={{color: '#4F4D46'}} />
                </div>
                <h4 className="text-xl font-semibold mb-3" style={{color: '#B8943A'}}>
                  Community
                </h4>
                <p style={{color: '#FFFDF5'}}>
                  We believe in building strong relationships with our guests, suppliers, 
                  and the local community that supports us.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection 