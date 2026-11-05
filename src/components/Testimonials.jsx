import Review from "./Review"
import user1 from "../assets/user1.jpg"
import user2 from "../assets/user2.png"
import user3 from "../assets/user3.png"
import user4 from "../assets/user4.png"
import user5 from "../assets/user5.png"

const Testimonials = () => {
  return (
    <section id="testimonials">
      <div className="w-full p-4 sm:p-8 md:p-12 flex flex-col justify-center items-center gap-3 bg-blue-50">
        <h3 className="text-blue-500 font-bold">Testimonials</h3>
        <h1 className="text-xl sm:text-3xl md:text-4xl font-bold">Loved by Businesses Worldwide</h1>
        <p className="mt-2 text-center text-gray-400 font-medium text-xs sm:text-sm md:text-base">See what our customers have to say about their experience with LaunchBoard </p>
      
        <div className="w-full flex overflow-x-auto mt-4 gap-8 scrollbar-hide">
          <Review 
            userPhoto={user1} 
            userName="Sundar Pichhai" 
            designation="CEO, Google"
            desc="LaunchBoard has completely simplified our sales process. We are closing more deals and saving hours every week."/>
        
          <Review 
            userPhoto={user2} 
            userName="Steve Jobs" 
            designation="Founder, Apple"
            desc="Before LaunchBoard, keeping track of incoming leads was a mess. Its analytics and lead management features helped us understand our campaigns better and improve our conversion rates."/>
            
          <Review 
            userPhoto={user3} 
            userName="Bill Gates" 
            designation="Founder, Microsoft"
            desc="What I love most about LaunchBoard is its simplicity. We no longer need multiple tools to manage our sales activities. Everything is organized in one place, making it easier to focus on growing our business."/>
        
          <Review 
            userPhoto={user4} 
            userName="Mark Zuckerburg" 
            designation="Founder, META"
            desc="LaunchBoard has improved the way our sales team works together. Having all our leads and customer interactions in one place has made our workflow smoother and more efficient."/>
        
          <Review 
            userPhoto={user5} 
            userName="Jeff Bezos" 
            designation="Founder, Amazon"
            desc="LaunchBoard has made managing our leads so much easier. We now have a clear overview of our sales pipeline, and our team spends less time on manual tracking and more time closing deals."/>
        
        </div>
      </div>
    </section>
  )
}

export default Testimonials
