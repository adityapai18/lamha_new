import { Users } from "lucide-react"
import { FlippableTeamCard } from "./about-section"

const TeamSection = () => (
  <section id="team" className="py-16" style={{ backgroundColor: '#4F4D46' }}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-center mb-12">
        <div className="flex-1 h-px bg-yellow-400 mx-2 md:mx-4"></div>
        <h3 className="text-3xl font px-2 md:px-4" style={{color: '#B8943A', textTransform: 'uppercase', letterSpacing: '0.02em'}}>
          Meet Our Team
        </h3>
        <div className="flex-1 h-px bg-yellow-400 mx-2 md:mx-4"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div style={{backgroundColor: '#FFFDF5', borderRadius: '16px'}}>
          <FlippableTeamCard
            name="Chef Sarah Ahmed"
            role="Executive Chef"
            brief="With over 15 years of culinary experience, Chef Sarah brings her passion for fusion cuisine and commitment to excellence to every dish at Lamhaa."
            backDetails="Sarah has worked in Michelin-starred kitchens and loves experimenting with global flavors. Favorite dish to cook: Lamb Tagine. Contact: chef.sarah@lamhaa.com"
          />
        </div>
        <div style={{backgroundColor: '#FFFDF5', borderRadius: '16px'}}>
          <FlippableTeamCard
            name="Michael Rodriguez"
            role="General Manager"
            brief="Michael ensures every guest receives exceptional service and oversees the smooth operation of both Lamhaa locations with dedication and warmth."
            backDetails="Michael is a hospitality veteran, marathon runner, and coffee enthusiast. Favorite quote: 'Service with a smile.' Contact: michael@lamhaa.com"
          />
        </div>
        <div style={{backgroundColor: '#FFFDF5', borderRadius: '16px'}}>
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

export default TeamSection 