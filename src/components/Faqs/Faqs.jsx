import React, { useEffect, useState } from 'react'
import styles from './Faqs.module.css';

export default function Faqs() {

  const [activeIndex, setActiveIndex] = useState(null);

  // Function to toggle the accordion
  const toggleFAQ = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Close the currently open accordion
    } else {
      setActiveIndex(index); // Open the clicked accordion
    }
  };

  const faqs = [
    {
      question: "Does Wish TV contain any channels? Where can I get a playlist?",
      answer:
        "No, Wish TV application does not include any channels and no information will be provided about where you can get channels or channel packages. Also, application developers are not responsible for the content uploaded to Wish TV.",
    },
    {
      question: "How can I become a certified Wish TV provider?",
      answer:
        "You can apply on the Wish TV platform or contact the support team for more information on becoming a certified provider.",
    },
    {
      question: "Do you have a loading screen that won't finish?",
      answer:
        "If you experience a loading screen that never finishes, please restart the app or check your internet connection.",
    },
    {
      question: "How can I use Wish TV?",
      answer:
        "Wish TV is simple to use. Download the app, log in with your credentials, and start enjoying your favorite media.",
    },
    {
      question: "Having trouble finding our app in stores?",
      answer:
        "If you're having trouble finding our app, please ensure you're searching in the correct store for your device's OS (Android or iOS).",
    },
    {
      question:
        "My MAC address has changed after I switched to another connection type.",
      answer:
        "If your MAC address changed after switching connection types, you might need to contact support for assistance in updating your credentials.",
    },
    
  ];
  return (
    
    
    
    
    <>
      <section className="bg-[#040404] p-16">
        <h1 className="text-[2rem] text-white text-center mb-5">Frequently Asked Questions</h1>
        <div className="text-white p-4 rounded-lg max-w-2xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              {/* Question */}
              <div
                className={`p-4 cursor-pointer border-solid border-2 border-[#C067C8] rounded-lg flex justify-between items-center ${
                  activeIndex === index ? "border-b border-[#B269B9] bg-white text-black" : ""
                }`}
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-[1rem] font-semibold">{faq.question}</h3>
                <span>
                  {activeIndex === index ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  )}
                </span>
              </div>

              {/* Answer with transition */}
              <div
                className={`${
                  activeIndex === index ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                } overflow-hidden transition-all duration-500 ease-in-out`}
              >
                <div className="p-4 bg-[#F1F1F1] rounded-lg mt-2">
                  <p className="text-base text-black">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  



    
    
  )
}
