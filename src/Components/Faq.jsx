import React, { useState } from "react";

const Faq = () => {
  const faqs = [
    {
      question: "What is the mission of Boost Engine?",
      answer: "Our mission is to help businesses grow by providing top-notch marketing and analytics solutions.",
    },
    {
      question: "What services do we offer?",
      answer: "We offer services such as digital marketing, SEO, analytics, and content creation.",
    },
    {
      question: "How can you collaborate with us?",
      answer: "You can collaborate with us by contacting our team through email or visiting our website.",
    },
    {
      question: "How do we ensure quality in our services?",
      answer: "We ensure quality by conducting thorough research, employing expert professionals, and using industry best practices.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
      <div className="w-full max-w-2xl bg-white rounded-lg">
        <h2 className="text-4xl font-semibold mb-12 text-center">Frequently Asked Questions</h2>
        <div>
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-300 mb-4">
              <button
                className="w-full flex justify-between items-center text-left p-4 text-lg font-medium text-gray-800 hover:text-blue-600 focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <span className={`transform transition-transform ${openIndex === index ? "rotate-180" : "rotate-0"}`}>
                  ⌄
                </span>
              </button>
              {openIndex === index && (
                <p className="p-4 text-gray-600 bg-gray-50">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    
  );
};

export default Faq;
