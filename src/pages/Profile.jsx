import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const { currentUser, image, first_name, last_name, email } = useSelector(
    (state) => state.auth
  );

  return (
    <div className="py-8 px-1 md:py-20">
      <div className="m-auto w-80 lg:w-[500px] h-fit p-4 md:p-6 bg-white/50 rounded-lg shadow-2xl">
        <div>
          <img className="w-full rounded-full" src={image} alt="profile pic" />
        </div>
        <div className="border-b border-black pt-4">
          <p>
            <b>Username:</b> <span>{currentUser}</span>
          </p>
        </div>
        <div className="border-b border-black pt-4">
          <p>
            <b>First name:</b> <span>{first_name}</span>
          </p>
        </div>
        <div className="border-b border-black pt-4">
          <p>
            <b>Last name:</b> <span>{last_name}</span>
          </p>
        </div>
        <div className="border-b border-black pt-4">
          <p>
            <b>Email:</b> <span>{email}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
