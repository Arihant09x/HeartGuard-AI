import React from 'react';
import { Heart, Activity, Coffee, Utensils } from 'lucide-react';

export default function HealthTips() {
  const tips = [
    {
      icon: <Heart className="h-8 w-8 text-red-500" />,
      title: 'Know Your Numbers',
      description: 'Regular monitoring of blood pressure, cholesterol, and blood sugar levels is crucial for heart health.',
      tips: [
        'Check blood pressure at least once a month',
        'Get cholesterol levels tested every 4-6 months',
        'Monitor blood sugar if you have diabetes',
      ],
    },
    {
      icon: <Activity className="h-8 w-8 text-red-500" />,
      title: 'Stay Active',
      description: 'Regular physical activity is essential for maintaining a healthy heart.',
      tips: [
        '30 minutes of moderate exercise daily',
        'Include both cardio and strength training',
        'Take regular walking breaks if you sit for long periods',
      ],
    },
    {
      icon: <Utensils className="h-8 w-8 text-red-500" />,
      title: 'Eat Heart-Healthy',
      description: 'A balanced diet plays a crucial role in maintaining heart health.',
      tips: [
        'Incorporate plenty of fruits and vegetables',
        'Choose whole grains over refined grains',
        'Limit saturated fats and sodium intake',
      ],
    },
    {
      icon: <Coffee className="h-8 w-8 text-red-500" />,
      title: 'Lifestyle Changes',
      description: 'Small lifestyle modifications can have a big impact on heart health.',
      tips: [
        'Quit smoking and avoid secondhand smoke',
        'Limit alcohol consumption',
        'Manage stress through relaxation techniques',
      ],
    },
  ];

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Heart Health Tips</h1>
          <p className="text-xl text-gray-600">
            Expert recommendations for maintaining a healthy heart and preventing cardiovascular disease.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tips.map((tip, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="bg-red-100 p-3 rounded-full mr-4">
                  {tip.icon}
                </div>
                <h2 className="text-2xl font-semibold text-gray-900">{tip.title}</h2>
              </div>
              <p className="text-gray-600 mb-6">{tip.description}</p>
              <ul className="space-y-3">
                {tip.tips.map((item, i) => (
                  <li key={i} className="flex items-center text-gray-700">
                    <span className="h-2 w-2 bg-red-500 rounded-full mr-3"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Additional Resources Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Additional Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <a
              href="#"
              className="block p-6 bg-red-50 rounded-lg hover:bg-red-100 transition duration-200"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Heart Health Guide</h3>
              <p className="text-gray-600">Comprehensive guide to understanding heart health.</p>
            </a>
            <a
              href="#"
              className="block p-6 bg-red-50 rounded-lg hover:bg-red-100 transition duration-200"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Exercise Plans</h3>
              <p className="text-gray-600">Customized exercise plans for heart health.</p>
            </a>
            <a
              href="#"
              className="block p-6 bg-red-50 rounded-lg hover:bg-red-100 transition duration-200"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Healthy Recipes</h3>
              <p className="text-gray-600">Heart-healthy recipes and meal plans.</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}