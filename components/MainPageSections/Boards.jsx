import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { boards } from '../../utils';
import { Separator } from '@radix-ui/themes';

const Boards = () => {
  const a = 5;
  return (
    <div>
      <div className="flex justify-between items-center">
        <p>Pinned boards</p>
        <Link href="/dashboard/boards" className="mr-2 text-blue-600"> See all</Link>
      </div>
      <Separator my="3" size="4" />
      {
        boards.map((board) => (
          <Link
            key={board.id}
            href={`/dashboard/boards/${board.id}`}
            className="relative flex items-center gap-x-4 py-8 w-full rounded-xl border-2 border-gray-200 hover:border-blue-500 cursor-pointer mb-8">
            <Image src={board.icon} width={100} height={100} alt="Board icon" className="mx-4" />
            <div>
              <p>{board.title}</p>
              <p>{board.description}</p>
            </div>
            <button className="absolute right-4">
              <Image
                src={board.isPinned ? '/icons/star-pinned.svg' : '/icons/star.svg'}
                width={20}
                height={20}
                alt="Pin icon"
              />
            </button>
          </Link>
        ))
      }
    </div>
  );
};

export default Boards;
