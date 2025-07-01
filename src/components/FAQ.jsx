import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Why btc3 ORDI or $ATS?",
      answer: "ORDI and ATS are established tokens on the Bitcoin network that provide stability and liquidity for our platform operations."
    },
    {
      question: "How does 3d tokens were reward mechanism for gaming?",
      answer: "3D tokens earned through gameplay and platform participation are distributed as rewards to top performers daily, creating incentives for active engagement."
    },
    {
      question: "What are the platform fees?",
      answer: "Platform fees are competitive and transparent, with a portion going towards reward pools and platform development to ensure sustainability."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Fully Left-Aligned Heading */}
        <h2 className="text-3xl sm:text-3xl font-extrabold text-white mb-12 text-left">
          FAQ
        </h2>

        {/* FAQ Items */}
        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <div key={index} className="space-y-2">
              <button
                onClick={() => toggleFAQ(index)}
                className={`w-full flex justify-between items-center pb-3 pl-1 ${
                  index !== faqs.length - 1 ? 'border-b border-red-600' : ''
                }`}
              >
                <span className="text-left text-lg font-semibold">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="text-red-600 w-5 h-5" />
                ) : (
                  <ChevronDown className="text-red-600 w-5 h-5" />
                )}
              </button>

              {openIndex === index && (
                <p className="text-gray-300 text-sm leading-relaxed pl-1">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
