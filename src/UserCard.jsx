import React from "react";

const UserCard = ({ user }) => {
    return (
        <div className="w-40 text-center font-bold text-white hover:bg-cyan-300 hover:cursor-pointer p-2 rounded-full bg-cyan-500">
            {user.username}
        </div>
    );
};

export default UserCard;
