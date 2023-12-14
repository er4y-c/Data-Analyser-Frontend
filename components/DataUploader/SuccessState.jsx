import React from 'react';
import Image from 'next/image';

const SuccessState = () => (
    <div className="flex flex-col justify-center items-center mt-16">
        <Image src="/icons/success.png" width={48} height={48} alt="Data source upload" />
        <p className="text-gray-800">Dataset uploaded successfully</p>
    </div>
  );

export default SuccessState;
