"use client";

const JoinCommunity = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between bg-gray-100 p-8 rounded-lg shadow-lg">
      {/* Left Side Content */}
      <div className="text-left space-y-4 max-w-lg">
        <h2 className="text-3xl font-bold text-gray-800">
          Join our community
        </h2>
        <p className="text-gray-600 text-lg">
          Never miss any opportunity to study or work abroad.
        </p>
      </div>

      {/* Right Side - Sign Up Button */}
      <div className="mt-6 md:mt-0">
        <a
          href="/signup" // Replace with your actual sign-up page route
          className="flex items-center gap-2 px-6 py-3 bg-purple-600 text-white text-lg font-medium rounded-lg shadow-md hover:bg-purple-700 transition"
        >
          Sign Up
          {/* FontAwesome Forward Arrow Icon */}
          <i className="fas fa-arrow-right"></i>
        </a>
      </div>
    </section>
  );
};

export default JoinCommunity;

  