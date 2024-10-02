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
    {/* <section className='bg-[#040404] p-16'>
   
        <h1 className='text-white text-center text-[2rem]'>Frequently Asked Questions</h1>
<div id="accordion-collapse" data-accordion="collapse" className='w-3/4 mx-auto m-5'>
  <h2 id="accordion-collapse-heading-1">
    <button type="button" class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-[#C067C8] rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
      <span>Does Wish tv contain any channels? Where can I get a playlist?</span>
      <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
      </svg>
    </button>
  </h2>
  <div id="accordion-collapse-body-1" class="hidden" aria-labelledby="accordion-collapse-heading-1">
    <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
      <p class="mb-2 text-gray-500 dark:text-gray-400">
        No, wish tv application does not include any channels and no information will be providedabout 
        where you can get channels or channel packages. Also, application developers are notresponsible
         for the content uploaded to wish tv.</p>
      
    </div>
  </div>
  <h2 id="accordion-collapse-heading-2" className='m-0'>
    <button type="button" class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-[#C067C8] focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-2" aria-expanded="false" aria-controls="accordion-collapse-body-2">
      <span>Is there a Figma file available?</span>
      <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
      </svg>
    </button>
  </h2>
  <div id="accordion-collapse-body-2" class="hidden m-0" aria-labelledby="accordion-collapse-heading-2">
    <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
      <p class="mb-2 text-gray-500 dark:text-gray-400">Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.</p>
      <p class="text-gray-500 dark:text-gray-400">Check out the <a href="https://flowbite.com/figma/" class="text-blue-600 dark:text-blue-500 hover:underline">Figma design system</a> based on the utility classes from Tailwind CSS and components from Flowbite.</p>
    </div>
  </div>
  <h2 id="accordion-collapse-heading-3" className='m-0'>
    <button type="button" class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-[#C067C8] focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
      <span>What are the differences between Flowbite and Tailwind UI?</span>
      <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
      </svg>
    </button>
  </h2>
  <div id="accordion-collapse-body-3" class="hidden m-0" aria-labelledby="accordion-collapse-heading-3">
    <div class="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
      <p class="mb-2 text-gray-500 dark:text-gray-400">The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.</p>
      <p class="mb-2 text-gray-500 dark:text-gray-400">However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.</p>
      <p class="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
      <ul class="ps-5 text-gray-500 list-disc dark:text-gray-400">
        <li><a href="https://flowbite.com/pro/" class="text-blue-600 dark:text-blue-500 hover:underline">Flowbite Pro</a></li>
        <li><a href="https://tailwindui.com/" rel="nofollow" class="text-blue-600 dark:text-blue-500 hover:underline">Tailwind UI</a></li>
      </ul>
    </div>
  </div>

</div>


    </section> */}
    <section className='bg-[#040404] p-16'>
      <h1 className='text-[2rem] text-white text-center mb-5'>Frequently Asked Questions</h1>
      <div className="text-white p-4 rounded-lg max-w-2xl mx-auto">
      {faqs.map((faq, index) => (
        <div key={index} className="mb-4">
          {/* Question */}
          <div
            className={`p-4 cursor-pointer border-solid border-2 border-[#C067C8] rounded-lg flex justify-between items-center ${
              activeIndex === index ? "border-b border-[#B269B9]" : ""
            }`}
            onClick={() => toggleFAQ(index)}
          >
            <h3 className="text-lg font-semibold">{faq.question}</h3>
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

          {/* Answer */}
          {activeIndex === index && (
            <div className="p-4 bg-[#F1F1F1] rounded-lg mt-2">
              <p className="text-base text-black">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
    </section>
  ;


    
    </>
  )
}
