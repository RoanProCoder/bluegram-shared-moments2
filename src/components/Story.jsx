import React from 'react';

const Story = ({ username, avatar }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-16 h-16 rounded-full p-1 bg-gradient-to-tr from-blue-500 to-blue-300">
        <img src={avatar} alt={username} className="w-full h-full object-cover rounded-full border-2 border-white" />
      </div>
      <span className="text-xs mt-1">{username}</span>
    </div>
  );
};

export default Story;