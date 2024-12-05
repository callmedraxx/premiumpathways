"use client"

export default function ApplySection() {
  return (
    <section className="relative bg-cover bg-center text-white py-16 px-4 rounded-lg" style={{ backgroundImage: "url('/img/student.jpeg')" }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Title */}
        <h1 className="text-4xl font-bold mb-4">How to Apply</h1>

        {/* Subtopic */}
        <p className="text-lg sm:text-xl mb-12">
          See why Premium Pathways is one of the best friends for exploring the city.
        </p>

        {/* Points */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Consultation */}
          <div className="flex flex-col items-center text-center">
            <i className="fas fa-handshake text-4xl text-purple-400 mb-4"></i>
            <h3 className="text-xl font-semibold mb-2">Consultation</h3>
            <p className="text-sm">
              One-To-One Counseling Service, 600+ Universities, 13 Disciplines, 80+ Majors, Online 7*24h Feedback, Analysis Of Professional Employment Prospect, Customized Study Plan
            </p>
          </div>

          {/* Application */}
          <div className="flex flex-col items-center text-center">
            <i className="fas fa-file-alt text-4xl text-purple-400 mb-4"></i>
            <h3 className="text-xl font-semibold mb-2">Application</h3>
            <p className="text-sm">
              Evaluation Of Application Materials, Majors & Universities Matching, 300+ Agreement Universities, 1000+ Scholarship Offers, Exclusive Application Channels, Translation & Optimization Services, No Time Difference, No Language Barrier, Smooth Follow-Up, Mailing Offer
            </p>
          </div>

          {/* Pre-departure Preparation */}
          <div className="flex flex-col items-center text-center">
            <i className="fas fa-plane-departure text-4xl text-purple-400 mb-4"></i>
            <h3 className="text-xl font-semibold mb-2">Pre-departure Preparation</h3>
            <p className="text-sm">
              Visa Guidance, Accommodation Booking, Pre-Departure Preparation Briefing, Pick-Up & Currency Exchange Booking
            </p>
          </div>

          {/* When You Arrive in China */}
          <div className="flex flex-col items-center text-center">
            <i className="fas fa-map-marker-alt text-4xl text-purple-400 mb-4"></i>
            <h3 className="text-xl font-semibold mb-2">When You Arrive in China</h3>
            <p className="text-sm">
              Pick-Up Service In Airports Of Big Cities, Registration In School And Dormitory, Home-School Communication, Automated Membership Privileges (I.E., Participating In Activities Of International Students Free Of Charge, And Giving Priority To Job Opportunities Etc.)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
