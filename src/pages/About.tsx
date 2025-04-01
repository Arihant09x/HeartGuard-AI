import React from "react";
import { Heart, Award, Users } from "lucide-react";

export default function About() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div
          className="text-center mb-16"
          style={{
            backgroundImage:
              "url('https://www.healthstaffrecruitment.com.au/wp-content/uploads/2018/05/Portrait-of-cheerful-doctors.jpg')", // Update with the correct path to the image
            backgroundSize: "cover",
            backgroundPosition: "center 15%",
            padding: "4rem", // Adjust padding as needed
          }}
        >
          <h1 className="text-4xl font-bold text-white mb-4">
            About HeartGuard AI
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            We're dedicated to revolutionizing heart health prediction through
            advanced AI technology, making it easier for everyone to monitor and
            understand their cardiovascular health.
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-red-50 rounded-2xl p-8 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
          </div>
          <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
            To empower individuals with accessible, accurate, and actionable
            insights about their heart health, leveraging cutting-edge AI
            technology to prevent heart disease and promote healthier lives.
          </p>
        </div>

        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6">
            <div className="bg-red-100 p-4 rounded-full inline-block mb-4">
              <Heart className="h-8 w-8 text-red-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Care & Compassion</h3>
            <p className="text-gray-600">
              We put heart health first, ensuring every prediction and
              recommendation is made with care.
            </p>
          </div>
          <div className="text-center p-6">
            <div className="bg-red-100 p-4 rounded-full inline-block mb-4">
              <Award className="h-8 w-8 text-red-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Excellence</h3>
            <p className="text-gray-600">
              We strive for the highest accuracy and reliability in our AI
              predictions.
            </p>
          </div>
          <div className="text-center p-6">
            <div className="bg-red-100 p-4 rounded-full inline-block mb-4">
              <Users className="h-8 w-8 text-red-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Accessibility</h3>
            <p className="text-gray-600">
              Making advanced heart health monitoring available to everyone.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
