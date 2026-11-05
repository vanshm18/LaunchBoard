import { useState } from "react"
import { FaPlus, FaMinus } from "react-icons/fa"

const faqs = [
  {
    question: "What is LaunchBoard?",
    answer: "LaunchBoard is an all-in-one platform that helps businesses manage leads, track sales activities, monitor performance, and organize their workflows."
  },
  {
    question: "Who can use LaunchBoard?",
    answer: "LaunchBoard is designed for startups, small businesses, entrepreneurs, and sales teams looking to simplify their business operations."
  },
  {
    question: "Is there a free plan available?",
    answer: "Yes! You can start with our free plan and explore the essential features before upgrading to a paid plan."
  },
  {
    question: "Can I manage my team with LaunchBoard?",
    answer: "Absolutely. LaunchBoard helps you organize your team, manage projects, track activities, and collaborate more efficiently."
  },
  {
    question: "Can I upgrade or cancel my subscription anytime?",
    answer: "Yes. You can upgrade, downgrade, or cancel your subscription whenever you need to."
  },
  {
    question: "Is my business data secure?",
    answer: "We prioritize data security and use secure practices to help protect your business information."
  }
]

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section id="faq">
      <div className="w-full p-4 sm:p-8 md:p-12 flex flex-col justify-center items-center gap-3">

        <h3 className="text-blue-500 font-bold">FAQs</h3>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">Frequently Asked Questions</h1>
        <p className="mt-2 mb-8 text-center text-gray-400 font-medium text-xs sm:text-sm md:text-base">Everything you need to know about LaunchBoard.</p>

        <div className="w-full max-w-3xl flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl p-5 bg-white cursor-pointer"
              onClick={() => toggleFAQ(index)} >
                
              <div className="w-full flex justify-between items-center gap-4 text-left ">

                <span className="font-semibold text-sm sm:text-base">
                  {faq.question}
                </span>

                {activeIndex === index ? (
                  <FaMinus className="text-blue-500 shrink-0" />
                ) : (
                  <FaPlus className="text-blue-500 shrink-0" />
                )}
              </div>

              {activeIndex === index && (
                <p className="text-gray-500 text-sm leading-relaxed mt-4">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default FAQ