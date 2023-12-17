import React, { useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ReportsMenu from './ReportsMenu';
import { AuthContext } from '../context/auth';

const Navbar = () => {
  const { logout } = useContext(AuthContext);
  return (
    <nav className="bg-blue-600 px-4 flex justify-between items-center text-sm font-semibold text-gray-200">
      <div className="flex justify-between items-center">
        <Link href="/dashboard">
          <p className="font-bold text-2xl py-4">⌘</p>
        </Link>
        <div className="flex justify-center items-center ml-16 gap-x-4">
          <Link href="/dashboard/boards">Boards</Link>
          <Link href="/dashboard/datasets">Datasets</Link>
          <Link href="/dashboard/notebooks">Notebooks</Link>
          <Link href="/dashboard/models">Models</Link>
          <ReportsMenu />
        </div>
      </div>
      <div className="relative w-1/2 lg:w-1/3">
        <input
          type="text"
          placeholder="Search"
          className="bg-blue-800 text-gray-200 placeholder:text-gray-200 p-2 rounded-md pl-10 w-2/3 lg:w-full focus:outline-none"
        />
        <div className="absolute top-2 left-2">
          <Image src="/icons/search.png" width={25} height={25} alt="Search icon" />
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <Link href="/dashboard/data-connector">
          <Image src="/icons/connection.svg" width={25} height={25} alt="Data Source Management icon" />
        </Link>
        <div>
          <Image src="/icons/notification.svg" width={25} height={25} alt="Notification icon" />
        </div>
        <div>
          <Image src="/icons/settings.svg" width={25} height={25} alt="Settings icon" />
        </div>
        <div>
          <button onClick={() => logout()}>
            <Image src="/icons/logout.svg" width={25} height={25} alt="Logout icon" />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
