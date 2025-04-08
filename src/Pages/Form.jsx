import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import confetti from "canvas-confetti";

const CodathonComponent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [scholarNo, setScholarNo] = useState("");
  const [phone, setPhone] = useState("");
  const [college, setCollege] = useState("MANIT");
  const [branch, setBranch] = useState("");
  const [year, setYear] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [showOtherCollege, setShowOtherCollege] = useState(false);
  const [otherCollege, setOtherCollege] = useState("");

  function triggerSuccessEffects() {
    const audio = new Audio("/success.mp3");
    audio.play().catch((err) => console.error("Audio play failed:", err));

    confetti({
      particleCount: 300,
      spread: 70,
      origin: { y: 0.6 },
    });
  }
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new URLSearchParams();
    formData.append("scholar_no", scholarNo);
    formData.append("phone", phone);
    formData.append("name", name);
    formData.append("email", email);
    formData.append("year", year);
    formData.append("branch", branch);
    formData.append("college", college === "other" ? otherCollege : college);

    try {
      const response = await fetch(
        "https://form.visioncse.tech/student/submit",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
          },
          body: formData.toString(),
        },
      );
      const data = await response.json();
      if (response.ok) {
        setMessage(data.message || "Successfully registered: ");
        triggerSuccessEffects();
        setError("");
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else if (response.status === 409) {
        setMessage(data.message || "Already registered");
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        setError("Registration failed: " + (data.message || "Unknown error"));
        setMessage("");
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } catch (err) {
      console.error("Fetch Error: ", err);
      setError("Error submitting form. Please try again. ");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
  return (
    <div>
      {/* Hero Banner */}
      <div
        className="hero text-primary-content p-6"
        style={{
          backgroundImage: "url('/background.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="hero-content text-center">
          <div>
            <img
              src="/vision.webp"
              alt="Codathon Logo"
              className="h-24 mx-auto mb-4"
            />
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-300 mb-4">
              CODATHON 2025
            </h2>
            <p className="text-md text-gray-300">
              Unleash Your Coding Potential
            </p>
          </div>
        </div>
      </div>

      {/* Registration Form */}
      <div className="p-6 bg-gradient-to-br from-gray-900 to-gray-800 text-white ">
        <div className="max-w-5xl mx-auto bg-black bg-opacity-30 backdrop-blur-md rounded-2xl shadow-lg p-8 ">
          <h3 className="text-xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-300">
            Register for Codathon-2025
          </h3>

          {message && (
            <div className="mb-4 p-3 rounded-xl bg-green-800 text-white text-sm">
              {message}
            </div>
          )}

          {error && (
            <div className="mb-4 p-3 rounded-xl bg-red-800 text-white text-sm">
              {error}
            </div>
          )}

          <form className="space-y-3" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-x-12">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your Full Name"
                  className="w-full px-4 py-2 rounded-xl bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-400"
                  required
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Email (same as on HackerEarth)
                </label>
                <input
                  type="email"
                  placeholder="Enter email here"
                  className="w-full px-4 py-2 rounded-xl bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-400"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="10-digit number"
                  pattern="[6-9][0-9]{9}"
                  className="w-full px-4 py-2 rounded-xl bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-400"
                  required
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Scholar Number
                </label>
                <input
                  type="text"
                  placeholder="Scholar No"
                  className="w-full px-4 py-2 rounded-xl bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-400"
                  required
                  onChange={(e) => setScholarNo(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  College
                </label>
                <select
                  className="w-full px-4 py-2 rounded-xl bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-400"
                  value={college}
                  onChange={(e) => {
                    setCollege(e.target.value);
                    setShowOtherCollege(e.target.value === "other");
                  }}
                  required
                >
                  <option value="MANIT">MANIT</option>
                  <option value="other">Other</option>
                </select>
                {showOtherCollege && (
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1 mt-5">
                      Enter College Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your College Name"
                      className="w-full px-4 py-2 rounded-xl bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-400"
                      value={otherCollege}
                      onChange={(e) => setOtherCollege(e.target.value)}
                      required
                    />
                  </div>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Branch
                </label>
                <input
                  type="text"
                  placeholder="CSE / EE / ECE etc."
                  className="w-full px-4 py-2 rounded-xl bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-400"
                  required
                  onChange={(e) => setBranch(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Year
                </label>
                <select
                  className="w-full px-4 py-2 rounded-xl bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-400"
                  required
                  onChange={(e) => setYear(e.target.value)}
                >
                  <option value="">Select Year</option>
                  <option>1st</option>
                  <option>2nd</option>
                  <option>3rd</option>
                  <option>4th</option>
                </select>
              </div>
            </div>

            <div className="pt-4 text-center">
              <button
                type="submit"
                className="px-6 font-semibold py-2 rounded-xl bg-green-500 text-black  shadow hover:bg-green-400 active:scale-95 transition duration-150"
              >
                <span className="inline-flex items-center gap-2">
                  Register now <ArrowRight className="w-4 h-4" />
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-black p-4 text-center text-xs text-gray-500">
        <p>
          Organized by Vision CSE • Department of Computer Science & Engineering
        </p>
      </div>
    </div>
  );
};

export default CodathonComponent;
