import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'What is HeartGuard AI?',
      answer: 'HeartGuard AI is an advanced heart disease prediction platform that uses artificial intelligence to analyze various health parameters and provide insights about your heart health risk factors.',
    },
    {
      question: 'How accurate are the predictions?',
      answer: 'Our AI model has been trained on extensive medical data and validated by healthcare professionals. While highly accurate, the predictions should be used as a screening tool and not replace professional medical advice.',
    },
    {
      question: 'Is my health data secure?',
      answer: 'Yes, we take data security very seriously. All your health information is encrypted and stored securely following HIPAA guidelines. We never share your personal information with third parties.',
    },
    {
      question: 'How often should I use the prediction tool?',
      answer: 'We recommend using the prediction tool every 3-6 months, or whenever you notice significant changes in your health parameters. Regular monitoring helps track changes in your heart health risk over time.',
    },
    {
      question: 'What health parameters do I need to provide?',
      answer: 'The key parameters include age, blood pressure, cholesterol levels, blood sugar, heart rate, and lifestyle factors. The more accurate information you provide, the more precise our predictions will be.',
    },
    {
      question: 'Can I use HeartGuard AI if I already have heart disease?',
      answer: "Yes, HeartGuard AI can be used to monitor your heart health even if you have existing heart conditions. However, always follow your healthcare provider's guidance and use our tool as a supplementary resource.",
    },
    {
      question: 'How do I interpret the results?',
      answer: 'Our results provide a detailed breakdown of your heart health risk factors and personalized recommendations. We use a color-coded system and clear explanations to help you understand your results easily.',
    },
    {
      question: 'What should I do if the prediction shows high risk?',
      answer: 'If your prediction indicates high risk, we recommend consulting with a healthcare provider for a thorough evaluation. Our results can be shared with your doctor to aid in their assessment.',
    },
  ];

  return (
    <div className="py-12 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-600">
            Find answers to common questions about HeartGuard AI and heart health prediction.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 flex justify-between items-center"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-gray-50">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Additional Help Section */}
        <div className="mt-16 text-center bg-red-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Still Have Questions?</h2>
          <p className="text-gray-600 mb-6">
            Can't find the answer you're looking for? Please feel free to reach out to our support team.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-500 hover:bg-red-600"
          >
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
}