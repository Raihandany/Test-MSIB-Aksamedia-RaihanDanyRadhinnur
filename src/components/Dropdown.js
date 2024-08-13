import React from 'react';

const Dropdown = ({ handleLogout }) => {
  return (
    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-20">
      <button
        onClick={handleLogout}
        className="block w-full px-4 py-2 text-gray-800 text-left hover:bg-gray-100"
      >
        Logout
      </button>
    </div>
  );
};

export default Dropdown;