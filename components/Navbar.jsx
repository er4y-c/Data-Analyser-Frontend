import React from 'react';
import Image from 'next/image';

const Navbar = () => (
    <nav className="bg-blue-600 px-4 flex justify-between items-center">
      <p className="font-bold text-xl py-4">Data Analyser</p>
      <div className="relative">
        <input
          type="text"
          placeholder="Ara..."
          className="bg-white text-blue-500 border-2 border-blue-500 p-2 rounded-md pl-10 w-2/3 lg:w-full"
        />
        <div className="absolute top-2 left-2 text-gray-400">
          <Image src="/icons/search.svg" width={25} height={25} alt="Search icon" />
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <div>
          <Image src="/icons/connection.svg" width={25} height={25} alt="Data Source Management icon" />
        </div>
        <div>
          <Image src="/icons/notification.svg" width={25} height={25} alt="Notification icon" />
        </div>
        <div>
          <Image src="/icons/settings.svg" width={25} height={25} alt="Settings icon" />
        </div>
      </div>
    </nav>
  );

export default Navbar;
