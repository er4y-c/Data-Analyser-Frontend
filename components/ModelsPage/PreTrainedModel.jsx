import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const PreTrainedModel = ({ icon = '/icons/ml-icon.png', name, description }) => (
    <div className="w-56 h-56 p-4 rounded-xl shadow-md mt-32">
      <Link href={`/dashboard/models/${name}`}>
        <Image src={icon} alt={name} width={95} height={95} />
        <p className="text-gray-800">{name}</p>
        <p className="text-sm text-gray-500">{description}</p>
      </Link>
    </div>
  )

export default PreTrainedModel;
