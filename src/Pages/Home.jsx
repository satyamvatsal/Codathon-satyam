import React from "react";
import {
  Calendar,
  Code,
  Trophy,
  Users,
  BookOpen,
  Star,
  Globe,
  MapPin,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const CodathonComponent = () => {
  const navigate = useNavigate();
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

      {/* Main content */}
      <div className="card-body bg-gray-900 text-gray-200 p-6">
        {/* Event details */}
        <div className="flex gap-16 mb-8 items-start justify-around flex-wrap">
          <div className="flex items-start gap-4">
            <Calendar className="text-green-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-lg text-white">Date & Time</h3>
              <p>April 14, 2025</p>
              <p>9:00 AM Onwards</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Users className="text-green-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-lg text-white">Participants</h3>

              <p>Open for all Branches</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <MapPin className="text-green-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-lg text-white">Venue</h3>
              <p>Online (HakerEarth)</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Code className="text-green-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-lg text-white">Challenge</h3>
              <p>Programming Competition</p>
            </div>
          </div>
        </div>
        {/* Registration section */}
        <div className="text-center my-6">
          <button
            className="btn bg-green-600 hover:bg-green-700 text-white border-green-700 btn-lg rounded-xl text-sm"
            onClick={() => navigate("/register")}
          >
            REGISTER NOW
          </button>
          <p className="mt-4 text-sm text-gray-400">
            Registration closes April 13, 2025
          </p>
        </div>
        {/* About the event */}
        <div className="mb-8">
          <div className="collapse collapse-plus bg-gray-800 border border-gray-700 rounded-box">
            <input type="checkbox" defaultChecked />
            <div className="collapse-title text-xl font-medium text-green-300">
              About the Event
            </div>
            <div className="collapse-content text-gray-300">
              <p className="mb-4">
                Join Vision CSE's premier programming contest, Codathon, where
                solo participants compete to solve real-world problems through
                innovative coding solutions. This challenging competition tests
                your coding skills, problem-solving abilities, and logical
                thinking within a set time frame.
              </p>
              <p>
                Whether you're a beginner or an experienced coder, Codathon is
                your chance to prove your skills, learn from the best, and
                compete for exciting prizes!
              </p>
            </div>
          </div>
        </div>

        {/* About Vision CSE Society */}
        <div className="mb-8">
          <div className="collapse collapse-plus bg-gray-800 border border-gray-700 rounded-box">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium text-green-300">
              About Vision CSE
            </div>
            <div className="collapse-content text-gray-300">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/2">
                  <h4 className="font-semibold flex items-center gap-2 mb-2 text-white">
                    <BookOpen size={18} className="text-teal-400" /> Our Mission
                  </h4>
                  <p className="mb-4">
                    VISION is determined to foster a culture of innovation,
                    learning, and skill development among students by providing
                    a suitable platform for the students to enhance their
                    technical skills. We are consistently working to impart
                    technical skills and knowledge by conducting various
                    workshops, hands-on training, hackathons, and technical
                    competitions. VISION encourages the sharing of knowledge and
                    expertise among students and motivating them for research
                    and development work in any engineering-related field.
                  </p>

                  <h4 className="font-semibold flex items-center gap-2 mb-2 text-white">
                    <Star size={18} className="text-teal-400" /> Core Values
                  </h4>
                  <ul className="list-disc pl-5 mb-4">
                    <li>Innovation and creativity</li>
                    <li>Collaborative learning</li>
                    <li>Technical excellence</li>
                    <li>Inclusivity and diversity</li>
                  </ul>
                </div>

                <div className="md:w-1/2">
                  <h4 className="font-semibold flex items-center gap-2 mb-2 text-white">
                    <Globe size={18} className="text-teal-400" /> Our Activities
                  </h4>
                  <div className="flex space-y-2 gap-1 flex-wrap">
                    <div className="badge badge-primary bg-green-900 text-green-200 border-green-700">
                      Hackathons
                    </div>
                    <div className="badge badge-primary bg-green-900 text-green-200 border-green-700">
                      Tech Talks
                    </div>
                    <div className="badge badge-primary bg-green-900 text-green-200 border-green-700">
                      Workshops
                    </div>
                    <div className="badge badge-primary bg-green-900 text-green-200 border-green-700">
                      Mentorship
                    </div>
                    <div className="badge badge-primary bg-green-900 text-green-200 border-green-700">
                      Project Showcases
                    </div>
                  </div>

                  <p className="mt-4">
                    Vision CSE has grown into one of the most active and
                    respected technical societies on campus, with successful
                    alumni working at leading tech companies worldwide.
                  </p>
                </div>
              </div>
            </div>
          </div>
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
