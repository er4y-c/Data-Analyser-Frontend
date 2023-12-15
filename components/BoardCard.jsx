import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { Card, Inset } from '@radix-ui/themes';

const BoardCard = ({ icon, title, description, location }) => (
  <Card size={4} className="py-2 rounded-2xl">
    <Link href={location} className="flex flex-col w-48 h-48 gap-y-8">
      <Inset clip="padding-box" side="top" pb="current">
        <Image
          src={icon}
          alt="Bold typography"
          width={140}
          height={140}
        />
      </Inset>
      <div className="flex flex-col justify-center items-start px-4">
        <p className="text-gray-800 text-sm">{title}</p>
        <p className="text-xs text-gray-500">{description}</p>
      </div>
    </Link>
  </Card>
  )

export default BoardCard;
