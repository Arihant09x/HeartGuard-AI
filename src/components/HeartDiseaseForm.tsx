import React, { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { Heart, Loader2 } from "lucide-react";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

export default function HeartDiseaseForm() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");
  const [formData, setFormData] = useState({
    age: "",
    sex: "male",
    chestPain: "typical",
    bloodPressure: "",
    cholesterol: "",
    bloodSugar: "false",
    restingECG: "normal",
    maxHeartRate: "",
    exerciseAngina: "no",
    oldpeak: "",
    stSlope: "up",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const prompt = `Based on the following heart health data, analyze the risk of heart disease and provide detailed recommendations:
      Age: ${formData.age}
      Sex: ${formData.sex}
      Chest Pain Type: ${formData.chestPain}
      Resting Blood Pressure: ${formData.bloodPressure} mm Hg
      Cholesterol: ${formData.cholesterol} mg/dl
      Fasting Blood Sugar > 120 mg/dl: ${formData.bloodSugar}
      Resting ECG: ${formData.restingECG}
      Maximum Heart Rate: ${formData.maxHeartRate}
      Exercise Induced Angina: ${formData.exerciseAngina}
      ST Depression (Oldpeak): ${formData.oldpeak}
      ST Slope: ${formData.stSlope}

      Please provide:
      1. Risk Assessment
      2. Key Findings
      3. Lifestyle Recommendations
      4. Follow-up Suggestions`;

      const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
      const result = await model.generateContent(prompt);
      const response = await result.response;
      setResult(response.text());
    } catch (error) {
      console.error("Error:", error);
      setResult(
        "An error occurred while processing your request. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="flex items-center justify-center mb-8">
          <Heart className="h-12 w-12 text-red-500 mr-4" />
          <h1 className="text-3xl font-bold text-gray-800">
            Heart Disease Risk Assessment
          </h1>
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Age
            </label>
            <input
              type="number"
              value={formData.age}
              onChange={(e) =>
                setFormData({ ...formData, age: e.target.value })
              }
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Sex
            </label>
            <select
              value={formData.sex}
              onChange={(e) =>
                setFormData({ ...formData, sex: e.target.value })
              }
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Chest Pain Type
            </label>
            <select
              value={formData.chestPain}
              onChange={(e) =>
                setFormData({ ...formData, chestPain: e.target.value })
              }
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
            >
              <option value="typical">Typical Angina</option>
              <option value="atypical">Atypical Angina</option>
              <option value="nonanginal">Non-anginal Pain</option>
              <option value="asymptomatic">Asymptomatic</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Resting Blood Pressure (mm Hg)
            </label>
            <input
              type="number"
              value={formData.bloodPressure}
              onChange={(e) =>
                setFormData({ ...formData, bloodPressure: e.target.value })
              }
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Cholesterol (mg/dl)
            </label>
            <input
              type="number"
              value={formData.cholesterol}
              onChange={(e) =>
                setFormData({ ...formData, cholesterol: e.target.value })
              }
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Maximum Heart Rate
            </label>
            <input
              type="number"
              value={formData.maxHeartRate}
              onChange={(e) =>
                setFormData({ ...formData, maxHeartRate: e.target.value })
              }
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
              required
            />
          </div>

          <div className="col-span-2">
            <button
              type="submit"
              disabled={loading}
              className="w-full  bg-red-500 hover:bg-red-600 transition  text-white py-3 px-6 rounded-lg  duration-200 flex items-center justify-center space-x-2"
            >
              {loading ? (
                <Loader2 className="animate-spin h-5 w-5" />
              ) : (
                <>
                  <Heart className="h-5 w-5" />
                  <span>Analyze Risk</span>
                </>
              )}
            </button>
          </div>
        </form>

        {result && (
          <div className="mt-8 p-6 bg-gray-50 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Analysis Results</h2>
            <div className="prose max-w-none">
              {result.split("\n").map((line, index) => (
                <p key={index} className="mb-2">
                  {line}
                </p>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
