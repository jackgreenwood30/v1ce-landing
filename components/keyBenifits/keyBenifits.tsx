import React from 'react'
import Benifit from './benifit'

const KeyBenifits = () => {
  return (
    <div>
      <Benifit 
        variant={1}
        title={<><span className='bg-gradient-to-r from-[#F28D27] to-[#FC664E] bg-clip-text text-transparent'>Networking</span><br/> on Your Terms</>}
        subtitle="Connect with your network using V1CE business cards, phone cases, and QR codes. Experience the ecofriendly revolution in networking."
        altText='V3 Software'
      />
      
      <Benifit 
        variant={2}
        title={<>Your Connections,<br/><span className='bg-gradient-to-r from-[#F28D27] to-[#FC664E] bg-clip-text text-transparent'>Everywhere</span></>}
        subtitle="Streamline networking and brand management on-the-go with V1CE. Manage contacts, schedule meetings, and showcase your products anytime, anywhere."
        altText='V3 Software'
      />
      
      <Benifit 
        variant={1}
        title={<><span className='bg-gradient-to-r from-[#F28D27] to-[#FC664E] bg-clip-text text-transparent'>Nurture Relationships</span>,<br/> Foster Collaboration</>}
        subtitle="Improve team communication and collaboration with shared notes and contact updates. V1CE—made for teams, built for success."
        altText='V3 Software'
      />
      
      <Benifit 
        variant={2}
        title={<>Showcase Your<br/>Products,<span className='bg-gradient-to-r from-[#F28D27] to-[#FC664E] bg-clip-text text-transparent'> Drive Sales</span></>}
        subtitle="Boost your brand and drive sales by showcasing your products directly on your profile. V1CE—a new dimension to your online persona."
        altText='V3 Software'
      />
    </div>
  )
}

export default KeyBenifits