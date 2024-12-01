import React from "react";

const ProfileSection = () => {
  const user = {
    name: "Michael B",
    email: "michaelB999@gmail.com",
    picture: "https://via.placeholder.com/150", // Placeholder image
  };

  return (
    <div className="bg-blue-800 p-6 rounded-lg shadow-lg">
      <img
        src={user.picture}
        alt="User Profile"
        className="w-32 h-32 rounded-full mx-auto mb-4"
      />
      <h2 className="text-center text-xl font-bold">{user.name}</h2>
      <p className="text-center text-sm text-gray-300">{user.email}</p>

      <div className="mt-6">
        <button className="block w-full py-2 text-left text-sm hover:text-orange-400">
          ✏️ Edit Profile
        </button>
        <button className="block w-full py-2 text-left text-sm hover:text-orange-400">
          ⚙️ Settings
        </button>
        <button className="block w-full py-2 text-left text-sm hover:text-orange-400">
          🚪 Log Out
        </button>
      </div>
    </div>
  );
};

export default ProfileSection;
