import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const NewTrainBox = () => (
    <div className="w-56 h-56 p-4 rounded-xl shadow-md mt-32">
        <Link href="/dashboard/models/train" className="flex flex-col justify-center items-center">
            <Image src="/icons/create.png" alt="Train new model" width={95} height={95} />
            <p className="text-gray-800">Train new model</p>
        </Link>
    </div>
  )

export default NewTrainBox;
