import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';

const SectionCard = ({ title, subtitle, children }) => (
  <div className="bg-zinc-900 p-6 sm:p-8 rounded-2xl border border-zinc-800">
    <div className="mb-8">
      <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">{title}</h2>
      {subtitle && <p className="text-zinc-400 text-sm font-medium mt-1">{subtitle}</p>}
    </div>
    {children}
  </div>
);

const Registration = () => {
  const [teamInfo, setTeamInfo] = useState({
    teamName: '',
    teamSize: '',
    track: '',
    source: ''
  });

  const [leader, setLeader] = useState({
    name: '', email: '', phone: '', college: '', customCollege: '',
    city: '', state: '', degree: '', year: '', branch: '',
    linkedin: '', github: '', food: '', tshirt: ''
  });

  const [member2, setMember2] = useState({
    name: '', email: '', phone: '', college: '', customCollege: '',
    city: '', state: '', degree: '', year: '', branch: '',
    linkedin: '', github: '', skills: '', food: '', tshirt: ''
  });

  const [member3, setMember3] = useState({
    name: '', email: '', phone: '', college: '', customCollege: '',
    city: '', state: '', degree: '', year: '', branch: '',
    linkedin: '', github: '', skills: '', food: '', tshirt: ''
  });

  const [member4, setMember4] = useState({
    name: '', email: '', phone: '', college: '', customCollege: '',
    city: '', state: '', degree: '', year: '', branch: '',
    linkedin: '', github: '', skills: '', food: '', tshirt: ''
  });

  const [compliance, setCompliance] = useState({
    codeOfConduct: false,
    sponsorConsent: false,
    communityInterest: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // { type: 'success' | 'error', message: '' }

  const topColleges = [
    'Indian Institute of Technology Bombay, Mumbai',
    'Veermata Jijabai Technological Institute, Mumbai',
    'Institute of Chemical Technology, Mumbai',
    'Sardar Patel Institute of Technology, Mumbai',
    'Dwarkadas J Sanghvi College of Engineering, Mumbai',
    'K J Somaiya College of Engineering, Mumbai',
    'K J Somaiya Institute of Technology, Mumbai',
    'Thadomal Shahani Engineering College, Mumbai',
    'Fr Conceicao Rodrigues College of Engineering, Mumbai',
    'Vidyalankar Institute of Technology, Mumbai',
    'Shah and Anchor Kutchhi Engineering College, Mumbai',
    'Don Bosco Institute of Technology, Mumbai',
    'Atharva College of Engineering, Mumbai',
    'Vivekanand Education Society Institute of Technology, Mumbai',
    'Agnel Institute of Engineering and Design, Mumbai',
    'Rajiv Gandhi Institute of Technology, Mumbai',
    'St Francis Institute of Technology, Mumbai',
    'Rizvi College of Engineering, Mumbai',
    'Anjuman I Islam M H Saboo Siddik College of Engineering, Mumbai',
    'Watumull Institute of Electronics Engineering and Computer Technology, Mumbai',
    'Sardar Patel College of Engineering, Mumbai',
    'Mukesh Patel School of Technology Management and Engineering, Mumbai',
    'Xavier Institute of Engineering, Mumbai',
    'Universal College of Engineering, Vasai',
    'St John College of Engineering and Management, Palghar',
    'A P Shah Institute of Technology, Thane',
    'Datta Meghe College of Engineering, Navi Mumbai',
    'Smt Indira Gandhi College of Engineering, Navi Mumbai',
    'Lokmanya Tilak College of Engineering, Navi Mumbai',
    'SIES Graduate School of Technology, Navi Mumbai',
    'Terna Engineering College, Navi Mumbai',
    'Ramrao Adik Institute of Technology, Navi Mumbai',
    'Fr C Rodrigues Institute of Technology, Navi Mumbai',
    'Bharati Vidyapeeth College of Engineering, Navi Mumbai',
    'A C Patil College of Engineering, Navi Mumbai',
    'Saraswati College of Engineering, Navi Mumbai',
    'Pillai College of Engineering, Navi Mumbai',
    'Pillai HOC College of Engineering, Rasayani',
    'ITM Institute of Technology, Navi Mumbai',
    'Amity University Engineering, Navi Mumbai',
    'NMIMS School of Technology Management and Engineering, Navi Mumbai',
    'MGM College of Engineering and Technology, Navi Mumbai',
    'Yadavrao Tasgaonkar Institute of Engineering and Technology, Karjat',
    'Yadavrao Tasgaonkar College of Engineering and Management, Karjat',
    'Dilkap Research Institute of Engineering and Management Studies, Neral',
    'Alamuri Ratnamala Institute of Engineering and Technology, Thane',
    'Bhavans College of Engineering, Mumbai',
    'Parshvanath College of Engineering, Thane',
    'Pravin Patil College of Engineering, Thane',
    'Vishwatmak Om Gurudev College of Engineering, Shahapur',
    'Saraswati Institute of Technology, Mumbai',
    'Ideal Institute of Technology, Wada',
    'Viva Institute of Technology, Virar',
    'Shivajirao S Jondhale College of Engineering, Dombivli',
    'Shree L R Tiwari College of Engineering, Mira Road',
    'Theem College of Engineering, Boisar',
    'KC College of Engineering, Thane',
    'Navjeevan Education Society College of Engineering, Thane',
    'Indala College of Engineering, Bhiwandi',
    'YMT College of Engineering, Navi Mumbai',
    'Vishwaniketan Institute of Management Entrepreneurship and Engineering Technology, Navi Mumbai',
    'Veermata Jijabai Technological Institute Polytechnic, Matunga Mumbai',
    'Government Polytechnic Mumbai, Bandra East Mumbai',
    'Government Polytechnic Thane, Thane West',
    'Government Polytechnic Navi Mumbai, Vashi Navi Mumbai',
    'Bharati Vidyapeeth Institute of Technology Polytechnic, Kharghar Navi Mumbai',
    'Vidyalankar Polytechnic, Wadala Mumbai',
    'Shri Bhagubhai Mafatlal Polytechnic, Vile Parle West Mumbai',
    'Sardar Patel Polytechnic, Andheri West Mumbai',
    'Thakur Polytechnic, Kandivali East Mumbai',
    'Vivekanand Education Society Polytechnic, Chembur Mumbai',
    'Shah and Anchor Kutchhi Polytechnic, Chembur Mumbai',
    'Fr Agnel Polytechnic, Bandra West Mumbai',
    'Agnel Polytechnic, Vashi Navi Mumbai',
    'Datta Meghe Polytechnic, Airoli Navi Mumbai',
    'Saraswati Polytechnic, Kharghar Navi Mumbai',
    'Pillai Polytechnic, New Panvel Navi Mumbai',
    'Terna Polytechnic, Nerul Navi Mumbai',
    'Navjeevan Education Society Polytechnic, Thane West',
    'Alamuri Ratnamala Polytechnic, Shahapur Thane',
    'Indala Polytechnic, Bhiwandi Thane',
    'Pravin Patil Polytechnic, Bhayandar East',
    'Viva Polytechnic, Virar West',
    'Theem Polytechnic, Boisar Palghar',
    'Shivajirao S Jondhale Polytechnic, Dombivli East',
    'KC Polytechnic, Thane East',
    'Government Polytechnic Palghar, Palghar',
    'Government Polytechnic Pen, Raigad',
    'Other (Not Listed), Other',
    'Outside Mumbai / Outside Maharashtra, Outside'
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const payload = { teamInfo, leader, member2, compliance };
      if (parseInt(teamInfo.teamSize) >= 3) payload.member3 = member3;
      if (parseInt(teamInfo.teamSize) >= 4) payload.member4 = member4;

      const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";
      const response = await fetch(`${API_URL}/api/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({ type: "success", message: data.message || "Registration successful! 🎉" });
        // Reset form
        setTeamInfo({ teamName: '', teamSize: '', track: '', source: '' });
        const emptyMember = { name: '', email: '', phone: '', college: '', customCollege: '', city: '', state: '', degree: '', year: '', branch: '', linkedin: '', github: '', food: '', tshirt: '' };
        setLeader({ ...emptyMember });
        setMember2({ ...emptyMember });
        setMember3({ ...emptyMember });
        setMember4({ ...emptyMember });
        setCompliance({ codeOfConduct: false, sponsorConsent: false, communityInterest: '' });
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setSubmitStatus({ type: "error", message: data.message || "Registration failed. Please try again." });
      }
    } catch (error) {
      console.error("Submit error:", error);
      setSubmitStatus({ type: "error", message: "Network error. Please make sure the server is running and try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputStyle = "w-full p-4 bg-zinc-800 border border-zinc-700 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all duration-200";
  const selectStyle = "w-full p-4 bg-zinc-800 border border-zinc-700 rounded-xl text-white focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all duration-200";
  const labelStyle = "block text-sm font-semibold text-zinc-300 mb-2";

  const renderMemberFields = (member, setMember, isRequired = true) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <label className={labelStyle}>Full Name {isRequired && <span className="text-yellow-500">*</span>}</label>
        <input type="text" placeholder="Enter full name" value={member.name}
          onChange={(e) => setMember({ ...member, name: e.target.value })}
          className={inputStyle} required={isRequired} />
      </div>
      <div>
        <label className={labelStyle}>Email Address {isRequired && <span className="text-yellow-500">*</span>}</label>
        <input type="email" placeholder="Enter email address" value={member.email}
          onChange={(e) => setMember({ ...member, email: e.target.value })}
          className={inputStyle} required={isRequired} />
      </div>
      <div>
        <label className={labelStyle}>Phone Number {isRequired && <span className="text-yellow-500">*</span>}</label>
        <input type="tel" placeholder="Enter phone number" value={member.phone}
          onChange={(e) => setMember({ ...member, phone: e.target.value })}
          className={inputStyle} required={isRequired} />
      </div>
      <div>
        <label className={labelStyle}>College / University {isRequired && <span className="text-yellow-500">*</span>}</label>
        <select value={member.college}
          onChange={(e) => setMember({ ...member, college: e.target.value })}
          className={selectStyle} required={isRequired}>
          <option value="">Select College</option>
          {topColleges.map((c) => <option key={c} value={c}>{c}</option>)}
        </select>
      </div>
      {(member.college === 'Other (Not Listed), Other' || member.college === 'Outside Mumbai / Outside Maharashtra, Outside') && (
        <div className="md:col-span-2">
          <label className={labelStyle}>Enter College Name {isRequired && <span className="text-yellow-500">*</span>}</label>
          <input type="text" placeholder="Enter your college name" value={member.customCollege || ''}
            onChange={(e) => setMember({ ...member, customCollege: e.target.value })}
            className={inputStyle} required={isRequired} />
        </div>
      )}
      <div>
        <label className={labelStyle}>City {isRequired && <span className="text-yellow-500">*</span>}</label>
        <input type="text" placeholder="Enter city" value={member.city}
          onChange={(e) => setMember({ ...member, city: e.target.value })}
          className={inputStyle} required={isRequired} />
      </div>
      <div>
        <label className={labelStyle}>State {isRequired && <span className="text-yellow-500">*</span>}</label>
        <input type="text" placeholder="Enter state" value={member.state}
          onChange={(e) => setMember({ ...member, state: e.target.value })}
          className={inputStyle} required={isRequired} />
      </div>
      <div>
        <label className={labelStyle}>Degree {isRequired && <span className="text-yellow-500">*</span>}</label>
        <select value={member.degree}
          onChange={(e) => setMember({ ...member, degree: e.target.value })}
          className={selectStyle} required={isRequired}>
          <option value="">Select Degree</option>
          <option value="B.Tech">B.Tech</option>
          <option value="BBA">BBA</option>
          <option value="BCA">BCA</option>
          <option value="MBA">MBA</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div>
        <label className={labelStyle}>Year of Study {isRequired && <span className="text-yellow-500">*</span>}</label>
        <select value={member.year}
          onChange={(e) => setMember({ ...member, year: e.target.value })}
          className={selectStyle} required={isRequired}>
          <option value="">Select Year</option>
          <option value="1st">1st Year</option>
          <option value="2nd">2nd Year</option>
          <option value="3rd">3rd Year</option>
          <option value="4th">4th Year</option>
          <option value="PG">Postgraduate</option>
        </select>
      </div>
      <div>
        <label className={labelStyle}>Branch / Specialization {isRequired && <span className="text-yellow-500">*</span>}</label>
        <input type="text" placeholder="Enter branch/specialization" value={member.branch}
          onChange={(e) => setMember({ ...member, branch: e.target.value })}
          className={inputStyle} required={isRequired} />
      </div>
      <div>
        <label className={labelStyle}>LinkedIn Profile URL</label>
        <input type="url" placeholder="https://linkedin.com/in/yourprofile" value={member.linkedin}
          onChange={(e) => setMember({ ...member, linkedin: e.target.value })}
          className={inputStyle} />
      </div>
      <div>
        <label className={labelStyle}>GitHub / Portfolio URL</label>
        <input type="url" placeholder="https://github.com/yourusername" value={member.github}
          onChange={(e) => setMember({ ...member, github: e.target.value })}
          className={inputStyle} />
      </div>

      <div>
        <label className={labelStyle}>Food Preference {isRequired && <span className="text-yellow-500">*</span>}</label>
        <select value={member.food}
          onChange={(e) => setMember({ ...member, food: e.target.value })}
          className={selectStyle} required={isRequired}>
          <option value="">Select Food Preference</option>
          <option value="Veg">Vegetarian</option>
          <option value="Non-Veg">Non-Vegetarian</option>
          <option value="Jain">Jain</option>
          <option value="Vegan">Vegan</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div>
        <label className={labelStyle}>T-Shirt Size {isRequired && <span className="text-yellow-500">*</span>}</label>
        <select value={member.tshirt}
          onChange={(e) => setMember({ ...member, tshirt: e.target.value })}
          className={selectStyle} required={isRequired}>
          <option value="">Select Size</option>
          <option value="S">Small (S)</option>
          <option value="M">Medium (M)</option>
          <option value="L">Large (L)</option>
          <option value="XL">Extra Large (XL)</option>
          <option value="XXL">Double Extra Large (XXL)</option>
        </select>
      </div>
    </div>
  );


  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar isInternalPage={true} />

      {/* Subtle ambient glow — not a gradient, just soft blurred circles */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 pt-28 sm:pt-32 pb-20">

        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-2 h-2 bg-yellow-500 rounded-full" />
            <span className="text-yellow-500 text-xs sm:text-sm font-bold uppercase tracking-[0.4em]">
              Registration
            </span>
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-none mb-6 tracking-tight font-display">
            JOIN THE <span className="text-yellow-500">CORE</span>
          </h1>
          <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Form your dream team and showcase your innovation at <span className="text-white font-semibold">Navi Mumbai's premier hackathon</span>.
          </p>
        </div>

        {/* Status Banner */}
        {submitStatus && (
          <div className={`p-5 rounded-2xl border text-center font-bold text-lg mb-4 ${submitStatus.type === 'success'
            ? 'bg-green-500/10 border-green-500/30 text-green-400'
            : 'bg-red-500/10 border-red-500/30 text-red-400'
            }`}>
            {submitStatus.message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-8">

          {/* 01 — Team Info */}
          <SectionCard title="Team Details" subtitle="Basic information about your squad">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <label className={labelStyle}>Team Name <span className="text-yellow-500">*</span></label>
                <input type="text" placeholder="Enter team name" value={teamInfo.teamName}
                  onChange={(e) => setTeamInfo({ ...teamInfo, teamName: e.target.value })}
                  className={inputStyle} required />
              </div>
              <div>
                <label className={labelStyle}>Team Size <span className="text-yellow-500">*</span></label>
                <select value={teamInfo.teamSize}
                  onChange={(e) => setTeamInfo({ ...teamInfo, teamSize: e.target.value })}
                  className={selectStyle} required>
                  <option value="">Select Team Size</option>
                  <option value="2">2 Members (1 Leader + 1 Member)</option>
                  <option value="3">3 Members (1 Leader + 2 Members)</option>
                  <option value="4">4 Members (1 Leader + 3 Members)</option>
                </select>
              </div>
              <div>
                <label className={labelStyle}>Preferred Track <span className="text-yellow-500">*</span></label>
                <select value={teamInfo.track}
                  onChange={(e) => setTeamInfo({ ...teamInfo, track: e.target.value })}
                  className={selectStyle} required>
                  <option value="">Select Track</option>
                  <option value="AI/ML">AI/ML</option>
                  <option value="Web3">Web3</option>
                  <option value="FinTech">FinTech</option>
                  <option value="Open Innovation">Open Innovation</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="md:col-span-2 lg:col-span-3">
                <label className={labelStyle}>How did you hear about us? <span className="text-yellow-500">*</span></label>
                <select value={teamInfo.source}
                  onChange={(e) => setTeamInfo({ ...teamInfo, source: e.target.value })}
                  className={selectStyle} required>
                  <option value="">Select Source</option>
                  <option value="Instagram">Instagram</option>
                  <option value="WhatsApp">WhatsApp</option>
                  <option value="Campus Ambassador">Campus Ambassador</option>
                  <option value="Friend">Friend</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
          </SectionCard>

          {/* 02 — Team Leader */}
          <SectionCard title="Team Leader" subtitle="Details of the team lead">
            {renderMemberFields(leader, setLeader, true)}
          </SectionCard>

          {/* 03 — Member 2 */}
          <SectionCard title="Team Member 2" subtitle="Second team member details">
            {renderMemberFields(member2, setMember2, true)}
          </SectionCard>

          {/* 04 — Member 3 (conditional) */}
          {parseInt(teamInfo.teamSize) >= 3 && (
            <SectionCard title="Team Member 3" subtitle="Third team member details">
              {renderMemberFields(member3, setMember3, true)}
            </SectionCard>
          )}

          {/* 05 — Member 4 (conditional) */}
          {teamInfo.teamSize === '4' && (
            <SectionCard title="Team Member 4" subtitle="Fourth team member details">
              {renderMemberFields(member4, setMember4, true)}
            </SectionCard>
          )}

          {/* 06 — Compliance */}
          <SectionCard title="Final Steps" subtitle="Review and confirm your participation">
            <div className="space-y-5">
              <label className="flex items-start gap-4 p-5 bg-zinc-800 border border-zinc-700 rounded-xl cursor-pointer hover:border-yellow-500/50 transition-colors">
                <input type="checkbox" checked={compliance.codeOfConduct}
                  onChange={(e) => setCompliance({ ...compliance, codeOfConduct: e.target.checked })}
                  className="mt-1 w-5 h-5 accent-yellow-500 shrink-0" required />
                <div>
                  <span className="text-white font-bold">Agree to Code of Conduct <span className="text-yellow-500">*</span></span>
                  <p className="text-zinc-400 text-sm mt-1">I agree to abide by the hackathon's code of conduct and rules.</p>
                </div>
              </label>

              <label className="flex items-start gap-4 p-5 bg-zinc-800 border border-zinc-700 rounded-xl cursor-pointer hover:border-yellow-500/50 transition-colors">
                <input type="checkbox" checked={compliance.sponsorConsent}
                  onChange={(e) => setCompliance({ ...compliance, sponsorConsent: e.target.checked })}
                  className="mt-1 w-5 h-5 accent-yellow-500 shrink-0" required />
                <div>
                  <span className="text-white font-bold">Sponsor Consent <span className="text-yellow-500">*</span></span>
                  <p className="text-zinc-400 text-sm mt-1">I consent to sharing my contact details with event sponsors for networking opportunities.</p>
                </div>
              </label>

              <div>
                <label className={labelStyle}>Join our tech community for future updates? <span className="text-yellow-500">*</span></label>
                <select value={compliance.communityInterest}
                  onChange={(e) => setCompliance({ ...compliance, communityInterest: e.target.value })}
                  className={selectStyle} required>
                  <option value="">Select Option</option>
                  <option value="Yes">Yes, I'd love to join!</option>
                  <option value="No">No, thank you</option>
                </select>
              </div>
            </div>
          </SectionCard>

          {/* Submit */}
          <div className="text-center pt-6">
            <button type="submit" disabled={isSubmitting}
              className={`px-14 py-5 font-black text-lg sm:text-xl rounded-full transition-all duration-300 uppercase tracking-wider ${isSubmitting
                ? 'bg-zinc-600 text-zinc-400 cursor-not-allowed'
                : 'bg-yellow-500 text-black hover:bg-yellow-400 hover:scale-105 shadow-[0_0_40px_rgba(234,179,8,0.25)]'
                }`}>
              {isSubmitting ? 'Submitting...' : 'Submit Registration →'}
            </button>
            <p className="text-zinc-500 text-xs mt-5 uppercase tracking-widest font-semibold">
              Make sure all details are correct before submitting.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;