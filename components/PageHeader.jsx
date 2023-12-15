import React from 'react'

const PageHeader = ({ title, description }) => (
    <div className="bg-gray-200 px-8 py-16">
        <h1 className="text-xl text-gray-800">{title}</h1>
        <p className="text-gray-600 text-sm">{description}</p>
    </div>
  )

export default PageHeader;
