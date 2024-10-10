import { useEffect, useState } from "react";

const Profile = () => {
  const [users, setUser] = useState(null);

  useEffect(() => {
    // Retrieve users data from localStorage
    const storedUser = localStorage.getItem("users");
    console.log("Stored User:", storedUser); // Debugging line
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  if (!users) {
    return <div>Loading...</div>; // Show a loading state if users data is not yet available
  }

  return (
    <div className="max-w-lg mx-auto p-4 mt-[200px] bg-white shadow-md rounded-lg">
      <div className="flex items-center mb-4">
        <img
          src={users.img}
          alt={users.name}
          className="w-24 h-24 rounded-full border-2 border-gray-300"
        />
        <div className="ml-4">
          <h1 className="text-2xl font-semibold">{users.name}</h1>
          <p className="text-gray-600">Age: {users.age}</p>
          <p className="text-gray-600">Phone: {users.phone}</p>
          <p className="text-gray-600">Email: {users.email}</p>
          <p className="text-gray-600">Address: {users.address}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
