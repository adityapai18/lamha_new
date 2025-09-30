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
      <div className="flex flex-col items-center gap-8 md:flex-row md:justify-center">
        <div className="w-full max-w-sm" style={{backgroundColor: '#FFFDF5', borderRadius: '16px'}}>
          <FlippableTeamCard
            name="Rakesh Naik"
            role="Executive Chef"
            brief="Rakesh Naik, our Executive Chef, brings over 15 years of culinary mastery shaped across India and the U.S. A native of Maharashtra, he began his journey at ITC Maratha in 2006 and has since honed his craft in diverse kitchens, blending tradition with modern artistry."
            backDetails="With rich experience from Carnival Cruise in Miami, Karma Café in New Jersey, Indeblue in Philadelphia, and Urban Spice in Edison, Rakesh has built a reputation for creativity and consistency. His culinary philosophy draws inspiration from his mother, whose cooking was cherished in their community. Specializing in Lucknowi and Mughlai cuisines, he takes pride in the art of dum cooking, particularly Dum Biryani. Passionate about modern plating and food photography, Rakesh continues to innovate while honoring timeless Indian flavors."
          />
        </div>
        <div className="w-full max-w-sm" style={{backgroundColor: '#FFFDF5', borderRadius: '16px'}}>
          <FlippableTeamCard
            name="Ajay Shukla"
            role="Hospitality Manager"
            brief="Ajay is the architect of the guest experience at Lamhaa. As our General Manager, he ensures that the warmth of our welcome and the precision of our service perfectly complement the creativity of our kitchen."
            backDetails="A recognized leader in luxury dining, Ajay has held key roles at India’s most respected venues, including Mumbai’s acclaimed Masque, where he pioneered thoughtful, elegant hospitality. At Lamhaa, he focuses on building a culture of excellence—overseeing front-of-house operations, staff training, and service development. His dedication ensures every guest enjoys a seamless, personalized, and truly unforgettable experience."
          />
        </div>
        {/* <div style={{backgroundColor: '#FFFDF5', borderRadius: '16px'}}>
          <FlippableTeamCard
            name="Priya Patel"
            role="Events Coordinator"
            brief="Priya specializes in creating unforgettable private events, working closely with clients to bring their vision to life with attention to every detail."
            backDetails="Priya has planned over 200 events and loves adding personal touches. Fun fact: She speaks 4 languages! Contact: priya@lamhaa.com"
          />
        </div> */}
      </div>
    </div>
  </section>
)

export default TeamSection 
