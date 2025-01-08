"use client";

const StudyInChina = () => {
  return (
    <section
      className="w-full h-[800px] pt-28 sm:pt-16 bg-cover bg-center relative text-white "
      style={{
        backgroundImage: "url('/img/study.jpeg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
        {/* Title and Subtitle */}
        <div className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Study or Work Abroad
          </h1>
          <p className="text-lg sm:text-xl px-4">
            Discover Higher Education and Job Opportunities in China and Europe – Your Pathway to a
            Global Learning and Working Experience
          </p>
        </div>

        {/* Search Field */}
        <div className="w-full max-w-md mb-8">
          <input
            type="text"
            placeholder="Search"
            className="w-full px-4 py-2 rounded-lg shadow-md text-gray-800"
          />
        </div>

        {/* Links */}
        <div className="w-full max-w-5xl grid grid-cols-2 sm:grid-cols-5 gap-4 text-center">
          <a
            href="../../About/Contact"
            className="flex flex-col items-center justify-center p-3 sm:p-4 bg-purple-600 rounded-lg hover:bg-purple-700 transition text-sm sm:text-base"
          >
            <i className="fas fa-scroll text-2xl sm:text-3xl mb-2"></i>
            <span>Admission Notice</span>
          </a>
          <a
            href="../../Universities/Top"
            className="flex flex-col items-center justify-center p-3 sm:p-4 bg-purple-600 rounded-lg hover:bg-purple-700 transition text-sm sm:text-base"
          >
            <i className="fas fa-university text-2xl sm:text-3xl mb-2"></i>
            <span>Universities Abroad</span>
          </a>
          <a
            href="../../Universities/Majors"
            className="flex flex-col items-center justify-center p-3 sm:p-4 bg-purple-600 rounded-lg hover:bg-purple-700 transition text-sm sm:text-base"
          >
            <i className="fas fa-book text-2xl sm:text-3xl mb-2"></i>
            <span>University Majors</span>
          </a>
          <a
            href="../../Universities/Cities"
            className="flex flex-col items-center justify-center p-3 sm:p-4 bg-purple-600 rounded-lg hover:bg-purple-700 transition text-sm sm:text-base"
          >
            <i className="fas fa-map-marker-alt text-2xl sm:text-3xl mb-2"></i>
            <span>Popular Cities Abroad</span>
          </a>
          <a
            href="../../Universities/Top"
            className="flex flex-col items-center justify-center p-3 sm:p-4 bg-purple-600 rounded-lg hover:bg-purple-700 transition text-sm sm:text-base"
          >
            <i className="fas fa-star text-2xl sm:text-3xl mb-2"></i>
            <span>Top Universities Abroad</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default StudyInChina;



