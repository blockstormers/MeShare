import React from "react";

const ProfileSection = () => {
  // User data, typically this would come from props or a state management solution
  const user = {
    name: "Michael B",
    email: "michaelB999@gmail.com",
    picture: "https://via.placeholder.com/150", // Placeholder image
  };

  return (
    <div 
      className="bg-blue-800 p-6 rounded-lg shadow-lg" 
      style={{
        display: "flex", // Using flexbox to center the content
        flexDirection: "column", // Align elements vertically
        alignItems: "center", // Center the content horizontally
        justifyContent: "center", // Center content vertically
        width: "90%" // Make the profile section take up 90% of the container's width
      }}
    >
      {/* Profile Picture */}
      <img
        src={user.picture} // Display the user's profile picture
        alt="User Profile" // Alt text for accessibility
        className="w-32 h-32 rounded-full mx-auto mb-4" // Tailwind classes to style the image (round, margin, etc.)
      />

      {/* User Name */}
      <div>
        <h2 className="text-center text-xl font-bold">{user.name}</h2> {/* Display user's name */}
      </div>

      {/* User Email */}
      <div>
        <p className="text-center text-sm text-gray-300">{user.email}</p> {/* Display user's email */}
      </div>

      {/* Action Buttons */}
      <div 
        className="mt-6" 
        style={{
          display: "flex", // Use flexbox for the buttons
          flexDirection: 'column', // Stack buttons vertically
          margin: "10%", // Add margin around the buttons
          gap: "10px" // Add spacing between buttons
        }}
      >
        {/* Edit Profile Button */}
        <button className="block w-full py-2 text-left text-sm hover:text-orange-400">
          ✏️ Edit Profile
        </button>

        {/* Settings Button */}
        <button className="block w-full py-2 text-left text-sm hover:text-orange-400">
          ⚙️ Settings
        </button>

        {/* Log Out Button */}
        <button className="block w-full py-2 text-left text-sm hover:text-orange-400">
          🚪 Log Out
        </button>
      </div>
    </div>
  );
};

export default ProfileSection;
