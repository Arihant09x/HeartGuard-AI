import React from "react";
import { Link } from "react-router-dom";
import { Heart, Activity, Award, Users } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section
        className="relative text-white py-20"
        style={{
          backgroundImage:
            "url('https://nationalparkmedical.com/sites/nationalpark/assets/uploads/CVOR.jpg')", // Update with the correct path to the image
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI-Powered Heart Disease Prediction
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Get instant insights about your heart health using advanced AI
              technology
            </p>
            <Link
              to="/predict"
              className="inline-flex items-center bg-white text-red-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
            >
              <Heart className="mr-2 h-5 w-5" />
              Start Prediction
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Why Choose HeartGuard AI?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-red-100 p-4 rounded-full inline-block mb-4">
                <Activity className="h-8 w-8 text-red-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Accurate Predictions
              </h3>
              <p className="text-gray-600">
                Advanced AI algorithms provide highly accurate heart disease
                risk assessments
              </p>
            </div>
            <div className="text-center p-6">
              <div className="bg-red-100 p-4 rounded-full inline-block mb-4">
                <Award className="h-8 w-8 text-red-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Analysis</h3>
              <p className="text-gray-600">
                Backed by medical research and professional healthcare insights
              </p>
            </div>
            <div className="text-center p-6">
              <div className="bg-red-100 p-4 rounded-full inline-block mb-4">
                <Users className="h-8 w-8 text-red-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">User-Friendly</h3>
              <p className="text-gray-600">
                Simple and intuitive interface for easy health monitoring
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Take Control of Your Heart Health Today
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Get started with our AI-powered heart disease prediction tool
          </p>
          <Link
            to="/predict"
            className="inline-flex items-center bg-red-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-red-600 transition"
          >
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
}
