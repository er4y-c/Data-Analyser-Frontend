import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const Panel = ({ icon, title, description, href }) => (
    <Link className="flex justify-between gap-x-2 mt-6 hover:bg-gray-100 mx-1 p-2 rounded-xl w-[230px]" href={href}>
      <div className="m-auto w-1/4">
        <Image src={icon} width={35} height={35} alt="Report icon" />
      </div>
      <div className="w-1/2">
        <p className="text-gray-800 font-semibold text-sm">{title}</p>
        <p className="text-gray-600 text-xs">{description}</p>
      </div>
    </Link>
  )

export default Panel;
