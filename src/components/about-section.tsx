import { Card, CardContent } from "@/components/ui/card"
import { Award, Heart, Users, Clock } from "lucide-react"

const stats = [
  { icon: Award, value: "15+", label: "Years of Excellence" },
  { icon: Heart, value: "10,000+", label: "Happy Customers" },
  { icon: Users, value: "50+", label: "Team Members" },
  { icon: Clock, value: "24/7", label: "Dedication" }
]

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Story
            </h2>
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
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-foreground text-center mb-12">
            Our Values
          </h3>
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
        <div>
          <h3 className="text-3xl font-bold text-foreground text-center mb-12">
            Meet Our Team
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow bg-card border-border">
              <CardContent className="pt-6">
                <div className="w-32 h-32 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-16 h-16 text-primary" />
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-2">
                  Chef Sarah Ahmed
                </h4>
                <p className="text-primary font-medium mb-3">Executive Chef</p>
                <p className="text-muted-foreground text-sm">
                  With over 15 years of culinary experience, Chef Sarah brings her passion for 
                  fusion cuisine and commitment to excellence to every dish at Lamhaa.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow bg-card border-border">
              <CardContent className="pt-6">
                <div className="w-32 h-32 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-16 h-16 text-primary" />
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-2">
                  Michael Rodriguez
                </h4>
                <p className="text-primary font-medium mb-3">General Manager</p>
                <p className="text-muted-foreground text-sm">
                  Michael ensures every guest receives exceptional service and oversees the 
                  smooth operation of both Lamhaa locations with dedication and warmth.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow bg-card border-border">
              <CardContent className="pt-6">
                <div className="w-32 h-32 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-16 h-16 text-primary" />
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-2">
                  Priya Patel
                </h4>
                <p className="text-primary font-medium mb-3">Events Coordinator</p>
                <p className="text-muted-foreground text-sm">
                  Priya specializes in creating unforgettable private events, working closely 
                  with clients to bring their vision to life with attention to every detail.
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