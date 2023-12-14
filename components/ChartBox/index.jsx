import React from 'react';
import classNames from 'classnames';

import Header from './Header';

const ChartBox = ({
    width = 96,
    height = 96,
    title,
    description,
    children,
    className,
}) => {
    const currentWidth = `w-${width.toString()}`
    const currentHeight = `h-${height.toString()}`

    return (
        <div className={classNames('rounded-md p-8 border border-gray-200 hover:border-blue-600 m-9', currentHeight, currentWidth, className)}>
            <Header
              title={title}
              description={description}
            />
            {children}
        </div>
    );
};

export default ChartBox;
