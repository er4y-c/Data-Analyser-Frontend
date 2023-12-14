import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { data_services } from '../../services/data';
import Loading from '../Loading';
import SuccessState from './SuccessState';

const DataUploader = () => {
  const [file, setFile] = useState(null);
  const [isLoading, setIsloading] = useState(false);
  const [data, setData] = useState(null);
  const fileRef = useRef(null);
  const handleFileChange = (e) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    setIsloading(true);
    if (file) {
      const formData = new FormData();
      formData.append('file', file);
        data_services.upload_csv_excel_file(formData)
        .then((res) => {
          setData(res?.message);
          setIsloading(false);
        })
        .catch(() => {
            setFile(null);
            setIsloading(false);
        });
      }
  };
  const handleClick = () => {
    fileRef.current.click();
  };
  return (
    <div>
      <div>
        <label htmlFor="file" className="sr-only">
          Choose a file
        </label>
        <div className="flex flex-col justify-center items-center border-gray-500 shadow-md rounded-xl mt-32 lg:mx-auto mx-8 lg:w-1/2 py-32 px-8">
          <button onClick={handleClick}>
            <Image src="/icons/data-upload.png" width={96} height={96} alt="Data source upload" />
            <input
              ref={fileRef}
              id="file"
              type="file"
              accept=".csv, .xlsx"
              className="w-[0.1px] h-[0.1px] opacity-0 overflow-hidden absolute -z-1 cursor-pointer"
              onChange={handleFileChange}
            />
          </button>
          <p className="lg:text-xl text-gray-800">Upload your data source</p>
          <p className="text-gray-500 text-sm mb-16">Supported formats .xlsx and .csv</p>
          {isLoading && <Loading />}
          {file && (
            <section>
              File details:
              <ul>
                <li>Name: {file.name}</li>
                <li>Type: {file.type}</li>
                <li>Size: {file.size} bytes</li>
              </ul>
            </section>
          )}
          {file && <button onClick={handleUpload} className="bg-blue rounded-xl">Upload</button>}
          {data && <SuccessState />}
        </div>
      </div>
    </div>
  );
};

export default DataUploader;
