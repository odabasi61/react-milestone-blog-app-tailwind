import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const { currentUser } = useSelector((state) => state.auth);

  return (
    <div className="p-8 md:py-20">
      <div className="m-auto w-80 xl:w-[700px] h-fit p-4 md:p-6 bg-white/50 rounded-lg shadow-2xl">
        <div>
          <img className="w-full" src={currentUser.image} alt="profile pic" />
        </div>
        <div className="border-b border-black">
          <p>
            Username: <span>{currentUser.username}</span>
          </p>
        </div>
        <div className="border-b border-black pt-4">
          <p>
            First name: <span>{currentUser.first_name}</span>
          </p>
        </div>
        <div className="border-b border-black pt-4">
          <p>
            Last name: <span>{currentUser.last_name}</span>
          </p>
        </div>
        <div className="border-b border-black pt-4">
          <p>
            Email: <span>{currentUser.email}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
