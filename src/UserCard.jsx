import React from "react";

const UserCard = ({ user }) => {
    return (
        <div className="w-40 text-center font-bold text-white hover:bg-red-400 hover:cursor-pointer p-2 rounded-full bg-red-600">
            {user.username}
        </div>
    );
};

export default UserCard;
